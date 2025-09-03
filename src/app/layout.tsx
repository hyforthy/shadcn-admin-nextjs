'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from '@/components/ui/sonner'
import { NavigationProgress } from '@/components/navigation-progress'
import { DirectionProvider } from '@/context/direction-provider'
import { FontProvider } from '@/context/font-provider'
import { ThemeProvider } from '@/context/theme-provider'
import '@/styles/index.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          if (process.env.NODE_ENV === 'development') console.log({ failureCount, error })

          if (failureCount >= 0 && process.env.NODE_ENV === 'development') return false
          if (failureCount > 3 && process.env.NODE_ENV === 'production') return false

          return !(
            error instanceof Error &&
            'response' in error &&
            [401, 403].includes((error as { response?: { status?: number } }).response?.status ?? 0)
          )
        },
        refetchOnWindowFocus: process.env.NODE_ENV === 'production',
        staleTime: 10 * 1000, // 10s
      },
      mutations: {
        onError: (error) => {
          // handleServerError(error)
          
          if (error instanceof Error && 'response' in error) {
            if ((error as { response?: { status?: number } }).response?.status === 304) {
              // toast.error('Content not modified!')
            }
          }
        },
      },
    },
  })

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <FontProvider>
              <DirectionProvider>
                <NavigationProgress />
                {children}
                <Toaster duration={5000} />
                {process.env.NODE_ENV === 'development' && (
                  <ReactQueryDevtools buttonPosition='bottom-left' />
                )}
              </DirectionProvider>
            </FontProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
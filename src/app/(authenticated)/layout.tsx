import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>
}
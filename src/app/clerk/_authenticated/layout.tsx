import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'

export default function ClerkAuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>
}
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { OtpForm } from './components/otp-form'

export default function Otp() {
  return (
    <Card className='gap-4'>
      <CardHeader>
        <CardTitle className='text-base tracking-tight'>
          Two-factor Authentication
        </CardTitle>
        <CardDescription>
          Please enter the authentication code. <br /> We have sent the
          authentication code to your email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <OtpForm />
      </CardContent>
      <CardFooter>
        <p className='text-muted-foreground px-8 text-center text-sm'>
          Haven&apos;t received it?{' '}
          <Link
            href='/sign-in'
            className='hover:text-primary underline underline-offset-4'
          >
            Resend a new code.
          </Link>
          .
        </p>
      </CardFooter>
    </Card>
  )
}
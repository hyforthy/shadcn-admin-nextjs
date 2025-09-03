import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <Card className='gap-4'>
      <CardHeader>
        <CardTitle className='text-lg tracking-tight'>Sign In</CardTitle>
        <CardDescription>
          Enter your email and password below to log into your account. <br />
          Don&apos;t have an account?{' '}
          <Link
            href='/sign-up'
            className='hover:text-primary underline underline-offset-4'
          >
            Sign Up
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <UserAuthForm />
      </CardContent>
      <CardFooter>
        <p className='text-muted-foreground px-8 text-center text-sm'>
          By clicking sign in, you agree to our{' '}
          <a
            href='/terms'
            className='hover:text-primary underline underline-offset-4'
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href='/privacy'
            className='hover:text-primary underline underline-offset-4'
          >
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  )
}
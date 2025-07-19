'use client'
import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { UserSignUPValidator } from '@/types'
import { UserSignUpValidator } from '@/lib/validator'
import { useRouter, useSearchParams } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { registerUser, signInWithCredentials } from '@/lib/actions/User.action'
import { toast } from 'sonner'
import SeparatorWithOr from '@/components/shared/Separator'
import { GoogleSignInForm } from '@/components/shared/Googlelogin'

const Signupform = () => {
  const searchparams = useSearchParams()
  const callbackUrl = searchparams.get('callbackUrl') || '/'
  const router = useRouter()

  const defaultValues =
    process.env.NODE_ENV === 'development'
      ? {
          name: 'fadil',
          email: 'test@gmail.com',
          password: '12345',
          confirmPassword: '12345',
        }
      : {}

  const form = useForm<UserSignUPValidator>({
    resolver: zodResolver(UserSignUpValidator),
    defaultValues: defaultValues,
  })

  const onSubmit = async (values: UserSignUPValidator) => {
    try {
      const res = await registerUser(values)
      if (!res.success) {
        toast.error(res.message)
      }
      await signInWithCredentials({
        email: values.email,
        password: values.password,
      })
      toast.success(res.message)
      router.push(callbackUrl)
    } catch (error) {
      console.error('Registration error:', error)
      toast.error('An error occurred while registering. Please try again.')
    }
  }

  return (
    <div className=' space-y-6'>
      <h1 className='text-center text-3xl font-bold'>Create an account</h1>
      <Card className='border-gray-300 rounded-lg shadow-md'>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem className='space-y-2'>
                    <FormLabel>Username :</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Name'
                        className='border-gray-300 rounded-full p-6'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className='text-red-500 text-sm font-medium' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='space-y-2'>
                    <FormLabel>Email :</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Email'
                        className='border-gray-300 rounded-full p-6'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className='text-red-500 text-sm font-medium' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='space-y-2'>
                    <FormLabel>Password :</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Name'
                        className='border-gray-300 rounded-full p-6'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className='text-red-500 text-sm font-medium' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem className='space-y-2'>
                    <FormLabel>confirmPassword :</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='confirmPassword'
                        className='border-gray-300 rounded-full p-6'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className='text-red-500 text-sm font-medium' />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='w-full bg-black text-white rounded-full'
              >
                Submit
              </Button>
            </form>
          </Form>
          <div className='text-center text-sm text-muted-foreground space-y-2 mt-6'>
            <p className='highlight-link'>
              By creating an account, you agree to ChatX’s{' '}
              <Link href='/page/conditions-of-use' className=' underline '>
                Conditions of Use
              </Link>{' '}
              and{' '}
              <Link href='/page/Privacy-policy' className='underline '>
                Privacy Notice
              </Link>
              .
            </p>

            <Separator className='my-4' />

            <p className='highlight-link'>
              Already have an account?{' '}
              <Link
                href={`/sign-in?callbackUrl=${callbackUrl}`}
                className='text-primary underline hover:text-primary/80'
              >
                Sign In
              </Link>
            </p>
            <SeparatorWithOr>or</SeparatorWithOr>
            <GoogleSignInForm />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signupform

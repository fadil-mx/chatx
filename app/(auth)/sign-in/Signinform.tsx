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
import { UserSignINValidator } from '@/types'
import { UserSignInValidator } from '@/lib/validator'
import { redirect, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'
import { signInWithCredentials } from '@/lib/actions/User.action'
import { isRedirectError } from 'next/dist/client/components/redirect-error'

const Signin = () => {
  const searchparams = useSearchParams()
  const callbackUrl = searchparams.get('callbackUrl') || '/'

  const defaultvalues =
    process.env.NODE_ENV === 'development'
      ? {
          email: 'test@gmail.com',
          password: '12345',
        }
      : {}

  const form = useForm<UserSignINValidator>({
    resolver: zodResolver(UserSignInValidator),
    defaultValues: defaultvalues,
  })

  async function onSubmit(values: UserSignINValidator) {
    try {
      await signInWithCredentials({
        email: values.email,
        password: values.password,
      })
      toast.success('Sign in successful')
      redirect(callbackUrl)
    } catch (error) {
      if (isRedirectError(error)) {
        throw error
      }
      console.error(error)
      toast.error((error as Error).message)
    }
  }

  return (
    <div className=' space-y-6'>
      <h1 className='text-center text-3xl font-bold'>Welcome back</h1>
      <Card className='border-gray-300 rounded-lg shadow-md'>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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

              <Button
                type='submit'
                className='w-full bg-black text-white rounded-full'
              >
                Submit
              </Button>
            </form>
          </Form>
          <p className='highlight-link text-center mt-6'>
            Don't have an account?
            <Link
              href={`/sign-up?callbackUrl=${callbackUrl}`}
              className='underline '
            >
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signin

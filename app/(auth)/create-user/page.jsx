"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z
    .string()
    .min(6, {
      message: "Confirm password must be at least 6 characters.",
    })
    .refine((data) => data === formSchema.password, {
      message: "Passwords do not match.",
    }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

const CreateUser = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Burada kullanıcı oluşturma isteğini API'ye gönderebilirsiniz.
    // Örneğin: fetch('/api/register', { method: 'POST', body: JSON.stringify(data) })
  };

  return (
    <div className='lg:w-1/4 container'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
          <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-bodyText'>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='John Doe' {...field} />
                </FormControl>
                <FormMessage className='validation-login' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-bodyText'>Username</FormLabel>
                <FormControl>
                  <Input placeholder='username' {...field} />
                </FormControl>
                <FormMessage className='validation-login' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-bodyText'>Email</FormLabel>
                <FormControl>
                  <Input placeholder='demo@gmail.com' {...field} />
                </FormControl>
                <FormMessage className='validation-login' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-bodyText'>Password</FormLabel>
                <FormControl>
                  <Input placeholder='password' type='password' {...field} />
                </FormControl>
                <FormMessage className='validation-login' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-bodyText'>
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='confirm password'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='validation-login' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-bodyText'>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder='1234567890' {...field} />
                </FormControl>
                <FormMessage className='validation-login' />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full'>
            Create Account
          </Button>
        </form>
        <div className='text-error font-semibold text-sm flex flex-end justify-end mt-2'>
          <Link href='/login'>Allready Account?</Link>
        </div>
      </Form>
    </div>
  );
};

export default CreateUser;

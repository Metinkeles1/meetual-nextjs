"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Passwor must be at least 2 characters",
  }),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='lg:w-1/4 container'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 '>
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
          <Button type='submit' className='w-full !mt-4'>
            Submit
          </Button>
        </form>
        <div className='text-error font-semibold text-sm flex flex-end justify-end mt-2'>
          <Link href='/create-user'>Do you have an account?</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Form } from 'vee-validate'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const usernameSchema = toTypedSchema(
  z.object({
    username: z.string(),
  }))

const emailSchema = toTypedSchema(
  z.object({
    email: z.string('Email is required').email(),
  }))

const form = useForm({
  validationSchema: usernameSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

async function onSubmitEmail(values) {
  console.log('Form submitted!', values)
}
</script>

<template>
  <div class="w-full h-screen flex gap-6 justify-center items-center bg-gray-100">
    <div class="h-[20rem] w-[20rem] p-4 bg-white rounded-xl">
      <form class="w-full space-y-6" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Username" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>

    <div class="h-[20rem] w-[20rem] p-4 bg-white rounded-xl">
      <Form class="w-full space-y-6" @submit="onSubmitEmail">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Email" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </div>
</template>
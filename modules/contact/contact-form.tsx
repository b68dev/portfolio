'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Form } from '~/components/ui/form'

const contactFormSchema = z.object({
  message: z.string().min(2),
  name: z.string().min(2),
  email: z.string().email(),
})
type ContactFormSchema = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const t = useTranslations('Contact')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })
  const onSubmit = React.useCallback(
    async (data) => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({ data }),
        })
        if (response.ok) {
          toast.success(t('Form.Submit.Success'), { duration: 5000 })
          reset()
        } else {
          toast.error(t('Form.Submit.Error'))
        }
        // eslint-disable-next-line unused-imports/no-unused-vars
      } catch (_) {
        toast.error(t('Form.Submit.Error'))
      }
    },
    [t, reset],
  )

  return (
    <Form.Root submitting={isSubmitting} onSubmit={handleSubmit(onSubmit)}>
      <Form.Container className='px-4'>
        <header className='py-4'>
          <p className='text-sm tracking-tight text-stone-500'>
            {t.rich('Tips', {
              email: (text) => (
                <a href='mailto:hi@b68.dev' className='text-stone-600 no-underline hover:underline dark:text-stone-300'>
                  {text}
                </a>
              ),
            })}
          </p>
        </header>

        <Form.Section>
          <Form.FieldGroup name='name' size='lg'>
            <Form.Label>{t('Form.FullName.Label')}</Form.Label>
            <Form.Input placeholder={t('Form.FullName.Placeholder')} {...register('name')} />
            <Form.Error message={errors.name?.message} />
          </Form.FieldGroup>
          <Form.FieldGroup name='email' size='lg'>
            <Form.Label>{t('Form.Email.Label')}</Form.Label>
            <Form.Input
              type='email'
              autoComplete='on'
              placeholder={t('Form.Email.Placeholder')}
              {...register('email')}
            />
            <Form.Error message={errors.email?.message} />
          </Form.FieldGroup>

          <Form.FieldGroup name='message' size='lg'>
            <Form.Label>{t('Form.Message.Label')}</Form.Label>
            <Form.TextArea
              defaultValue=''
              rows={3}
              placeholder={t('Form.Message.Placeholder')}
              {...register('message')}
            />
            <Form.Error message={errors.message?.message} />
          </Form.FieldGroup>
        </Form.Section>
      </Form.Container>

      <Form.Footer className='pt-0'>
        <Form.SubmitButton className='w-full'>
          {t(isSubmitting ? 'Form.Submit.Sending' : 'Form.Submit.Idle')}
        </Form.SubmitButton>
      </Form.Footer>
    </Form.Root>
  )
}

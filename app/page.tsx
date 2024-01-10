import Form from '@/components/Form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WebhookSender',
  description: 'Create by Mc',
}

export default function Home() {
  return (
    <div>
      <Form />
    </div>
  )
}

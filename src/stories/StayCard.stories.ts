import type { Meta, StoryObj } from '@storybook/vue3'

import StayCard from '../components/StayCard.vue'

const meta = {
  title: 'StayCard',
  component: StayCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {} // default value
} satisfies Meta<typeof StayCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    stay: {
      city: 'Turku',
      country: 'Finland',
      superHost: false,
      title: 'Turku Nordic Home near city center',
      rating: 4.24,
      maxGuests: 5,
      type: 'Entire apartment',
      beds: 3,
      photo:
        'https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80'
    }
  }
}

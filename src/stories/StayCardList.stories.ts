import type { Meta, StoryObj } from '@storybook/vue3'

import StayCardList from '../components/StayCardList.vue'
import '../assets/main.css'

const meta = {
  title: 'StayCardList',
  component: StayCardList,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {} // default value
} satisfies Meta<typeof StayCardList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    stays: [
      {
        city: 'Helsinki',
        country: 'Finland',
        superHost: false,
        title: 'Stylist apartment in center of the city',
        rating: 4.4,
        maxGuests: 3,
        type: 'Entire apartment',
        beds: 2,
        photo:
          'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80'
      },
      {
        city: 'Turku',
        country: 'Finland',
        superHost: false,
        title: 'Nice apartment in center of Helsinki',
        rating: 4.2,
        maxGuests: 5,
        type: 'Entire apartment',
        beds: 3,
        photo:
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
      },
      {
        city: 'Helsinki',
        country: 'Finland',
        superHost: true,
        title: 'Arty interior in 1900 wooden house',
        rating: 4.5,
        maxGuests: 10,
        type: 'Entire house',
        beds: 6,
        photo:
          'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
      },
      {
        city: 'Helsinki',
        country: 'Finland',
        superHost: false,
        title: 'Apartment next to market spuare',
        rating: 4.48,
        maxGuests: 3,
        type: 'Entire apartment',
        beds: null,
        photo:
          'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
      }
    ]
  }
}

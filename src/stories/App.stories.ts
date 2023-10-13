import type { Meta, StoryObj } from '@storybook/vue3'

import App from '../App.vue'
import '../assets/main.css'

const meta = {
  title: 'App',
  component: App,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {} // default value
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

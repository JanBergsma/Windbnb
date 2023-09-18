import type { Meta, StoryObj } from '@storybook/vue3'

import SearchBox from '@/components/SearchBox.vue'
import '../assets/main.css'

const meta = {
  title: 'SearchBox',
  component: SearchBox,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {} // default value
} satisfies Meta<typeof SearchBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

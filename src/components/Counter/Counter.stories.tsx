import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Counter } from './Counter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: '1adf',
  },
};

export const Secondary: Story = {
  args: {
    label: '1',
  },
};

export const Large: Story = {
  args: {
    size: 24,
    label: '999',
  },
};

export const Small: Story = {
  args: {
    size: 8,
    label: '',
  },
};

export const Pulse: Story = {
  args: {
    size: 8,
    label: '',
    pulse: true,
  },
};

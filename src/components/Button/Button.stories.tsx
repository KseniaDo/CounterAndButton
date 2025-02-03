import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useArgs} from '@storybook/preview-api';

import { Button } from './Button';
import { Counter } from '../Counter/Counter';

import { Large as Counter_Large } from '../Counter/Counter.stories.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta:Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  subcomponents: { Counter: Counter as React.ComponentType<any>,},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    Button_style: 'primary',
    label: 'Что сделать',
  },
};

export const Secondary: Story = {
  args: {
    Button_style: 'secondary',
    label: 'Что сделать',
  },
};

export const ButtonLarge: Story = {
  args: {
    Button_size: 56,
    label: 'Что сделать',
  },
};

export const ButtonSmall: Story = {
  args: {
    Button_size: 28,
    label: 'Что сделать',
  },
};

export const Focused: Story = {
    args: {
      Button_size: 36,
      label: 'Что сделать',
      focused: true,
    },
};

export const Disabled: Story = {
    args: {
      Button_size: 36,
      label: 'Что сделать',
      disabled: true,
    },
};

export const ButtonAndCounter: Story = {
    args: {
      Button_size: 36,
        label: 'Что сделать',
        disabled: false,
    },
    render: (args) => (
            <Button {...args}>
                <Counter {...Counter_Large.args} />
            </Button>
    ),
};

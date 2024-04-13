import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar.js';

type Story = StoryObj<typeof Avatar>;

export default { component: Avatar, tags: ['autodocs'] } as Meta<typeof Avatar>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </>
    )
  }
};

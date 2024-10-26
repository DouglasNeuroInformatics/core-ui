import type { Meta, StoryObj } from '@storybook/react';

import { CopyButton } from './CopyButton.js';

type Story = StoryObj<typeof CopyButton>;

export default { component: CopyButton } as Meta<typeof CopyButton>;

export const Default: Story = {
  parameters: {
    layout: 'centered'
  }
};

import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { DateField } from './DateField.js';

type Story = StoryObj<typeof DateField>;

export default { component: DateField } as Meta<typeof DateField>;

export const Default: Story = {
  decorators: [
    (Story) => {
      const [value, setValue] = useState<Date | undefined>();
      return (
        <Story
          args={{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            label: 'Date of Birth',
            name: 'date-of-birth',
            setValue,
            value
          }}
        />
      );
    }
  ]
};

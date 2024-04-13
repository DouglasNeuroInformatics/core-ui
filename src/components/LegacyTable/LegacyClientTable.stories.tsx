import React from 'react';

import { randomInt, range } from '@douglasneuroinformatics/libjs';
import type { Meta, StoryObj } from '@storybook/react';

import { LegacyClientTable } from './LegacyClientTable.js';
import { type LegacyTableColumn } from './LegacyTable.js';

type ExampleItem = {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
  c6: number;
  c7: number;
  c8: number;
  c9: number;
  c10: number;
  c11: number;
  c12: number;
  c13: number;
  c14: number;
  c15: number;
  id: string;
};

const columns: LegacyTableColumn<ExampleItem>[] = [
  {
    field: 'id',
    label: 'ID'
  }
];

for (let i = 1; i < 16; i++) {
  columns.push({
    field: `c${i}` as keyof ExampleItem,
    label: `Column ${i}`
  });
}

const data: ExampleItem[] = range(25).map((i) => {
  const item: { [key: string]: unknown } = { id: i };
  for (let i = 1; i < 16; i++) {
    item[`c${i}`] = randomInt(1, 10);
  }
  return item as ExampleItem;
});

const meta: Meta<typeof LegacyClientTable> = {
  component: LegacyClientTable,
  decorators: [
    (Story) => (
      <div className="h-full w-full p-12">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default: StoryObj<typeof LegacyClientTable<ExampleItem>> = {
  args: {
    columnDropdownOptions: [
      {
        label: 'Delete',
        onSelection: (column) => {
          alert(`Delete column: ${column.label}`);
        }
      }
    ],
    columns,
    data,
    minRows: 10,
    onEntryClick: (entry) => {
      alert(entry.id);
    }
  }
};

export const Empty: StoryObj<typeof LegacyClientTable<ExampleItem>> = {
  args: {
    columns: columns,
    data: []
  }
};

import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import QuestStep from './QuestStep';
import { QuestStepTypeEnum } from '@/domain/enums/questStepTypeEnum';

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta = {
  component: QuestStep,
  title: 'QuestStep',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {},
} satisfies Meta<typeof QuestStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    questStep: {
      id: 1,
      order: 0,
      type: QuestStepTypeEnum.Action,
      name: '',
      notes: '',
    },
  },
};

import React, { ChangeEvent, ChangeEventHandler } from 'react';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Quest, QuestStepItem } from '@/domain/models/quest.model';
import { useCreateQuestContext } from '@/state/createQuest.context';
import { QuestStepTypeEnum } from '@/domain/enums/questStepTypeEnum';
import ActionQuestStep from './ActionQuestStep';
import ChecklistQuestStep from './ChecklistQuestStep';

interface QuestStepProps {
  questStep: QuestStepItem;
}

const QuestStep: React.FC<QuestStepProps> = ({ questStep }: QuestStepProps) => {
  const { setQuest } = useCreateQuestContext();
  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuest((quest: Quest) => {
      return {
        ...quest,
        steps: quest.steps.map(step => {
          if (step.id !== questStep.id) {
            return step;
          }
          return {
            ...step,
            [evt.target.name]: evt.target.value,
          };
        })
      } as Quest;
    })
  }

  const onTypeChange = (evt: SelectChangeEvent<string>) => {
    const type = evt.target.value;
    let stepMixin: Partial<QuestStepItem>;
    if (type == QuestStepTypeEnum.Action) {
      stepMixin = { type };
    } else if (type == QuestStepTypeEnum.Checklist) {
      stepMixin = { type, actionItems: [''] }
    }
    setQuest((quest: Quest) => {
      return {
        ...quest,
        steps: quest.steps.map((step: QuestStepItem) => {
          if (step.id !== questStep.id) {
            return step;
          }
          return {
            ...step,
            ...stepMixin,
          };
        })
      } as Quest;
    })
  }

  return (
    <div>
      <div>
        <div
          draggable='true'
          onDragStart={(event) => {
            console.log('Drag start', event)
            // event.preventDefault();
            // event.stopPropagation();
            const el = event.target.parentElement.cloneNode(true);
            document.body.appendChild(el);
            event.dataTransfer.setData('text', questStep.id.toString())
            event.dataTransfer.setDragImage(event.target.parentElement, event.target.parentElement.clientWidth - 30, 30)
          }}
          style={{
            position: 'absolute',
            cursor: 'grab',
            right: '1rem',
            top: '1rem',
            height: '25px',
            width: '25px',
          }}>
            <div>icon</div>
        </div>
        <h2>
          Step id: { questStep.id }, Order: { questStep.order }
        </h2>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select step type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Step Type</SelectLabel>
              {
                ['action', 'checklist'].map((type, idx) => {
                  return (<SelectItem key={idx} value={type}>{type}</SelectItem>)
                })
              }
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          type="text"
          id="name"
          name="name"
          value={questStep.name}
          onChange={onChange} />

        <Input
          type="text"
          id="notes"
          name="notes"
          value={questStep.notes}
          onChange={onChange} />

        {questStep.type === 'action' && (<ActionQuestStep questStep={questStep} />)}
        {questStep.type === 'checklist' && (<ChecklistQuestStep questStep={questStep} />)}
      </div>
    </ div>
  );
}

export default QuestStep;
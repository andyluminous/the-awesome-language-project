import React, { ChangeEvent, ChangeEventHandler, DragEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import ActionQuestStep from '../ActionQuestStep';
import ChecklistQuestStep from '../ChecklistQuestStep';

import './quest-step.css';


interface QuestStepProps {
  questStep: QuestStepItem;
}

const QuestStep: React.FC<QuestStepProps> = ({ questStep }: QuestStepProps) => {
  const quest = useSelector((state: any) => state.createQuest)
  const dispatch = useDispatch()
  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

  }

  const getCardElement = useCallback((dragElement: HTMLDivElement): HTMLElement => {
    return dragElement!.parentElement!.parentElement!.parentElement!;
  }, []);

  return (

    <Card>
      <CardHeader>
        <CardTitle className='flex flex-row-reverse'>
          <div
            draggable='true'
            onDragStart={(event: DragEvent<HTMLDivElement>) => {
              console.log('Drag start', event)
              // event.preventDefault();
              // event.stopPropagation();
              const parentElement = getCardElement(event.target as HTMLDivElement)
              const el = parentElement?.cloneNode(true);
              // document.body.appendChild(el);
              event.dataTransfer.setData('text', questStep.id.toString())
              event.dataTransfer.setDragImage(
                parentElement,
                parentElement?.clientWidth - 30, 30)
            }}
            style={{
              cursor: 'grab',
              right: '1rem',
              top: '1rem',
              height: '25px',
              width: '25px',
            }}>
              <div>icon</div>
          </div>
        </CardTitle>
        <CardDescription>Step id: { questStep.id }, Order: { questStep.order }</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col'>


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
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default QuestStep;
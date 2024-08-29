'use server';

import { z } from 'Zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createQuest, updateQuest } from '@/lib/repos/quests.repository'

const FormSchema = z.object({
  id: z.string(),
  questName: z.string({
    required_error: 'Name is required',
  }).min(1),
  country: z.enum(['Portugal', 'Ukraine', 'United States'], {
    required_error: 'Country is required',
  }),
  description: z.string({
    required_error: 'Description is required'
  }).min(1),
  date: z.string(),
});

const CreateQuest = FormSchema.omit({ id: true, date: true });
const UpdateQuest = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    questName?: string[];
    country?: string[];
  };
  message?: string | null;
};

export async function createQuestAction(formData: FormData) {
  const validatedFields = CreateQuest.safeParse({
    questName: formData.get('questName'),
    country: formData.get('country'),
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Quest.',
    };
  }

  const { questName, country, description } = validatedFields.data;

  try {
    const result = createQuest(questName, country, description);
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Quest.',
    };
  }

  revalidatePath('/quests');
  redirect('/quests');
}

export async function editQuestAction(id: string, formData: FormData) {
  const validatedFields = UpdateQuest.safeParse({
    questName: formData.get('questName'),
    country: formData.get('country'),
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Quest.',
    };
  }

  const { questName, country, description } = validatedFields.data;

  try {
    const result = updateQuest(id, questName, country, description);
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Quest.',
    };
  }

  revalidatePath('/quests');
  redirect('/quests');
}

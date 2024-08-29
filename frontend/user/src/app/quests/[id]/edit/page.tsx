import { notFound } from 'next/navigation'

import EditQuestForm from "@/app/ui/quests/edit-quest-form";
import { getQuestById } from "@/lib/repos/quests.repository";

interface IQuestDetailsParams {
  id: string;
}

export default async function EditQuestPage({ params }: { params: IQuestDetailsParams }) {
  const id = params.id;
  const quest = (await getQuestById(id)).rows[0];

  if (!quest) {
    notFound();
  }

  return (<>
  <h1>Edit quest: {id}</h1>
  <EditQuestForm quest={quest}></EditQuestForm>
  </>);
}

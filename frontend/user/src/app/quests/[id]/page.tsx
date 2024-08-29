import { getQuestById } from "@/lib/repos/quests.repository";

interface IQuestDetailsParams {
  id: string;
}

export default async function QuestDetailsPage({ params }: { params: IQuestDetailsParams }) {
  const id = params.id;
  const quest = (await getQuestById(id)).rows[0];
  return (<>
  <h1>Quest details: {id}</h1>
  {JSON.stringify(quest)}
  </>);
}

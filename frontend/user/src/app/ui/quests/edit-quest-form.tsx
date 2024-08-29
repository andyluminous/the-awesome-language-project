import { State, editQuestAction } from '@/lib/actions/quests.actions'
import { IQuest } from '@/lib/models/quest.model';

interface IEditQuestFormProps {
  quest: IQuest;
}

export default function EditQuestForm(props: IEditQuestFormProps) {
  const initialState: State = { message: null, errors: {} };
  const quest = props.quest;
  const editQuestActionWithId = editQuestAction.bind(null, quest.id)

  return (
    <form action={editQuestActionWithId}>
      <div className="space-y-10">
        <div>
          <h2 className="text-lg font-semibold my-4">Create new Quest</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 border-b border-gray-900/10 pb-6">
            <div className="sm:col-span-6">
              <label
                  htmlFor="questName"
                  className="block font-medium mb-0.5">Quest name</label>
              <input
                className="w-full p-1.5 rounded-md border-0 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600"
                type="text"
                name="questName"
                id="questName"
                defaultValue={ quest.quest_name }/>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block font-medium mb-0.5">Country</label>
              <select
                className="w-full px-1.5 py-2 rounded-md border-0 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600"
                name="country"
                id="country"
                defaultValue={quest.country}>
                  <option value="Portugal">Portugal</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United States">United States</option>
                </select>
            </div>

            <div className="sm:col-span-6">
              <label
                  htmlFor="description"
                  className="block font-medium mb-0.5">Description</label>
              <textarea
                className="w-full p-1.5 rounded-md border-0 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600"
                name="description"
                id="description"
                defaultValue={quest.description}></textarea>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
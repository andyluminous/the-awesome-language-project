import Link from 'next/link';

import { IQuest } from '@/lib/models/quest.model';
import { getQuests } from '@/lib/repos/quests.repository'

const QuestsTable: React.FC = async () => {
  const quests = await getQuests();

  return (<div className='border-1'>
    <table className='table-auto w-full'>
      <thead className='bg-blue-500 p-4'>
        <tr>
          <th className='px-4 py-4'>Name</th>
          <th className='px-4 py-4'>Country</th>
          <th className='px-4 py-4'>Description</th>
          <th className='px-4 py-4'>Created At</th>
          <th className='px-4 py-4'>Updated At</th>
          <th className='px-4 py-4'></th>
          <th className='px-4 py-4'></th>
          <th className='px-4 py-4'></th>
        </tr>
      </thead>

      <tbody>
        {
          quests.rows.map((quest: IQuest) => (
          <tr
            key={quest.id}
            className='border-b'>
            <td className='px-4 py-4'>{quest.quest_name}</td>
            <td className='px-4 py-4'>{quest.country}</td>
            <td className='px-4 py-4'>{quest.description}</td>
            <td className='px-4 py-4'>{quest.created_at.toLocaleDateString('en-GB')}</td>
            <td className='px-4 py-4'>{quest.updated_at ? quest.updated_at.toLocaleDateString('en-GB') : '-'}</td>
            <td className='px-4 py-4'>
              <Link
                href={`/quests/${quest.id}`}
                className="text-sm font-semibold leading-6 text-gray-900">
                  Details
              </Link>
            </td>
            <td className='px-4 py-4'>
              <Link
                href={`/quests/${quest.id}/edit`}
                className="text-sm font-semibold leading-6 text-gray-900">
                  Edit
              </Link>
            </td>
            <td className='px-4 py-4'>
              <Link
                href={`/quests/${quest.id}`}
                className="text-sm font-semibold leading-6 text-gray-900">
                  Delete
              </Link>
            </td>
          </tr>))
        }
      </tbody>
    </table>
  </div>)
}

export default QuestsTable
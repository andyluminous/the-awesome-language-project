import { fetchUsers } from '@/lib/repos/users.repository';

interface ITableProps {
    query?: string;
    page?: string;
}

export default async function Table({ query, page }: ITableProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const users = await fetchUsers(query, page);
  
  return <>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        { users.rows.map(user => (
          <tr key={user.id}>
            <th>{user.id}</th>
            <th>{user.email}</th>
            <th>{user.name}</th>
          </tr>
        ))}
      </tbody>
    </table>
  </>
}
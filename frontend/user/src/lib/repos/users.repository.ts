import pool from '@/lib/db/postgres.pool';
import { QueryResult } from 'pg';
import { IUser } from '../models/user.model';

export async function fetchUsers(query: string = '', page: string = '1'): Promise<QueryResult<IUser>> {
  return await pool.query(
    'SELECT * FROM public.users WHERE email LIKE $1;',
    [`%${query}%`],
  )
}

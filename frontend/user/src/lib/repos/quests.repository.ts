import pool from '@/lib/db/postgres.pool';
import { IQuest } from '../models/quest.model';
import { QueryResult } from 'pg';

export async function getQuests(query: string = '', page: string = '1'): Promise<QueryResult<IQuest>> {
  return await pool.query<IQuest>(
    'SELECT * FROM public.quests WHERE quest_name LIKE $1;',
    [`%${query}%`],
  )
}

export async function getQuestById(id: string): Promise<QueryResult<IQuest>> {
  return await pool.query<IQuest>(
    'SELECT * FROM public.quests WHERE id = $1;',
    [id],
  )
}

export async function createQuest(name: string, country: string, description: string) {
  return await pool.query(`
    INSERT INTO quests (quest_name, country, description)
    VALUES ($1, $2, $3)
  `, [name, country, description]);  
}

export async function updateQuest(id: string, name: string, country: string, description: string) {
  return await pool.query(`
    UPDATE quests
    SET quest_name = $2, country = $3, description = $4, updated_at = NOW()
    WHERE id = $1
  `, [id, name, country, description]);  
}

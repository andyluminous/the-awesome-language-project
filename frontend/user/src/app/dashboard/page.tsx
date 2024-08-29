import { Suspense } from 'react';

import Table from '@/app/dashboard/table';
import { DashboardTableSkeleton } from '@/app/ui/skeletons/skeletons';
import Search from './search';

interface IDashboardPageProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function DashboardPage({
  searchParams,
}: IDashboardPageProps) {
  return (
    <div>
      <Search></Search>
      <Suspense fallback={<DashboardTableSkeleton />}>
        <Table query={searchParams?.query} page={searchParams?.page}/>
      </Suspense>
    </div>
  );
}

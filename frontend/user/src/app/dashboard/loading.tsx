import { DashboardSkeleton, DashboardTableSkeleton } from '@/app/ui/skeletons/skeletons';

export default function Loading() {
  return <>
    <DashboardSkeleton />
    <DashboardTableSkeleton />
  </>;
}

'use client'

import dynamic from 'next/dynamic'

const AdminDashboardContent = dynamic(
  () => import('./admin-dashboard-content'),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#5a2600] font-semibold">Loading dashboard...</p>
      </div>
    ),
    ssr: false,
  }
)

export default function AdminDashboardPage() {
  return <AdminDashboardContent />
}

'use client'

import { Badge } from '../ui/Badge'
import { formatDate } from '@/lib/utils'
import { Repair } from '@/types'

interface RecentServiceTableProps {
  repairs: Repair[]
}

export function RecentServiceTable({ repairs }: RecentServiceTableProps) {
  return (
    <div className="card">
      <h2 className="text-lg font-bold mb-4">Recent Service Entries</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold">Job ID</th>
              <th className="text-left py-3 px-4 font-semibold">Model</th>
              <th className="text-left py-3 px-4 font-semibold">IMEI</th>
              <th className="text-left py-3 px-4 font-semibold">Issue</th>
              <th className="text-left py-3 px-4 font-semibold">Technician</th>
              <th className="text-left py-3 px-4 font-semibold">Status</th>
              <th className="text-left py-3 px-4 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {repairs.map((repair) => (
              <tr key={repair.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{repair.jobId}</td>
                <td className="py-3 px-4">iPhone 14 Pro</td>
                <td className="py-3 px-4 text-xs text-gray-600">•••••••••••7890</td>
                <td className="py-3 px-4 text-gray-600">{repair.detailedIssue}</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">
                  <Badge status={repair.status} />
                </td>
                <td className="py-3 px-4 text-gray-600">{formatDate(repair.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

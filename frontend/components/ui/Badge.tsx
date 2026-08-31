import { statusColors, statusLabels } from '@/lib/utils'

interface BadgeProps {
  status: string
  label?: string
}

export function Badge({ status, label }: BadgeProps) {
  const colorClass = statusColors[status] || 'badge-info'
  const displayLabel = label || statusLabels[status] || status

  return <span className={`badge ${colorClass}`}>{displayLabel}</span>
}

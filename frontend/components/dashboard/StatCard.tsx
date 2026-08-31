interface StatCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  trend?: number
  bgColor?: string
}

export function StatCard({ title, value, icon, trend, bgColor = 'bg-accent' }: StatCardProps) {
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-primary mt-2">{value}</p>
          {trend !== undefined && (
            <p className={`text-sm mt-1 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from last month
            </p>
          )}
        </div>
        {icon && <div className={`${bgColor} p-3 rounded-lg text-white`}>{icon}</div>}
      </div>
    </div>
  )
}

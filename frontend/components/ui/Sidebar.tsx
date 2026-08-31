'use client'

import {
  HomeIcon,
  UsersIcon,
  WrenchIcon,
  SparklesIcon,
  IdentificationIcon,
  UserGroupIcon,
  PhoneIcon,
  ClockIcon,
  CubeIcon,
  CreditCardIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Customer Management', href: '/customers', icon: UsersIcon },
  { name: 'Service Center Entry', href: '/service-entry', icon: WrenchIcon },
  { name: 'Repair Jobs', href: '/repairs', icon: SparklesIcon },
  { name: 'IMEI Tracking', href: '/imei-tracking', icon: IdentificationIcon },
  { name: 'Technician Management', href: '/technicians', icon: UserGroupIcon },
  { name: 'Calling CRM', href: '/calling-crm', icon: PhoneIcon },
  { name: 'Follow-ups', href: '/follow-ups', icon: ClockIcon },
  { name: 'Inventory & Spare Parts', href: '/inventory', icon: CubeIcon },
  { name: 'Payments & Invoices', href: '/payments', icon: CreditCardIcon },
  { name: 'Reports', href: '/reports', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-primary text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">S</div>
          <span>StockTrack</span>
        </h1>
      </div>

      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname?.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}

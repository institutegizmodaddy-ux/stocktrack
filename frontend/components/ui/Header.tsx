'use client'

import { BellIcon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">S</div>
          <span className="font-bold text-lg hidden sm:inline">StockTrack</span>
        </Link>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers, IMEI, Job ID..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <UserCircleIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

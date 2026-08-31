'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center text-white">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">StockTrack</h1>
          <p className="text-xl text-gray-300">iPhone Service Center Management & Customer CRM</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/auth/login"
            className="card bg-white text-gray-900 hover:shadow-lg transition-shadow group"
          >
            <div className="text-2xl mb-2">🔐</div>
            <h2 className="text-lg font-semibold mb-2">Login</h2>
            <p className="text-sm text-gray-600 mb-4">Sign in to your account</p>
            <div className="flex items-center justify-center text-accent group-hover:translate-x-1 transition-transform">
              Continue <ArrowRightIcon className="w-4 h-4 ml-2" />
            </div>
          </Link>

          <Link
            href="/auth/register"
            className="card bg-accent text-white hover:bg-blue-600 transition-colors group"
          >
            <div className="text-2xl mb-2">✨</div>
            <h2 className="text-lg font-semibold mb-2">Register</h2>
            <p className="text-sm text-blue-100 mb-4">Create new account</p>
            <div className="flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
              Get Started <ArrowRightIcon className="w-4 h-4 ml-2" />
            </div>
          </Link>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 text-left">
          <h3 className="font-semibold text-lg mb-4">Features</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✓ Customer Management & CRM</li>
            <li>✓ Service Entry & Device Tracking</li>
            <li>✓ Repair Job Status Tracking</li>
            <li>✓ IMEI Search & History</li>
            <li>✓ Technician Assignment</li>
            <li>✓ Inventory Management</li>
            <li>✓ Payment & Invoice Generation</li>
            <li>✓ Follow-up Reminders & Calling CRM</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

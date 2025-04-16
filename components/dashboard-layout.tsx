import type React from "react"
import { BarChart3, Home, Settings, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { DashboardHeader } from "./dashboard-header"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">CompareWise</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md bg-gray-100 font-medium"
              >
                <Home size={18} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                <ShoppingCart size={18} />
                My Products
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                <BarChart3 size={18} />
                Analytics
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                <Settings size={18} />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

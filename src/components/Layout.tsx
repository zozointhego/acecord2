'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileNav } from './MobileNav'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex w-full min-h-screen max-h-screen bg-[#090f1e]">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col w-full min-h-full max-h-full overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}

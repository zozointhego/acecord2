"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { useState } from "react";

interface InfoLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  title: string;
}

const infoPages = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
  { id: "terms", label: "Terms of Service", href: "/terms" },
  { id: "fees", label: "Fees", href: "/fees" },
  { id: "about", label: "About", href: "/about" },
];

export function InfoLayout({ children, currentPage, title }: InfoLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex w-full min-h-screen max-h-screen bg-[#090f1e]">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col w-full min-h-full max-h-full overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 pb-20 md:pb-0">
          <div className="w-full px-8 pt-[35px] flex justify-center">
            <div className="w-full max-w-[1300px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1 mb-8 text-sm font-medium">
                <span className="text-[#6f7d9d] hover:text-white cursor-pointer transition-colors">
                  Info
                </span>
                <span className="text-[#6f7d9d]">/</span>
                <span className="text-white">{title}</span>
              </div>

              <div className="flex gap-8">
                {/* Mobile Menu Toggle */}
                <button
                  className="md:hidden mb-4 bg-[#0d1426] text-white px-4 py-2 rounded-xl"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {title} ▼
                </button>

                {/* Info Sidebar */}
                <div
                  className={`${
                    isMobileMenuOpen ? "block" : "hidden"
                  } md:block w-full md:w-64 flex-shrink-0`}
                >
                  <div className="bg-[#0d1426] rounded-3xl p-4">
                    <nav className="space-y-1">
                      {infoPages.map((page) => (
                        <a
                          key={page.id}
                          href={page.href}
                          className={`block px-3 py-2 rounded-xl font-semibold transition-all relative ${
                            currentPage === page.id
                              ? "text-white bg-[#121a30]"
                              : "text-[#6f7d9d] hover:text-white hover:bg-[#121a30]/50"
                          }`}
                        >
                          {currentPage === page.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4383ff] rounded-r-full"></div>
                          )}
                          <span className={currentPage === page.id ? "ml-2" : ""}>
                            {page.label}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                  <div className="bg-[#0d1426] rounded-3xl p-8 md:p-12">
                    <h1 className="font-extrabold text-3xl md:text-4xl text-white mb-8">
                      {title}
                    </h1>
                    <div className="text-[#c9d1d9] leading-relaxed">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
}
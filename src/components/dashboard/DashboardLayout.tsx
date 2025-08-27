"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Home,
  MessageSquare,
  Settings,
  User,
  Briefcase,
  CreditCard,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import FreelancerDashboard from "./FreelancerDashboard";
import ClientDashboard from "./ClientDashboard";

interface DashboardLayoutProps {
  userType?: "freelancer" | "client";
  children?: React.ReactNode;
}

export default function DashboardLayout({
  userType = "freelancer",
  children,
}: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState(3);

  const freelancerMenuItems = [
    { icon: <Home size={20} />, label: "Dashboard", href: "/dashboard" },
    {
      icon: <Briefcase size={20} />,
      label: "My Gigs",
      href: "/dashboard/gigs",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "Messages",
      href: "/dashboard/messages",
      badge: 2,
    },
    {
      icon: <CreditCard size={20} />,
      label: "Wallet",
      href: "/dashboard/wallet",
    },
    { icon: <User size={20} />, label: "Profile", href: "/dashboard/profile" },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      href: "/dashboard/settings",
    },
  ];

  const clientMenuItems = [
    { icon: <Home size={20} />, label: "Dashboard", href: "/dashboard" },
    {
      icon: <Briefcase size={20} />,
      label: "Post a Job",
      href: "/dashboard/post-job",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "Messages",
      href: "/dashboard/messages",
      badge: 2,
    },
    {
      icon: <CreditCard size={20} />,
      label: "Orders",
      href: "/dashboard/orders",
    },
    { icon: <User size={20} />, label: "Profile", href: "/dashboard/profile" },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      href: "/dashboard/settings",
    },
  ];

  const menuItems =
    userType === "freelancer" ? freelancerMenuItems : clientMenuItems;

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-64" : "w-20"} bg-slate-900 text-white transition-all duration-300 flex flex-col fixed h-full z-10`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          {isSidebarOpen ? (
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center mr-2">
                <span className="font-bold text-white">A</span>
              </div>
              <span className="font-bold text-xl">Acecord</span>
            </div>
          ) : (
            <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center mx-auto">
              <span className="font-bold text-white">A</span>
            </div>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="flex flex-col flex-grow overflow-y-auto py-4">
          {menuItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`flex items-center px-4 py-3 ${pathname === item.href ? "bg-slate-800" : "hover:bg-slate-800"} transition-colors`}
            >
              <div className="text-slate-400">{item.icon}</div>
              {isSidebarOpen && (
                <div className="ml-3 flex-grow flex items-center justify-between">
                  <span>{item.label}</span>
                  {item.badge && (
                    <Badge
                      variant="secondary"
                      className="bg-indigo-600 text-white"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-slate-800">
          {isSidebarOpen ? (
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user123"
                  alt="User"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium">Alex Johnson</p>
                <p className="text-xs text-slate-400">
                  {userType === "freelancer" ? "Freelancer" : "Client"}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user123"
                  alt="User"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          )}
          <Button
            variant="ghost"
            className={`w-full mt-4 text-slate-400 hover:text-white hover:bg-slate-800 justify-${isSidebarOpen ? "start" : "center"}`}
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="ml-2">Log out</span>}
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`flex-1 ${isSidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300`}
      >
        {/* Header */}
        <header className="bg-background border-b border-border h-16 flex items-center justify-between px-6 sticky top-0 z-10">
          <h1 className="text-xl font-semibold">
            {userType === "freelancer"
              ? "Freelancer Dashboard"
              : "Client Dashboard"}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <Bell size={20} />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user123"
                  alt="User"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="p-6">
          {children ||
            (userType === "freelancer" ? (
              <FreelancerDashboard />
            ) : (
              <ClientDashboard />
            ))}
        </main>
      </div>
    </div>
  );
}

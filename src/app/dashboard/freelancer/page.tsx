"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";

export default function FreelancerDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/auth/login");
      } else {
        setUser(user);
      }
      setLoading(false);
    };
    checkAuth();
  }, [router, supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#090f1e] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#4383ff] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

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
              {/* Welcome Section */}
              <div className="relative overflow-hidden w-full h-48 gradient-hero rounded-3xl p-8 mb-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer border border-white/5">
                <div className="relative z-10">
                  <div className="font-extrabold text-[22px] leading-[26px] text-white mb-4">
                    WELCOME BACK, {user?.email?.split("@")[0]?.toUpperCase()}!
                  </div>
                  <p className="text-[#6f7d9d] text-base font-bold max-w-[600px]">
                    Your freelancer dashboard is ready. Start creating gigs and
                    connecting with clients.
                  </p>
                  <button
                    onClick={handleSignOut}
                    className="mt-4 bg-transparent border border-white/10 h-10 px-5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:bg-white/5"
                  >
                    Sign Out
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <StatCard
                  title="Active Gigs"
                  value="0"
                  icon={<GigIcon />}
                  color="blue"
                />
                <StatCard
                  title="Total Earnings"
                  value="$0"
                  icon={<EarningsIcon />}
                  color="green"
                />
                <StatCard
                  title="Reviews"
                  value="0"
                  icon={<ReviewIcon />}
                  color="yellow"
                />
                <StatCard
                  title="Messages"
                  value="0"
                  icon={<MessageIcon />}
                  color="purple"
                />
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-11">
                {/* Manage Gigs */}
                <ActionCard
                  title="Manage Gigs"
                  description="Create and manage your service offerings"
                  icon={<GigIcon />}
                  action={() => alert("Create Gig feature coming soon!")}
                  buttonText="Create Gig"
                />

                {/* Portfolio */}
                <ActionCard
                  title="Portfolio"
                  description="Showcase your best work to attract clients"
                  icon={<PortfolioIcon />}
                  action={() => alert("Portfolio feature coming soon!")}
                  buttonText="Edit Portfolio"
                />

                {/* Earnings */}
                <ActionCard
                  title="View Earnings"
                  description="Track your income and payment history"
                  icon={<EarningsIcon />}
                  action={() => alert("Earnings feature coming soon!")}
                  buttonText="View Details"
                />

                {/* Messages */}
                <ActionCard
                  title="Messages"
                  description="Communicate with your clients"
                  icon={<MessageIcon />}
                  action={() => alert("Messages feature coming soon!")}
                  buttonText="View Messages"
                />
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

// Components
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "yellow" | "purple";
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  const colorClasses = {
    blue: "from-[#4e95ff] to-[#376fff]",
    green: "from-[#23b260] to-[#1a8a4a]",
    yellow: "from-[#ffc300] to-[#eb8900]",
    purple: "from-[#9b59b6] to-[#8e44ad]",
  };

  return (
    <div className="gradient-card rounded-xl p-6 transition-all duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-xl border border-[#1a2332]">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 bg-gradient-to-r ${colorClasses[color]} rounded-xl flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
      <p className="text-[#6f7d9d] text-sm font-bold mb-1">{title}</p>
      <p className="text-white text-3xl font-bold">{value}</p>
    </div>
  );
}

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  buttonText: string;
}

function ActionCard({
  title,
  description,
  icon,
  action,
  buttonText,
}: ActionCardProps) {
  return (
    <div className="gradient-card rounded-xl p-6 transition-all duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-xl border border-[#1a2332]">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-[#4e95ff] to-[#376fff] rounded-xl flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <p className="text-[#6f7d9d] font-bold">{description}</p>
        </div>
      </div>
      <button
        onClick={action}
        className="w-full bg-gradient-to-r from-[#4e95ff] to-[#376fff] h-12 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:opacity-80"
      >
        {buttonText}
      </button>
    </div>
  );
}

// Icons
function GigIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20V18H4V6Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 10H20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10V18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EarningsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter, usePathname } from "next/navigation";
import "./inject-tempo-devtools-a3j2lk.js";

export function Header() {
  const [user, setUser] = useState<any>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setShowUserMenu(false);
    router.push('/');
  };

  return (
    <div className="relative w-full h-[100px] min-h-[100px] px-8 gradient-header flex justify-center items-center">
      <div className="w-full max-w-[1300px] h-full flex justify-between items-center border-b border-white/6">
        {/* Acecord Branding */}
        <Link href="/" className="flex items-center gap-3.5 cursor-pointer">
          <div className="flex-shrink-0">
            <svg
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="50" rx="12" fill="url(#logo-gradient)" />
              <path
                d="M33.5069 21.9995L16.1673 32.4557C15.1465 33.0682 13.834 32.339 13.834 31.1432V19.4766C13.834 14.387 19.3319 11.2078 23.7507 13.7453L30.4444 17.5953L33.4923 19.3453C34.4986 19.9432 34.5132 21.4016 33.5069 21.9995Z"
                fill="white"
              />
              <path
                d="M34.3785 30.5467L28.4723 33.9592L22.5807 37.3572C20.4661 38.5676 18.0744 38.3197 16.339 37.0947C15.4932 36.5113 15.5952 35.2134 16.4848 34.6884L35.0202 23.5759C35.8952 23.0509 37.0473 23.5467 37.2077 24.553C37.5723 26.8134 36.6389 29.2488 34.3785 30.5467Z"
                fill="white"
                fillOpacity="0.6"
              />
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="0"
                  y1="25"
                  x2="50"
                  y2="25"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4E95FF" />
                  <stop offset="1" stopColor="#376FFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-black italic text-[20px] leading-[24px] text-white whitespace-nowrap">
            ACECORD
          </span>
        </Link>

        {/* Navigation Buttons */}
        <div className="flex">
          <NavButton text="Browse" isActive={pathname === '/'} href="/" />
          <NavButton text="Pricing" isActive={pathname === '/fees'} href="/fees" />
        </div>

        {/* Auth Section */}
        {user ? (
          <div className="flex justify-center items-center gap-4">
            {/* Notifications */}
            <button className="relative w-10 h-10 rounded-xl bg-[#111a33] flex items-center justify-center transition-all duration-300 hover:bg-[#1a2847] border border-[#1a2332]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19345 6.46447 3.13113C5.52678 4.06881 5 5.34058 5 6.66667C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66667Z" stroke="#6F7D9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42115 18.2537 9.16815 18.1079C8.91515 17.9622 8.70486 17.7526 8.55835 17.5" stroke="#6F7D9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#4e95ff] to-[#376fff] rounded-full text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </button>

            {/* Messages */}
            <button className="relative w-10 h-10 rounded-xl bg-[#111a33] flex items-center justify-center transition-all duration-300 hover:bg-[#1a2847] border border-[#1a2332]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 12.5C17.5 12.942 17.3244 13.3659 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z" stroke="#6F7D9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 h-12 px-4 rounded-xl bg-[#111a33] transition-all duration-300 hover:bg-[#1a2847] border border-[#1a2332]"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4e95ff] to-[#376fff] flex items-center justify-center font-bold text-sm">
                  {user.email?.[0]?.toUpperCase()}
                </div>
                <span className="font-bold text-sm text-white max-w-[120px] truncate hidden md:block">
                  {user.email?.split('@')[0]}
                </span>
                <svg 
                  className={`transition-transform duration-300 ${showUserMenu ? 'rotate-180' : ''}`}
                  width="12" 
                  height="8" 
                  viewBox="0 0 12 8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 top-[60px] w-[220px] bg-[#0d1426] rounded-xl border border-[#1a2332] shadow-xl z-50 overflow-hidden">
                  <div className="p-2">
                    <Link href="/dashboard/client" onClick={() => setShowUserMenu(false)}>
                      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#111a33] text-white">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.352877 5.80423C-1.91586e-07 6.47348 0 7.23492 0 8.7577V13.5137C0 15.6286 2.29904e-07 16.6861 0.753159 17.3431C1.43657 17.9392 2.49795 17.9944 4.5 17.9996V12.3922C4.5 11.1533 5.65127 10.149 7.07143 10.149H10.9286C12.3488 10.149 13.5 11.1533 13.5 12.3922V17.9996C15.5021 17.9944 16.5635 17.9392 17.2468 17.3431C18 16.6861 18 15.6286 18 13.5137V8.7577C18 7.23492 18 6.47348 17.6471 5.80423C17.2943 5.1349 16.6315 4.63939 15.306 3.64833L14.0203 2.68698C11.6247 0.895663 10.4269 0 9 0C7.57311 0 6.3753 0.895663 3.97961 2.68698L2.69389 3.64833C1.36848 4.63939 0.705754 5.1349 0.352877 5.80423ZM10.9286 18V12.3922H7.07143V18H10.9286Z" fill="#6F7D9D"/>
                        </svg>
                        <span className="font-bold text-sm">Dashboard</span>
                      </button>
                    </Link>
                    
                    <Link href="/profile/setup" onClick={() => setShowUserMenu(false)}>
                      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#111a33] text-white">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.41176 0C7.36581 0 5.70588 1.72768 5.70588 3.85714C5.70588 5.98661 7.36581 7.71429 9.41176 7.71429C11.4577 7.71429 13.1176 5.98661 13.1176 3.85714C13.1176 1.72768 11.4577 0 9.41176 0ZM7.55882 9C4.48024 9 2 11.5815 2 14.7857V15.4286C2 16.8549 3.10018 18 4.47059 18H14.3529C15.7233 18 16.8235 16.8549 16.8235 15.4286V14.7857C16.8235 11.5815 14.3433 9 11.2647 9H7.55882Z" fill="#6F7D9D"/>
                        </svg>
                        <span className="font-bold text-sm">Profile</span>
                      </button>
                    </Link>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#111a33] text-white">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C4.02943 0 0 4.02943 0 9C0 13.9706 4.02943 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02943 13.9706 0 9 0ZM9 3.27273C10.4492 3.27273 11.625 4.44851 11.625 5.89773C11.625 7.34694 10.4492 8.52273 9 8.52273C7.55079 8.52273 6.375 7.34694 6.375 5.89773C6.375 4.44851 7.55079 3.27273 9 3.27273ZM9 15.4091C6.91364 15.4091 5.06182 14.3842 3.92727 12.7855C3.95455 11.1436 7.35 10.2409 9 10.2409C10.6409 10.2409 14.0455 11.1436 14.0727 12.7855C12.9382 14.3842 11.0864 15.4091 9 15.4091Z" fill="#6F7D9D"/>
                      </svg>
                      <span className="font-bold text-sm">Settings</span>
                    </button>

                    <div className="w-full h-[1px] bg-[#1a2332] my-2" />

                    <button 
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-red-500/10 text-red-400"
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 12.75L15.75 9L12 5.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.75 9H6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-bold text-sm">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-3">
            {/* Log In Button */}
            <Link href="/auth/login">
              <button className="bg-transparent border border-white/10 h-12 px-6 rounded-xl flex items-center font-bold text-sm text-white transition-all duration-300 hover:bg-white/5">
                Log In
              </button>
            </Link>

            {/* Sign Up Button */}
            <Link href="/auth/signup">
              <button className="bg-gradient-to-r from-[#4e95ff] to-[#376fff] h-12 px-6 rounded-xl flex items-center font-bold text-sm text-white transition-all duration-300 hover:opacity-70">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

interface NavButtonProps {
  text: string;
  isActive?: boolean;
  hasIcon?: boolean;
  href?: string;
}

function NavButton({
  text,
  isActive = false,
  hasIcon = false,
  href = "/",
}: NavButtonProps) {
  return (
    <Link href={href}>
      <button className="h-[50px] px-2.5 bg-transparent">
        <span className="relative font-bold text-base text-white">
          {hasIcon && (
            <svg
              style={{ marginRight: "6px", marginBottom: "-2px" }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline"
            >
              <path
                d="M15.7004 5.93425C15.5829 5.5845 15.2802 5.3295 14.9157 5.27375L10.6734 4.6255L8.76794 0.56625C8.60544 0.22025 8.25819 0 7.87669 0C7.49494 0 7.14794 0.22025 6.98544 0.56625L5.07969 4.62575L0.837444 5.274C0.472944 5.32975 0.170194 5.5845 0.0529438 5.9345C-0.0643062 6.2845 0.0241938 6.67 0.281944 6.9345L3.37994 10.1112L2.64619 14.6055C2.58569 14.9775 2.74344 15.3515 3.05119 15.569C3.35869 15.7865 3.76469 15.8085 4.09544 15.626L7.87694 13.5347L11.6584 15.626C11.8077 15.7085 11.9719 15.749 12.1354 15.749C12.3344 15.749 12.5334 15.6885 12.7027 15.569C13.0104 15.3517 13.1679 14.9777 13.1074 14.6055L12.3737 10.1112L15.4719 6.9345C15.7292 6.67 15.8177 6.2845 15.7004 5.93425Z"
                fill="url(#star-gradient)"
              />
              <defs>
                <linearGradient
                  id="star-gradient"
                  x1="0.00195324"
                  y1="7.8745"
                  x2="15.7514"
                  y2="7.8745"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC628" />
                  <stop offset="1" stopColor="#EB8900" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {text}
          <div
            className={`absolute top-6 w-full h-0.5 bg-[#4383ff] shadow-[0_1px_6px_rgba(67,131,255,0.5)] rounded-[1000px] pointer-events-none transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
          />
        </span>
      </button>
    </Link>
  );
}
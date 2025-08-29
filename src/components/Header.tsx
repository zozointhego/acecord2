'use client'

import { useState } from 'react'

export function Header() {
  const [notificationOpen, setNotificationOpen] = useState(false)

  return (
    <div className="relative w-full h-[100px] min-h-[100px] px-8 gradient-header flex justify-center items-center">
      <div className="w-full max-w-[1300px] h-full flex justify-between items-center border-b border-white/6">
        {/* Gift Button */}
        <div className="relative mr-1.5 w-[170px] min-w-[170px] h-10 rounded-[40px] bg-[#121a2e] flex items-center transition-all duration-300 cursor-pointer hover:opacity-70">
          <div className="w-10 h-10 rounded-[40px] bg-gradient-to-br from-[#fefe75] to-[#fed630] flex justify-center items-center mr-2.5">
            <div className="absolute w-14 pointer-events-none">
              🎁
            </div>
          </div>
          <div className="h-full flex flex-col justify-center">
            <span className="font-bold italic text-sm text-white leading-none">Take your</span>
            <span className="font-extrabold italic text-sm gradient-text leading-none">free reward</span>
          </div>
          <svg className="absolute right-3" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989592 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75H17V5.25H1V6.75Z" fill="#404B66" />
          </svg>
        </div>

        {/* Navigation Buttons */}
        <div className="flex">
          <NavButton text="Home" isActive />
          <NavButton text="Games" />
          <NavButton text="Slots" />
          <NavButton text="Bonuses" />
          <NavButton text="VIP Club" hasIcon />
        </div>

        {/* User Section */}
        <div className="flex justify-center items-center gap-2">
          {/* User Profile */}
          <div className="flex justify-center items-center gap-2">
            <div className="relative cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-b from-[#0d1529] to-[#141c30] border-2 border-[#4383ff] rounded-full flex justify-center items-center">
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0C5.06771 0 3.5 1.6317 3.5 3.64286C3.5 5.65402 5.06771 7.28571 7 7.28571C8.93229 7.28571 10.5 5.65402 10.5 3.64286C10.5 1.6317 8.93229 0 7 0ZM5.25 8.5C2.34245 8.5 0 10.9381 0 13.9643V14.5714C0 15.9185 1.03906 17 2.33333 17H11.6667C12.9609 17 14 15.9185 14 14.5714V13.9643C14 10.9381 11.6576 8.5 8.75 8.5H5.25Z" fill="white" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-[18px] h-[18px] bg-[#4383ff] rounded-xl flex justify-center items-center transition-all duration-300 hover:bg-[#2c62c9]">
                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L3.57031 3.85714C3.706 4.00406 3.8141 4.1812 3.88797 4.37771C3.96184 4.57423 4 4.786 4 5C4 5.214 3.96184 5.42577 3.88797 5.62234C3.8141 5.81886 3.706 5.99594 3.57031 6.14286L1 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="ml-1 flex flex-col gap-1">
              <div className="whitespace-nowrap font-bold text-sm text-white/25">Your balance</div>
              <div className="whitespace-nowrap font-bold text-lg leading-5 text-white">
                $252240<span className="opacity-25">.00</span>
              </div>
            </div>

            {/* Deposit Button */}
            <button className="bg-gradient-to-r from-[#2cb966] to-[#089e4e] h-12 mx-2.5 px-4 rounded-xl flex items-center gap-3 font-bold text-sm text-white transition-all duration-300 hover:opacity-70">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="18" rx="6" fill="white" />
                <path d="M6 9H12M9 6V12" stroke="#23B260" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>DEPOSIT</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                className="gradient-header border border-white/6 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 hover:opacity-70"
                onClick={() => setNotificationOpen(!notificationOpen)}
              >
                <div className="relative">
                  <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-6 min-w-6">
                    <path d="M20.6316 16.9904L19.5915 15.2639C19.3731 14.8791 19.1755 14.1511 19.1755 13.7246V11.0933C19.1755 8.6491 17.7402 6.53777 15.6704 5.5497C15.1296 4.59284 14.1311 4 12.9871 4C11.8534 4 10.8342 4.61364 10.2933 5.5809C8.26518 6.58977 6.86109 8.68031 6.86109 11.0933V13.7246C6.86109 14.1511 6.66348 14.8791 6.44507 15.2535L5.3946 16.9904C4.97857 17.6873 4.88496 18.4569 5.14498 19.1642C5.3946 19.861 5.98744 20.4019 6.75709 20.6619C8.77482 21.3483 10.8966 21.6812 13.0183 21.6812C15.14 21.6812 17.2617 21.3483 19.2795 20.6723C20.0075 20.4331 20.5691 19.8818 20.8396 19.1642C21.11 18.4465 21.0372 17.6561 20.6316 16.9904Z" fill="#404B66" />
                    <path d="M15.9389 22.692C15.5021 23.8985 14.3476 24.7618 12.9955 24.7618C12.1738 24.7618 11.3626 24.429 10.7905 23.8361C10.4577 23.5241 10.2081 23.1081 10.0625 22.6816C10.1977 22.7024 10.3329 22.7128 10.4785 22.7336C10.7177 22.7648 10.9674 22.796 11.217 22.8168C11.8098 22.8689 12.4131 22.9001 13.0163 22.9001C13.6091 22.9001 14.202 22.8689 14.7844 22.8168C15.0028 22.796 15.2212 22.7856 15.4293 22.7544C15.5957 22.7336 15.7621 22.7128 15.9389 22.692Z" fill="#404B66" />
                    <circle cx="20.5" cy="5.5" r="4.5" fill="#23B260" stroke="#090F1E" strokeWidth="2" />
                  </svg>
                </div>
              </button>

              {/* Notification Dropdown */}
              {notificationOpen && (
                <div className="absolute top-[70px] right-0 w-[340px] bg-[#090f1e] border border-[#181d2b] rounded-xl flex flex-col p-5 z-[1000]">
                  <div className="w-full flex justify-between items-center mb-5">
                    <div className="flex justify-center items-center gap-2.5">
                      <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.6316 12.9904L14.5915 11.2639C14.3731 10.8791 14.1755 10.1511 14.1755 9.72464V7.09326C14.1755 4.6491 12.7402 2.53777 10.6704 1.5497C10.1296 0.592839 9.13113 0 7.98705 0C6.85338 0 5.83415 0.61364 5.29332 1.5809C3.26518 2.58977 1.86109 4.68031 1.86109 7.09326V9.72464C1.86109 10.1511 1.66348 10.8791 1.44507 11.2535L0.394597 12.9904C-0.0214298 13.6873 -0.115036 14.4569 0.144981 15.1642C0.394598 15.861 0.987436 16.4019 1.75709 16.6619C3.77482 17.3483 5.89656 17.6812 8.01826 17.6812C10.14 17.6812 12.2617 17.3483 14.2795 16.6723C15.0075 16.4331 15.5691 15.8818 15.8396 15.1642C16.11 14.4465 16.0372 13.6561 15.6316 12.9904Z" fill="#404B66" />
                        <path d="M10.9389 18.692C10.5021 19.8985 9.34759 20.7618 7.9955 20.7618C7.17385 20.7618 6.3626 20.429 5.79055 19.8361C5.45773 19.5241 5.20811 19.1081 5.0625 18.6816C5.19771 18.7024 5.33292 18.7128 5.47853 18.7336C5.71774 18.7648 5.96737 18.796 6.21699 18.8168C6.80982 18.8689 7.41306 18.9001 8.0163 18.9001C8.60914 18.9001 9.20198 18.8689 9.78442 18.8168C10.0028 18.796 10.2212 18.7856 10.4293 18.7544C10.5957 18.7336 10.7621 18.7128 10.9389 18.692Z" fill="#404B66" />
                      </svg>
                      <span className="font-bold text-sm leading-[17px] text-white">Notifications</span>
                    </div>
                    <div className="transition-all duration-300 cursor-pointer hover:opacity-60" onClick={() => setNotificationOpen(false)}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M1 1L13 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center mb-5">
                    <span className="font-bold text-sm leading-[17px] text-[#5f6889]">New</span>
                    <span className="font-bold text-sm leading-[17px] text-white transition-all duration-300 cursor-pointer hover:text-[#5f6889]">Mark all as read</span>
                  </div>

                  <div className="w-full max-h-[270px] overflow-y-auto pr-2.5">
                    <div className="flex justify-center items-center rounded-lg overflow-hidden mb-4">
                      <div className="relative w-full p-5 pr-[60px] bg-[#0d1529]">
                        <div className="absolute top-0 left-0 w-10 min-w-10 h-full flex justify-center items-center bg-[#0c1324]">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0469 10.7764V18.0004H15.9897C16.7621 18.0004 17.3885 17.3744 17.3885 16.6015V10.7764H10.0469Z" fill="#4384ff" />
                            <path d="M7.94847 10.7764H0.609375V16.6015C0.609375 17.3744 1.23598 18.0004 2.00829 18.0004H7.94847V10.7764ZM2.5165 16.5324C2.22648 16.5324 1.99119 16.2971 1.99119 16.0072V13.0924C1.99119 12.8025 2.22652 12.5672 2.5165 12.5672C2.80647 12.5672 3.04181 12.8026 3.04181 13.0924V16.0072C3.04181 16.2971 2.80652 16.5324 2.5165 16.5324Z" fill="#4384ff" />
                            <path d="M16.4492 5.29806H13.8218C14.1845 5.12401 14.4887 4.94419 14.6726 4.76043C15.7548 3.67839 15.7548 1.92316 14.6726 0.840944C14.1309 0.2999 13.4216 0.0294228 12.7123 0.0294228C12.0029 0.0294228 11.2935 0.2999 10.7525 0.840944C10.3031 1.29044 9.8708 2.39991 9.51785 3.54319C9.35302 3.49795 9.18335 3.46627 9.00486 3.46627C8.82699 3.46627 8.65728 3.49799 8.49319 3.54288C8.13888 2.38928 7.7025 1.26474 7.24893 0.811477C6.70784 0.270433 5.99921 0 5.28916 0C4.57982 0 3.87049 0.270477 3.3294 0.811477C2.24722 1.8941 2.24722 3.64896 3.3294 4.73096C3.52299 4.9254 3.84917 5.11554 4.24053 5.29806H1.55441C0.782061 5.29806 0.15625 5.92409 0.15625 6.69635V7.88621C0.15625 8.65856 0.782061 9.28428 1.55441 9.28428H7.95016V5.35354H10.0514V9.28428H16.4492C17.2215 9.28428 17.8474 8.65847 17.8474 7.88616V6.69631C17.8474 5.92409 17.2215 5.29806 16.4492 5.29806ZM11.7431 1.83148C12.0016 1.57279 12.3463 1.43015 12.7123 1.43015C13.0789 1.43015 13.423 1.57279 13.6823 1.83148C13.9409 2.09031 14.0831 2.43443 14.0831 2.80071C14.0831 3.16699 13.9409 3.51107 13.6836 3.76825C13.3942 4.04125 12.2609 4.4666 10.8599 4.86279C10.8203 4.72693 10.7668 4.59838 10.6992 4.47657C11.0809 3.15817 11.4817 2.10777 11.7431 1.83148ZM4.31989 1.80206C4.57849 1.54355 4.92319 1.40091 5.28921 1.40091C5.6558 1.40091 5.99992 1.54319 6.25772 1.80135C6.52116 2.08012 6.92674 3.14412 7.31114 4.47622C7.24751 4.59041 7.19699 4.71089 7.15725 4.83771C5.74956 4.44103 4.60925 4.01351 4.31985 3.74064C3.78563 3.20607 3.78563 2.33663 4.31989 1.80206Z" fill="#4384ff" />
                          </svg>
                        </div>
                        <div className="pl-[60px]">
                          <div className="font-bold text-sm text-white mb-4">Welcome bonus: free reward</div>
                          <div className="font-bold text-sm text-[#5f6889] word-break">Welcome to Lunadax.top! There is a welcome bonus available to you, pick it up in the Bonuses section</div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-3">
                      <svg width="48" height="55" viewBox="0 0 48 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.4077 37.3355L38.1527 32.9775C37.9021 32.014 37.8966 30.3166 38.1449 29.3898L39.6773 23.671C41.1006 18.359 39.2108 12.9346 35.2879 9.58186C34.6697 7.18733 32.845 5.31745 30.3585 4.6512C27.8947 3.99102 25.3222 4.73112 23.5835 6.51836C18.5882 7.52989 14.3192 11.2557 12.9141 16.4998L11.3817 22.2187C11.1334 23.1454 10.2799 24.6126 9.58719 25.2992L6.2927 28.4624C4.98273 29.7346 4.33109 31.3528 4.48433 33.0413C4.62103 34.7011 5.59451 36.2218 7.1158 37.2351C11.1013 39.9019 15.5187 41.8609 20.1298 43.0964C24.7411 44.332 29.5462 44.8442 34.325 44.55C36.0466 44.4541 37.5883 43.5831 38.5939 42.1809C39.5995 40.7787 39.9016 39.0184 39.4077 37.3355Z" fill="#5F6889" fillOpacity="0.3" />
                        <path d="M25.8864 46.9945C24.2344 49.3622 21.2227 50.566 18.2841 49.7786C16.4984 49.3002 14.9291 48.1044 14.0311 46.4828C13.4895 45.6109 13.1892 44.5614 13.1211 43.5498C13.4028 43.6738 13.6906 43.7751 13.995 43.9051C14.4967 44.1122 15.0211 44.3254 15.5514 44.516C16.8096 44.9742 18.1025 45.3933 19.4135 45.7446C20.7019 46.0899 22.0085 46.3673 23.3047 46.5934C23.7915 46.6754 24.2722 46.78 24.7425 46.8333C25.1162 46.885 25.49 46.9367 25.8864 46.9945Z" fill="#5F6889" fillOpacity="0.3" />
                      </svg>
                      <span className="font-bold text-sm leading-[17px] text-[#5f6889]/30">These are all your notifications</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface NavButtonProps {
  text: string
  isActive?: boolean
  hasIcon?: boolean
}

function NavButton({ text, isActive = false, hasIcon = false }: NavButtonProps) {
  return (
    <button className="h-[50px] px-2.5 bg-transparent">
      <span className="relative font-bold text-base text-white">
        {hasIcon && (
          <svg style={{ marginRight: '6px', marginBottom: '-2px' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
            <path d="M15.7004 5.93425C15.5829 5.5845 15.2802 5.3295 14.9157 5.27375L10.6734 4.6255L8.76794 0.56625C8.60544 0.22025 8.25819 0 7.87669 0C7.49494 0 7.14794 0.22025 6.98544 0.56625L5.07969 4.62575L0.837444 5.274C0.472944 5.32975 0.170194 5.5845 0.0529438 5.9345C-0.0643062 6.2845 0.0241938 6.67 0.281944 6.9345L3.37994 10.1112L2.64619 14.6055C2.58569 14.9775 2.74344 15.3515 3.05119 15.569C3.35869 15.7865 3.76469 15.8085 4.09544 15.626L7.87694 13.5347L11.6584 15.626C11.8077 15.7085 11.9719 15.749 12.1354 15.749C12.3344 15.749 12.5334 15.6885 12.7027 15.569C13.0104 15.3517 13.1679 14.9777 13.1074 14.6055L12.3737 10.1112L15.4719 6.9345C15.7292 6.67 15.8177 6.2845 15.7004 5.93425Z" fill="url(#star-gradient)" />
            <defs>
              <linearGradient id="star-gradient" x1="0.00195324" y1="7.8745" x2="15.7514" y2="7.8745" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC628" />
                <stop offset="1" stopColor="#EB8900" />
              </linearGradient>
            </defs>
          </svg>
        )}
        {text}
        <div className={`absolute top-6 w-full h-0.5 bg-[#4383ff] shadow-[0_1px_6px_rgba(67,131,255,0.5)] rounded-[1000px] pointer-events-none transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
      </span>
    </button>
  )
}

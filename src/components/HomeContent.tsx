"use client";
import "./inject-tempo-devtools-a3j2lk.js";
import { useState, useEffect, useRef } from "react";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { Squares } from "@/components/ui/squares-background";

export function HomeContent() {
  return (
    <div className="w-full px-8 pt-[35px] flex justify-center">
      <div className="w-full max-w-[1300px]">
        {/* Hero Section */}
        <HeroSection />

        {/* Middle Cards */}
        <MiddleCards />

        {/* Popular Categories */}
        <PopularCategories />

        {/* Featured Sellers */}
        <FeaturedSellers />

        {/* VIP Section */}
        <VIPSection />

        {/* Info Sections */}
        <InfoSections />
      </div>
    </div>
  );
}

// Custom hook for typewriter effect
function useTypewriter(
  texts: string[],
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            // Finished typing, start deleting after pause
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    currentIndex,
    isDeleting,
    texts,
    speed,
    deleteSpeed,
    pauseTime,
  ]);

  return displayText;
}

function HeroSection() {
  const avatars = [
    {
      imageUrl:
        "https://cdn.discordapp.com/avatars/730524057241649212/377e244e9deb42c5a81f24bed93e2771.png?size=2048",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl:
        "https://cdn.discordapp.com/avatars/1367957681565995138/66ab16264a88514c073a0f12441750ba.png?size=2048",
      profileUrl: "https://discord.com/invite/VsKtYeuawp",
    },
    {
      imageUrl:
        "https://cdn.discordapp.com/icons/544789192945827850/f5cc54bf6965eacada9c964596fe99fb.png?size=4096",
      profileUrl: "https://discord.com/invite/DZgBTfBxFp",
    },
    {
      imageUrl:
        "https://cdn.discordapp.com/icons/1381530952425148516/0c4058b4b13e731ea4fa0216ccac17a0.webp?size=2048",
      profileUrl: "https://discord.com/invite/rexhost",
    },
    {
      imageUrl:
        "https://images.dwncdn.net/images/t_app-icon-l/p/dcaf7ea7-3a1a-4de9-a5aa-a57a6300e6d3/446780474/2095_4-78614999-imgingest-5594967091712458767.png",
      profileUrl: "https://www.youtube.com/watch?v=xMHJGd3wwZk",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://www.youtube.com/watch?v=5YRXiFbewag",
    },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const typewriterTexts = [
    "Hire a mod...",
    "Find a bot dev...",
    "Redesign your server...",
    "Get your server noticed...",
    "Build something epic...",
    "Grow your community...",
  ];

  const typewriterText = useTypewriter(typewriterTexts, 80, 40, 1500);

  const categories = [
    "Bot Development",
    "Server Setup",
    "Moderation",
    "Graphics & Branding",
    "Community Growth",
    "Custom Integrations",
    "Event Management",
  ];

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="relative overflow-hidden w-full min-h-[650px] md:min-h-[700px] gradient-hero rounded-3xl p-8 md:p-16 mb-5">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <Squares
          direction="diagonal"
          speed={0.2}
          squareSize={60}
          borderColor="rgba(67, 131, 255, 0.12)"
          hoverFillColor="rgba(67, 131, 255, 0.08)"
          className="opacity-50"
        />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4383ff]/10 via-transparent to-[#4383ff]/5"></div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4383ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#6ba3ff]/5 rounded-full blur-3xl"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Headline with enhanced animation */}
        <div className="mb-8">
          <h1
            className="font-extrabold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 animate-fade-in"
            style={{ lineHeight: "0.85" }}
          >
            Discord Experts Who{" "}
            <span className="bg-gradient-to-r from-[#4383ff] via-[#5a94ff] to-[#6ba3ff] bg-clip-text text-transparent">
              Handle Everything
            </span>
          </h1>

          {/* Enhanced subtext */}
          <p className="font-medium text-xl md:text-2xl lg:text-3xl text-[#8a9bb8] mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
            <span className="text-[#6f7d9d]">
              One platform for all your Discord hiring needs.
            </span>
          </p>
        </div>

        {/* Improved Social proof with better alignment */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in delay-300">
          <div className="flex items-center gap-4">
            <AvatarCircles
              numPeople={99}
              avatarUrls={avatars}
              className="scale-110"
            />
            <div className="text-white text-lg md:text-xl font-medium">
              Loved by{" "}
              <span className="text-[#4383ff] font-bold bg-[#4383ff]/10 px-2 py-1 rounded-lg">
                50,000+
              </span>{" "}
              server owners
            </div>
          </div>
        </div>

        {/* Enhanced Search Bar with Typewriter Effect */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative group">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4383ff]/30 to-[#6ba3ff]/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60"></div>

            <div className="relative w-full">
              {/* Fake placeholder with typewriter */}
              {!searchValue && !isFocused && (
                <span className="absolute left-8 top-1/2 -translate-y-1/2 text-white/40 text-base font-normal pointer-events-none">
                  {typewriterText}
                </span>
              )}

              <input
                type="text"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => {
                  setShowDropdown(true);
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setTimeout(() => setShowDropdown(false), 200);
                  setIsFocused(false);
                }}
                className="w-full h-16 px-8 pr-20 bg-[#1a2332]/80 backdrop-blur-xl border-2 border-[#2a3441] rounded-full text-white placeholder-white/60 text-lg font-medium focus:outline-none focus:border-[#4383ff] focus:bg-[#1a2332]/90 focus:shadow-2xl focus:shadow-[#4383ff]/25 transition-all duration-500 hover:bg-[#1a2332]/85 hover:border-[#3a4551] hover:shadow-xl hover:shadow-[#4383ff]/15"
              />

              {/* Typewriter cursor effect */}
              {!searchValue && !isFocused && (
                <div className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="text-white/60 text-lg font-medium">
                    {typewriterText}
                    <span className="animate-pulse text-[#4383ff] ml-1 font-bold">
                      |
                    </span>
                  </span>
                </div>
              )}

              {/* Search button */}
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#4383ff] to-[#5a94ff] rounded-full flex items-center justify-center hover:from-[#5a94ff] hover:to-[#4383ff] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4383ff]/40 group/btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover/btn:scale-110 transition-transform duration-200"
                >
                  <path
                    d="M21 21L16.514 16.506M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4383ff]/5 to-[#6ba3ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>

          {/* Enhanced Category Suggestions Dropdown */}
          {showDropdown && searchValue && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-[#1a2332]/95 border border-[#2a3441] rounded-2xl shadow-2xl backdrop-blur-xl z-50 animate-fade-in overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#4383ff]/8 to-transparent"></div>
              <div className="relative">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category, index) => (
                    <div
                      key={index}
                      className="px-6 py-4 text-white hover:bg-[#4383ff]/15 cursor-pointer transition-all duration-300 first:rounded-t-2xl last:rounded-b-2xl hover:translate-x-1 flex items-center gap-3 group border-b border-[#2a3441]/50 last:border-b-0"
                      onClick={() => {
                        setSearchValue(category);
                        setShowDropdown(false);
                      }}
                    >
                      <div className="w-2 h-2 bg-[#4383ff] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-125"></div>
                      <span className="font-medium text-sm">{category}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="ml-auto opacity-0 group-hover:opacity-60 transition-all duration-200 group-hover:translate-x-1"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-4 text-white/50 text-center text-sm">
                    No categories found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced High-Converting CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500">
          {/* Browse Categories Button - Primary CTA */}
          <button className="group relative px-10 py-5 bg-gradient-to-r from-[#4383ff] to-[#376fff] text-white font-bold text-lg md:text-xl rounded-2xl shadow-2xl hover:shadow-[#4383ff]/30 transform hover:scale-110 transition-all duration-500 overflow-hidden min-w-[200px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#376fff] to-[#4383ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                className="group-hover:rotate-12 transition-transform duration-300"
              >
                <path
                  d="M2.5 5h15M2.5 10h15M2.5 15h15"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Browse Talent</span>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          {/* Post a Job Button - Secondary CTA */}
          <button className="group relative px-10 py-5 bg-transparent border-2 border-white/40 text-white font-bold text-lg md:text-xl rounded-2xl hover:border-[#4383ff] hover:bg-[#4383ff]/10 transform hover:scale-110 transition-all duration-500 overflow-hidden backdrop-blur-sm min-w-[200px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4383ff]/20 to-[#376fff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                className="group-hover:rotate-90 transition-transform duration-300"
              >
                <path
                  d="M10 4v12M4 10h12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Need Help?</span>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

function MiddleCards() {
  return (
    <div className="flex gap-3 my-6">
      {/* Browse Services */}
      <div className="relative w-full min-w-[250px] h-[75px] gradient-hero rounded-[18px] flex flex-col justify-center gap-2 pl-[140px] pr-2.5 cursor-pointer transition-all hover:scale-[1.006] hover:shadow-lg hover:opacity-90">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10">
          {/* Custom Browse Services Icon */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="12" fill="url(#browseGradient)" />
            <path
              d="M12 16h16M12 20h16M12 24h12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="28" cy="24" r="2" fill="white" />
            <defs>
              <linearGradient
                id="browseGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4383ff" />
                <stop offset="100%" stopColor="#6ba3ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="font-extrabold text-lg leading-5 text-white">
          Browse Services
        </div>
        <div className="font-bold text-xs leading-[14px] text-[#6f7d9d] truncate">
          Find Discord experts for any project
        </div>
      </div>

      {/* Post a Job */}
      <div className="relative w-full min-w-[250px] h-[75px] gradient-hero rounded-[18px] flex flex-col justify-center gap-2 pl-[140px] pr-2.5 cursor-pointer transition-all hover:scale-[1.006] hover:shadow-lg hover:opacity-90">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10">
          {/* Custom Post Job Icon */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="12" fill="url(#postGradient)" />
            <rect
              x="12"
              y="14"
              width="16"
              height="12"
              rx="2"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M16 18h8M16 22h6"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="30" cy="12" r="3" fill="#23b260" />
            <path
              d="M28.5 12l1 1 2-2"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="postGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#23b260" />
                <stop offset="100%" stopColor="#2ecc71" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="font-extrabold text-lg leading-5 text-white">
          Post a Job
        </div>
        <div className="font-bold text-xs leading-[14px] text-[#6f7d9d] truncate">
          Get custom quotes from Discord specialists
        </div>
      </div>
    </div>
  );
}

function PopularCategories() {
  const categories = [
    {
      name: "Bot Development",
      image: "/categories/botdevelopment.png",
      description:
        "Custom Discord bots with advanced features and integrations",
    },
    {
      name: "Server Setup",
      image: "/categories/serversetup.png",
      description: "Complete server configuration and channel organization",
    },
    {
      name: "Moderation",
      image: "/categories/moderation.png",
      description: "Professional moderation tools and community management",
    },
    {
      name: "Graphics & Branding",
      image: "/categories/graphics.png",
      description: "Custom logos, banners, and server visual identity",
    },
    {
      name: "Community Growth",
      image: "/categories/growth.png",
      description: "Proven strategies to grow and engage your community",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const animationRef = useRef<number>();
  const [isScrolling, setIsScrolling] = useState(false);

  // Momentum scrolling animation
  const animateScroll = () => {
    if (!scrollContainerRef.current || Math.abs(velocity) < 0.1) {
      setIsScrolling(false);
      return;
    }

    scrollContainerRef.current.scrollLeft += velocity;
    setVelocity(velocity * 0.95); // Smooth deceleration
    animationRef.current = requestAnimationFrame(animateScroll);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsScrolling(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setLastX(e.pageX);
    setLastTime(Date.now());
    setVelocity(0);
    scrollContainerRef.current.style.cursor = "grabbing";

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();

    const currentTime = Date.now();
    const currentX = e.pageX;
    const deltaTime = currentTime - lastTime;
    const deltaX = currentX - lastX;

    if (deltaTime > 0) {
      setVelocity((deltaX / deltaTime) * -8); // Slower, smoother movement
    }

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 0.8; // Reduced multiplier for slower scroll
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;

    setLastX(currentX);
    setLastTime(currentTime);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }

    // Start momentum animation
    if (Math.abs(velocity) > 0.5) {
      animationRef.current = requestAnimationFrame(animateScroll);
    } else {
      setIsScrolling(false);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsScrolling(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setLastX(e.touches[0].pageX);
    setLastTime(Date.now());
    setVelocity(0);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const currentTime = Date.now();
    const currentX = e.touches[0].pageX;
    const deltaTime = currentTime - lastTime;
    const deltaX = currentX - lastX;

    if (deltaTime > 0) {
      setVelocity((deltaX / deltaTime) * -8);
    }

    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 0.8;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;

    setLastX(currentX);
    setLastTime(currentTime);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // Start momentum animation
    if (Math.abs(velocity) > 0.5) {
      animationRef.current = requestAnimationFrame(animateScroll);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = "grab";
      }

      if (Math.abs(velocity) > 0.5) {
        animationRef.current = requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    document.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity]);

  return (
    <div className="mb-11">
      <div className="flex justify-between items-center mb-6">
        <span className="font-extrabold text-xl leading-6 text-white">
          Popular Categories
        </span>
        <div className="font-bold text-base text-[#6f7d9d] flex items-center cursor-pointer hover:text-white transition-colors">
          View all
          <svg
            style={{ marginLeft: "8px", marginBottom: "-3px" }}
            width="5"
            height="11"
            viewBox="0 0 5 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 cursor-grab select-none transition-all duration-300"
        style={{
          scrollBehavior: isDragging ? "auto" : "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          filter: isScrolling ? "blur(0.5px)" : "blur(0px)",
          transition: isScrolling ? "none" : "filter 0.3s ease-out",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative min-w-[280px] w-[280px] cursor-pointer overflow-hidden group transition-all duration-300 hover:scale-[1.002] hover:shadow-xl hover:opacity-90"
            style={{
              background: "rgba(13, 20, 38, 0.4)",
              border: "1px solid rgba(67, 131, 255, 0.1)",
              borderRadius: "20px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Image Section */}
            <div className="relative p-4 pb-0">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-auto transition-transform duration-200"
                  draggable={false}
                />
              </div>
            </div>

            {/* Simple Divider Line */}
            <div className="px-4 py-2">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Text Section */}
            <div className="px-4 pb-4 text-center">
              <h3 className="font-bold text-lg text-white mb-2 leading-tight">
                {category.name}
              </h3>
              <p className="text-sm text-[#a8b8d0] leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedSellers() {
  const featuredSellers = [
    {
      name: "Alex_Dev",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=alex&backgroundColor=4383ff",
      specialty: "Bot Development",
      rating: 4.9,
      reviews: 127,
      description: "Custom Discord bots with advanced features",
      verified: true,
      online: true,
    },
    {
      name: "ServerPro",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=serverpro&backgroundColor=23b260",
      specialty: "Server Setup",
      rating: 4.8,
      reviews: 89,
      description: "Complete server configuration & optimization",
      verified: true,
      online: false,
    },
    {
      name: "ModMaster",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=modmaster&backgroundColor=ff6b35",
      specialty: "Moderation",
      rating: 5.0,
      reviews: 203,
      description: "Professional moderation & community management",
      verified: true,
      online: true,
    },
    {
      name: "DesignWiz",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=designwiz&backgroundColor=9b59b6",
      specialty: "Graphics & Branding",
      rating: 4.7,
      reviews: 156,
      description: "Custom logos, banners & server branding",
      verified: true,
      online: true,
    },
    {
      name: "GrowthGuru",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=growthguru&backgroundColor=f39c12",
      specialty: "Community Growth",
      rating: 4.9,
      reviews: 94,
      description: "Proven strategies for server growth",
      verified: true,
      online: false,
    },
  ];

  return (
    <div className="mb-11">
      <div className="flex justify-between items-center mb-6">
        <span className="font-extrabold text-xl leading-6 text-white">
          Featured Sellers
        </span>
        <div className="font-bold text-base text-[#6f7d9d] flex items-center cursor-pointer hover:text-white transition-colors">
          View all sellers
          <svg
            style={{ marginLeft: "8px", marginBottom: "-3px" }}
            width="5"
            height="11"
            viewBox="0 0 5 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {featuredSellers.map((seller, index) => (
          <div
            key={index}
            className="relative min-w-[280px] w-[280px] bg-[#0d1426] rounded-2xl p-5 cursor-pointer group transition-all duration-300 hover:scale-[1.002] hover:shadow-xl border border-[#1a2332]"
          >
            {/* Header with avatar and online status */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <img
                  src={seller.avatar}
                  alt={seller.name}
                  className="w-12 h-12 rounded-full border-2 border-[#4383ff]"
                />
                {seller.online && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#23b260] rounded-full border-2 border-[#0d1426]" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white text-sm">
                    {seller.name}
                  </h3>
                  {seller.verified && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 0L9.798 2.202L12.944 1.056L13.056 4.202L16.202 4.314L15.056 7.46L17.258 9.258L15.056 11.056L16.202 14.202L13.056 14.314L12.944 17.46L9.798 16.314L8 18.516L6.202 16.314L3.056 17.46L2.944 14.314L-0.202 14.202L0.944 11.056L-1.258 9.258L0.944 7.46L-0.202 4.314L2.944 4.202L3.056 1.056L6.202 2.202L8 0Z"
                        fill="#4383ff"
                      />
                      <path
                        d="M5.5 8L7.5 10L10.5 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="text-xs text-[#6f7d9d]">{seller.specialty}</div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill={i < Math.floor(seller.rating) ? "#ffc300" : "#404b66"}
                  >
                    <path d="M6 0L7.35 4.65H12L8.18 7.5L9.53 12L6 9.15L2.47 12L3.82 7.5L0 4.65H4.65L6 0Z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-bold text-white">
                {seller.rating}
              </span>
              <span className="text-xs text-[#6f7d9d]">
                ({seller.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#6f7d9d] mb-4 leading-relaxed">
              {seller.description}
            </p>

            {/* CTA Button */}
            <button className="w-full bg-[#121a30] hover:bg-[#4383ff] text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 text-sm">
              View Profile
            </button>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#4383ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

function VIPSection() {
  return (
    <div className="relative overflow-hidden w-full h-[261px] p-12 bg-gradient-to-r from-[#18223c] to-[#0d1426] rounded-3xl my-11">
      <div className="relative z-10">
        <div className="font-extrabold text-[28px] leading-[33px] text-white max-w-[515px] mb-5">
          UNLOCK EXCLUSIVE <span className="text-[#4383ff]">VIP REWARDS</span>{" "}
          AT ACECORD!
        </div>
        <div className="font-bold text-base leading-[19px] text-[#6f7d9d] max-w-[490px] mb-5">
          Join the VIP Club, receive increased rewards, as well as the
          opportunity to participate in exclusive contests every month
        </div>
        <div className="w-max flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition-opacity">
          <span className="font-bold text-base leading-[19px] text-white">
            VIP Club
          </span>
          <svg
            width="5"
            height="11"
            viewBox="0 0 5 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* VIP Image - covers entire right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        <img
          src="/vip.webp"
          alt="VIP Rewards"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}

function InfoSections() {
  return (
    <div className="flex gap-5 mt-11">
      <div className="relative overflow-hidden w-full h-[300px] bg-[#0d1426] rounded-3xl p-[35px]">
        <div className="font-extrabold text-xl leading-6 text-white mb-4">
          Acecord - Discord Freelance Marketplace
        </div>
        <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] mb-4">
          <p className="mb-6">
            Acecord is built for one purpose: helping Discord server owners turn
            their ideas into thriving communities. We connect you directly with
            verified experts who specialize in everything from moderation to bot
            development, server setup, graphics & branding, and long-term
            community growth. Instead of hunting around random servers or
            relying on unproven freelancers, you can find trusted talent in one
            place. <br />
          </p>

          <p className="mb-6">
            Every seller on Acecord is carefully vetted. That means you're not
            just hiring anyone—you're working with people who actually know what
            they're doing and have a track record of delivering. Whether you're
            a small server just starting out or a large community needing more
            structure, you'll find experts tailored to your needs.
          </p>

          <p className="mb-6">
            Payments are always safe and simple thanks to our built-in escrow
            system. You fund the project, the expert does the work, and once
            you're satisfied, the payment is released. No scams, no shady
            deals—just straightforward, secure transactions that let you focus
            on the project itself instead of stressing over trust.
          </p>

          <p className="mb-6">
            The range of services is wide. You might need a custom bot coded
            from scratch, a fully structured server with all the roles and
            permissions ready to go, eye-catching graphics that make your
            community stand out, or a dedicated moderation team to keep things
            smooth. Whatever the case, Acecord makes it simple to match with the
            right person for the job.
          </p>

          <p className="mb-6">
            Our platform is designed to keep communication clear from start to
            finish. Once you post or purchase a service, you'll have a direct
            line with your seller to share ideas, get updates, and make
            adjustments along the way. No confusion, no ghosting—just
            transparent conversations that keep both sides aligned.
          </p>

          <p className="mb-6">
            At the end of the day, Acecord is more than just a marketplace. It's
            a reliable hub where Discord owners can invest in real growth
            without the usual headaches. Safe payments, verified talent, and
            projects delivered fast—it's everything you need to scale your
            community, all in one place.
          </p>
        </div>

        <div className="absolute w-full h-[130px] left-0 bottom-0 bg-gradient-to-t from-[#0d1426] via-[#0d1426]/90 to-transparent flex justify-center items-end pb-4">
          <button className="w-[135px] h-[50px] bg-[#182239] rounded-xl shadow-md font-bold text-base text-white hover:bg-[#4383ff] transition-colors">
            See more
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden w-full h-[300px] bg-[#0d1426] rounded-3xl p-[35px]">
        <div className="font-extrabold text-xl leading-6 text-white mb-4">
          Share Your Experience
        </div>
        <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] mb-4">
          Help other Discord server owners by sharing your experience with
          sellers on Acecord.
        </div>

        <textarea
          className="w-full h-[95px] border-2 border-transparent bg-[#090f1e] rounded-xl outline-none font-bold text-sm text-white p-4 resize-none mb-2 focus:border-[#4383ff] transition-colors"
          placeholder="Tell us about your experience with a seller..."
        />

        <div className="flex justify-between items-center ">
          <button
            className="btn-primary h-[50px] opacity-70 cursor-not-allowed"
            disabled
          >
            Post Review
          </button>
          <div className="font-bold text-base text-[#6f7d9d] flex items-center cursor-pointer hover:text-white transition-colors">
            View All Reviews
            <svg
              style={{ marginLeft: "8px", marginBottom: "-3px" }}
              width="5"
              height="11"
              viewBox="0 0 5 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
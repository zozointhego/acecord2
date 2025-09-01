"use client";
import "./inject-tempo-devtools-a3j2lk.js";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

export function HomeContent() {
  return (
    <div className="w-full px-8 pt-[35px] flex justify-center">
      <div className="w-full max-w-[1300px]">
        {/* Hero Section */}
        <HeroSection />

        {/* Middle Cards */}
        <MiddleCards />

        {/* Top Rated Games */}
        <TopRatedGames />

        {/* Recent Big Wins */}
        <RecentBigWins />

        {/* Live Games */}
        <LiveGames />

        {/* VIP Section */}
        <VIPSection />

        {/* Info Sections */}
        <InfoSections />
      </div>
    </div>
  );
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

  return (
    <div className="relative overflow-hidden w-full min-h-[400px] md:min-h-[500px] gradient-hero rounded-3xl p-6 md:p-12 mb-5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4383ff]/10 via-transparent to-[#4383ff]/5"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left side: text + CTAs */}
        <div className="flex-1">
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight text-white mb-6 animate-fade-in">
            Discord Server Management
            <br />
            <span className="bg-gradient-to-r from-[#4383ff] to-[#6ba3ff] bg-clip-text text-transparent">
              That Actually Works
            </span>
          </h1>
          <p className="font-medium text-lg md:text-xl text-[#6f7d9d] mb-8 max-w-2xl leading-relaxed animate-fade-in delay-100">
            Stop wrestling with clunky bots and confusing dashboards. Get the
            tools that make running your Discord server feel effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in delay-200">
            <button className="btn-primary px-8 py-4 rounded-xl font-bold text-base hover:scale-105 transition-transform shadow-lg">
              Get Started Free
            </button>
            <button className="btn-secondary px-8 py-4 rounded-xl font-bold text-base hover:scale-105 transition-transform">
              Explore Tools
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 animate-fade-in delay-300">
            <AvatarCircles numPeople={99} avatarUrls={avatars} />
            <div className="text-white text-lg">
              Loved by <span className="text-[#4383ff] font-bold">50,000+</span>{" "}
              server owners
            </div>
          </div>
        </div>

        {/* Right side: video demo */}
        <div className="flex-1 w-full lg:w-auto animate-fade-in delay-400">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-xl shadow-2xl border border-white/10"
            style={{
              filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
            }}
          >
            <source src="/acetest.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 text-2xl">
          🎁
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
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 text-2xl">
          💳
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

function TopRatedGames() {
  const categories = [
    { name: "Bot Development", color: "from-red-500 to-orange-500" },
    { name: "Server Setup", color: "from-blue-500 to-purple-500" },
    { name: "Moderation", color: "from-pink-500 to-purple-500" },
    { name: "Graphics & Branding", color: "from-orange-500 to-yellow-500" },
    { name: "Automation", color: "from-green-500 to-blue-500" },
    { name: "Community Growth", color: "from-purple-500 to-pink-500" },
  ];

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

      <div className="relative -mx-8">
        <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-[#090f1e] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-[#090f1e] to-transparent z-10" />

        <div className="flex gap-5 px-8 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`w-[200px] min-w-[200px] h-[250px] bg-gradient-to-br ${category.color} rounded-2xl hover-lift cursor-pointer`}
            >
              <div className="w-full h-full rounded-2xl bg-black/20 flex items-center justify-center">
                <div className="text-center text-white font-bold">
                  {category.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecentBigWins() {
  const recentOrders = Array(20)
    .fill(null)
    .map((_, i) => ({
      service: [
        "Custom Bot",
        "Server Setup",
        "Moderation",
        "Graphics Pack",
        "Automation",
      ][i % 5],
      seller: `@seller${i + 1}`,
      amount: `${(Math.random() * 500 + 50).toFixed(0)}`,
      color: [
        "from-green-500 to-blue-500",
        "from-pink-500 to-purple-500",
        "from-blue-500 to-purple-500",
        "from-orange-500 to-red-500",
        "from-green-500 to-emerald-500",
      ][i % 5],
    }));

  return (
    <div className="mb-11">
      <div className="flex justify-between items-center mb-6">
        <span className="font-extrabold text-xl leading-6 text-white">
          Recent Orders
        </span>
      </div>

      <div className="w-full bg-[#0d1426] rounded-[18px] p-5 overflow-hidden">
        <div className="flex gap-3 animate-scroll">
          {[...recentOrders, ...recentOrders].map((order, index) => (
            <div
              key={index}
              className="flex flex-col cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div
                className={`w-20 h-25 bg-gradient-to-br ${order.color} rounded-lg mb-2`}
              >
                <div className="w-full h-full rounded-lg bg-black/20 flex items-center justify-center text-white text-xs font-bold">
                  {order.service}
                </div>
              </div>
              <div className="font-bold text-xs leading-[14px] text-white mt-2 flex items-center">
                <div className="w-3.5 h-3.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded mr-1" />
                {order.seller}
              </div>
              <div className="font-bold text-xs leading-[14px] text-[#23b260] mt-1">
                {order.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LiveGames() {
  return (
    <div className="mb-11">
      <div className="flex justify-between items-center mb-6">
        <span className="font-extrabold text-xl leading-6 text-white">
          Live Activity
        </span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-1.5 h-14 px-2 bg-[#0d1529]/60 rounded-[100px]">
          <div className="h-10 px-4 flex items-center justify-center font-bold text-base leading-[19px] text-white whitespace-nowrap rounded-[100px] bg-[#121a30] cursor-pointer">
            All Orders
          </div>
          <div className="h-10 px-4 flex items-center justify-center font-bold text-base leading-[19px] text-white whitespace-nowrap rounded-[100px] cursor-pointer hover:bg-[#121a30] transition-colors">
            My Orders
          </div>
        </div>

        <div className="font-bold text-base text-white flex items-center">
          <svg
            className="w-4 h-auto mr-2 filter drop-shadow-[0_2px_10px_rgba(39,255,131,0.5)]"
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.375 7.5C4.375 7.5 3.75 7.5 3.75 6.875C3.75 6.25 4.375 4.375 6.875 4.375C9.375 4.375 10 6.25 10 6.875C10 7.5 9.375 7.5 9.375 7.5H4.375ZM6.875 3.75C7.37228 3.75 7.84919 3.55246 8.20083 3.20083C8.55246 2.84919 8.75 2.37228 8.75 1.875C8.75 1.37772 8.55246 0.900806 8.20083 0.549175C7.84919 0.197544 7.37228 0 6.875 0C6.37772 0 5.90081 0.197544 5.54917 0.549175C5.19754 0.900806 5 1.37772 5 1.875C5 2.37228 5.19754 2.84919 5.54917 3.20083C5.90081 3.55246 6.37772 3.75 6.875 3.75Z"
              fill="#27FF83"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.26 7.50027C3.16735 7.30515 3.12114 7.09123 3.125 6.87527C3.125 6.02839 3.55 5.15652 4.335 4.55027C3.94318 4.42954 3.53497 4.3705 3.125 4.37527C0.625 4.37527 0 6.25027 0 6.87527C0 7.50027 0.625 7.50027 0.625 7.50027H3.26Z"
              fill="#27FF83"
            />
            <path
              d="M2.8125 3.75C3.2269 3.75 3.62433 3.58538 3.91735 3.29235C4.21038 2.99933 4.375 2.6019 4.375 2.1875C4.375 1.7731 4.21038 1.37567 3.91735 1.08265C3.62433 0.78962 3.2269 0.625 2.8125 0.625C2.3981 0.625 2.00067 0.78962 1.70765 1.08265C1.41462 1.37567 1.25 1.7731 1.25 2.1875C1.25 2.6019 1.41462 2.99933 1.70765 3.29235C2.00067 3.58538 2.3981 3.75 2.8125 3.75Z"
              fill="#27FF83"
            />
          </svg>
          <span>
            <span className="text-[#27ff83]">2,847</span> sellers online
          </span>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full flex items-center px-6 gap-5 mb-6">
          <div className="w-[24%] font-medium text-sm text-[#5f6889]">
            SELLER
          </div>
          <div className="w-[24%] font-medium text-sm text-[#5f6889]">
            SERVICE
          </div>
          <div className="w-[23%] font-medium text-sm text-[#5f6889]">
            PRICE
          </div>
          <div className="w-[20%] font-medium text-sm text-[#5f6889]">
            DELIVERY
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Live games would be populated here */}
          <div className="text-center text-[#5f6889] py-8">
            Loading recent orders...
          </div>
        </div>
      </div>
    </div>
  );
}

function VIPSection() {
  return (
    <div className="relative overflow-hidden w-full h-[261px] p-12 bg-gradient-to-r from-[#18223c] to-[#0d1426] rounded-3xl my-11">
      <div className="relative z-10">
        <div className="font-extrabold text-[28px] leading-[33px] text-white max-w-[515px] mb-5">
          BECOME A <span className="text-[#4383ff]">VERIFIED SELLER</span> ON
          ACECORD
        </div>
        <div className="font-bold text-base leading-[19px] text-[#6f7d9d] max-w-[490px] mb-5">
          Start earning by offering your Discord expertise. Get verified status,
          priority support, and access to premium buyers.
        </div>
        <div className="w-max flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition-opacity">
          <span className="font-bold text-base leading-[19px] text-white">
            Start Selling
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

      {/* Mobile image placeholder */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-6xl">
        📱💎
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
          Acecord connects Discord server owners with verified experts who
          specialize in moderation, bot development, server setup, and community
          growth. Every seller is vetted, payments are secured through escrow,
          and projects are delivered fast.
        </div>

        <div className="absolute w-full h-[130px] left-0 bottom-0 bg-gradient-to-t from-[#0d1426] via-[#0d1426]/90 to-transparent flex justify-center pt-15">
          <button className="w-[135px] h-[50px] bg-[#182239] rounded-lg font-bold text-base text-white hover:bg-[#4383ff] transition-colors">
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
          className="w-full h-[95px] border-2 border-transparent bg-[#090f1e] rounded-xl outline-none font-bold text-sm text-white p-4 resize-none mb-4 focus:border-[#4383ff] transition-colors"
          placeholder="Tell us about your experience with a seller..."
        />

        <div className="flex justify-between items-center">
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

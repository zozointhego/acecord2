'use client'

export function HomeContent() {
  return (
    <div className="w-full px-8 pt-[35px] flex justify-center">
      <div className="w-full max-w-[1300px]">
        {/* Hero Section */}
        <HeroSection />

        {/* Middle Cards */}
        <MiddleCards />

        {/* Game Sections */}
        <GameSections />

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
  )
}

function HeroSection() {
  return (
    <div className="relative overflow-hidden w-full h-60 gradient-hero rounded-3xl p-12 mb-6">
      {/* Background Images */}
      <div className="absolute top-0 right-0 h-full">
        {/* Placeholder for Argentina soccer players image */}
        <div className="w-[520px] h-full bg-gradient-to-l from-blue-500/20 to-transparent flex items-center justify-end pr-8">
          <div className="text-6xl">⚽🏆</div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="font-extrabold text-[22px] leading-[26px] text-white mb-8">
          HELLO, GREAT TO SEE YOU BACK!
        </div>

        {/* VIP Progress */}
        <div className="w-[440px]">
          <div className="gradient-card rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-amber-600 to-amber-800 rounded flex items-center justify-center">
                  <span className="text-xs">🥉</span>
                </div>
                <span className="font-bold text-white">Bronze</span>
              </div>
              <div className="text-sm font-bold text-[#6f7d9d] flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                VIP Club
                <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="relative mb-4">
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div className="w-0 h-2 bg-[#4383ff] rounded-full"></div>
              </div>
              <div className="absolute -top-8 left-0 transform -translate-x-1/2">
                <div className="bg-[#26324f] px-2 py-1 rounded text-xs text-white">0%</div>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.70192 6.94293C6.10202 7.47287 6.89798 7.47287 7.29808 6.94293L12.6513 -0.147451C13.1487 -0.806281 12.6787 -1.75 11.8532 -1.75H1.14678C0.321267 -1.75 -0.148711 -0.80628 0.348703 -0.147451L5.70192 6.94293Z" fill="#26324F" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-[#6f7d9d]">
                <span className="text-white">600 XP</span> to next level
              </span>
              <span className="text-[#6f7d9d]">
                Next level bonus <span className="text-white">$50</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MiddleCards() {
  return (
    <div className="flex gap-5 my-6">
      <div className="relative w-full h-[75px] gradient-hero rounded-[18px] flex flex-col justify-center gap-2 pl-[140px] pr-2.5 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="absolute bottom-0 left-0 h-[87px] w-20">
          🎁
        </div>
        <div className="font-extrabold text-lg leading-5 text-white">
          Free reward is available to you!
        </div>
        <div className="font-bold text-xs leading-[14px] text-[#6f7d9d]">
          Lunadax and our partners have prepared a welcome bonus for you
        </div>
      </div>

      <div className="relative w-full h-[75px] gradient-hero rounded-[18px] flex flex-col justify-center gap-2 pl-[140px] pr-2.5 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="absolute left-6 h-10 w-15 flex items-center">
          💳
        </div>
        <div className="font-extrabold text-lg leading-5 text-white">
          Make a deposit with a bank card
        </div>
        <div className="font-bold text-xs leading-[14px] text-[#6f7d9d]">
          Top up your balance quickly, conveniently with your bank card
        </div>
      </div>
    </div>
  )
}

function GameSections() {
  return (
    <div className="flex gap-5 mb-11">
      <div className="w-full">
        <div className="w-full aspect-[1280/440] bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-3 hover-lift cursor-pointer">
          <div className="w-full h-full rounded-2xl bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl mb-2">🎮</div>
              <div className="font-bold">Original Games Preview</div>
            </div>
          </div>
        </div>
        <div className="font-extrabold text-lg leading-5 text-white mt-3 mb-2">Original Games</div>
        <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] mb-4">
          Explore our unique gaming experiences and enjoy thrilling online entertainment right in your browser. Dive into top-quality games and endless excitement!
        </div>
        <button className="btn-primary w-full h-[50px]">
          Go to Games
        </button>
      </div>

      <div className="w-full">
        <div className="w-full aspect-[1280/440] bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-3 hover-lift cursor-pointer">
          <div className="w-full h-full rounded-2xl bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl mb-2">🎰</div>
              <div className="font-bold">Licensed Slots Preview</div>
            </div>
          </div>
        </div>
        <div className="font-extrabold text-lg leading-5 text-white mt-3 mb-2">Licensed Slots</div>
        <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] mb-4">
          Enjoy original, licensed games for an exciting experience and a chance to win amazing jackpots! Dive into stunning graphics, thrilling bonuses, and fun today!
        </div>
        <button className="btn-primary w-full h-[50px]">
          Go to Slots
        </button>
      </div>
    </div>
  )
}

function TopRatedGames() {
  const games = [
    { name: 'Crash', color: 'from-red-500 to-orange-500' },
    { name: 'Dice', color: 'from-blue-500 to-purple-500' },
    { name: 'Sweet Bonanza', color: 'from-pink-500 to-purple-500' },
    { name: 'Aviamasters', color: 'from-orange-500 to-yellow-500' },
    { name: 'Mines', color: 'from-green-500 to-blue-500' },
    { name: 'Gates of Olympus', color: 'from-purple-500 to-pink-500' },
  ]

  return (
    <div className="mb-11">
      <div className="flex justify-between items-center mb-6">
        <span className="font-extrabold text-xl leading-6 text-white">Top Rated Games</span>
        <div className="font-bold text-base text-[#6f7d9d] flex items-center cursor-pointer hover:text-white transition-colors">
          View all
          <svg style={{ marginLeft: '8px', marginBottom: '-3px' }} width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="relative -mx-8">
        <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-[#090f1e] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-[#090f1e] to-transparent z-10" />

        <div className="flex gap-5 px-8 overflow-x-auto scrollbar-hide">
          {games.map((game, index) => (
            <div key={index} className={`w-[200px] min-w-[200px] h-[250px] bg-gradient-to-br ${game.color} rounded-2xl hover-lift cursor-pointer`}>
              <div className="w-full h-full rounded-2xl bg-black/20 flex items-center justify-center">
                <div className="text-center text-white font-bold">
                  {game.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RecentBigWins() {
  const wins = Array(20).fill(null).map((_, i) => ({
    game: ['Coinflip', 'Sugar Rush', 'Dice', 'Gates of Olympus', 'Mines'][i % 5],
    player: `User${i + 1}***`,
    amount: `$${(Math.random() * 10 + 1).toFixed(1)}K`,
    color: ['from-green-500 to-blue-500', 'from-pink-500 to-purple-500', 'from-blue-500 to-purple-500', 'from-orange-500 to-red-500', 'from-green-500 to-emerald-500'][i % 5]
  }))

  return (
    <div className="mb-11">
      <div className="flex justify-between items-center mb-6">
        <span className="font-extrabold text-xl leading-6 text-white">Recent Big Wins</span>
      </div>

      <div className="w-full bg-[#0d1426] rounded-[18px] p-5 overflow-hidden">
        <div className="flex gap-3 animate-scroll">
          {[...wins, ...wins].map((win, index) => (
            <div key={index} className="flex flex-col cursor-pointer hover:opacity-80 transition-opacity">
              <div className={`w-20 h-25 bg-gradient-to-br ${win.color} rounded-lg mb-2`}>
                <div className="w-full h-full rounded-lg bg-black/20 flex items-center justify-center text-white text-xs font-bold">
                  {win.game}
                </div>
              </div>
              <div className="font-bold text-xs leading-[14px] text-white mt-2 flex items-center">
                <div className="w-3.5 h-3.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded mr-1" />
                {win.player}
              </div>
              <div className="font-bold text-xs leading-[14px] text-[#23b260] mt-1">
                {win.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LiveGames() {
  return (
    <div className="mb-11">
      <div className="flex justify-between items-center mb-6">
        <span className="font-extrabold text-xl leading-6 text-white">Last Games</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-1.5 h-14 px-2 bg-[#0d1529]/60 rounded-[100px]">
          <div className="h-10 px-4 flex items-center justify-center font-bold text-base leading-[19px] text-white whitespace-nowrap rounded-[100px] bg-[#121a30] cursor-pointer">
            Last games
          </div>
          <div className="h-10 px-4 flex items-center justify-center font-bold text-base leading-[19px] text-white whitespace-nowrap rounded-[100px] cursor-pointer hover:bg-[#121a30] transition-colors">
            My games
          </div>
        </div>

        <div className="font-bold text-base text-white flex items-center">
          <svg className="w-4 h-auto mr-2 filter drop-shadow-[0_2px_10px_rgba(39,255,131,0.5)]" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.375 7.5C4.375 7.5 3.75 7.5 3.75 6.875C3.75 6.25 4.375 4.375 6.875 4.375C9.375 4.375 10 6.25 10 6.875C10 7.5 9.375 7.5 9.375 7.5H4.375ZM6.875 3.75C7.37228 3.75 7.84919 3.55246 8.20083 3.20083C8.55246 2.84919 8.75 2.37228 8.75 1.875C8.75 1.37772 8.55246 0.900806 8.20083 0.549175C7.84919 0.197544 7.37228 0 6.875 0C6.37772 0 5.90081 0.197544 5.54917 0.549175C5.19754 0.900806 5 1.37772 5 1.875C5 2.37228 5.19754 2.84919 5.54917 3.20083C5.90081 3.55246 6.37772 3.75 6.875 3.75Z" fill="#27FF83" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.26 7.50027C3.16735 7.30515 3.12114 7.09123 3.125 6.87527C3.125 6.02839 3.55 5.15652 4.335 4.55027C3.94318 4.42954 3.53497 4.3705 3.125 4.37527C0.625 4.37527 0 6.25027 0 6.87527C0 7.50027 0.625 7.50027 0.625 7.50027H3.26Z" fill="#27FF83" />
            <path d="M2.8125 3.75C3.2269 3.75 3.62433 3.58538 3.91735 3.29235C4.21038 2.99933 4.375 2.6019 4.375 2.1875C4.375 1.7731 4.21038 1.37567 3.91735 1.08265C3.62433 0.78962 3.2269 0.625 2.8125 0.625C2.3981 0.625 2.00067 0.78962 1.70765 1.08265C1.41462 1.37567 1.25 1.7731 1.25 2.1875C1.25 2.6019 1.41462 2.99933 1.70765 3.29235C2.00067 3.58538 2.3981 3.75 2.8125 3.75Z" fill="#27FF83" />
          </svg>
          <span><span className="text-[#27ff83]">54269</span> players online</span>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full flex items-center px-6 gap-5 mb-6">
          <div className="w-[24%] font-medium text-sm text-[#5f6889]">PLAYER</div>
          <div className="w-[24%] font-medium text-sm text-[#5f6889]">BET</div>
          <div className="w-[23%] font-medium text-sm text-[#5f6889]">GAME</div>
          <div className="w-[20%] font-medium text-sm text-[#5f6889]">WINNING</div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Live games would be populated here */}
          <div className="text-center text-[#5f6889] py-8">
            Live games loading...
          </div>
        </div>
      </div>
    </div>
  )
}

function VIPSection() {
  return (
    <div className="relative overflow-hidden w-full h-[261px] p-12 bg-gradient-to-r from-[#18223c] to-[#0d1426] rounded-3xl my-11">
      <div className="relative z-10">
        <div className="font-extrabold text-[28px] leading-[33px] text-white max-w-[515px] mb-5">
          UNLOCK EXCLUSIVE <span className="text-[#4383ff]">VIP REWARDS</span> AT LUNADAX.TOP!
        </div>
        <div className="font-bold text-base leading-[19px] text-[#6f7d9d] max-w-[490px] mb-5">
          Join the VIP Club, receive increased rewards, as well as the opportunity to participate in exclusive contests every month
        </div>
        <div className="w-max flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition-opacity">
          <span className="font-bold text-base leading-[19px] text-white">VIP Club</span>
          <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Mobile image placeholder */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-6xl">
        📱💎
      </div>
    </div>
  )
}

function InfoSections() {
  return (
    <div className="flex gap-5 mt-11">
      <div className="relative overflow-hidden w-full h-[300px] bg-[#0d1426] rounded-3xl p-[35px]">
        <div className="font-extrabold text-xl leading-6 text-white mb-4">
          Lunadax - Best Online Crypto Casino
        </div>
        <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] mb-4">
          Lunadax.top has been a leader in the online casino blockchain industry since its foundation in 2017. Our platform consistently stands out for offering a huge number of original games and licensed slots, and is also built on algorithms created on the blockchain, which provides a diverse, exciting, and most importantly, safe and completely transparent gaming experience for players around the world.
        </div>

        <div className="absolute w-full h-[130px] left-0 bottom-0 bg-gradient-to-t from-[#0d1426] via-[#0d1426]/90 to-transparent flex justify-center pt-15">
          <button className="w-[135px] h-[50px] bg-[#182239] rounded-lg font-bold text-base text-white hover:bg-[#4383ff] transition-colors">
            See more
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden w-full h-[300px] bg-[#0d1426] rounded-3xl p-[35px]">
        <div className="font-extrabold text-xl leading-6 text-white mb-4">
          Help Us improve your experience
        </div>
        <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] mb-4">
          Leave your impression of Lunadax and get rewarded for your valuable feedback
        </div>

        <textarea
          className="w-full h-[95px] border-2 border-transparent bg-[#090f1e] rounded-xl outline-none font-bold text-sm text-white p-4 resize-none mb-4 focus:border-[#4383ff] transition-colors"
          placeholder="Share your experience of using Lunadax"
        />

        <div className="flex justify-between items-center">
          <button className="btn-primary h-[50px] opacity-70 cursor-not-allowed" disabled>
            Leave a review
          </button>
          <div className="font-bold text-base text-[#6f7d9d] flex items-center cursor-pointer hover:text-white transition-colors">
            See all reviews
            <svg style={{ marginLeft: '8px', marginBottom: '-3px' }} width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

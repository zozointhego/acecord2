"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  CheckCircle,
  Code,
  MessageSquare,
  Shield,
  Star,
  Sparkles,
  Zap,
  Users,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";
import BentoGridDemo from "@/components/bento-grid-demo";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <div
      className="min-h-screen bg-slate-950 text-white overflow-hidden relative"
      suppressHydrationWarning
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-600/25 to-purple-600/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating Navigation */}
      <div className="container max-w-5xl mx-auto">
        <motion.header
          className="relative pt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="flex items-center justify-between rounded-xl bg-slate-900/80 backdrop-blur-xl py-3 px-6 shadow-2xl border border-slate-700/50">
            <div className="flex items-center space-x-6">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/25">
                  <span className="font-bold text-white">A</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Acecord
                </span>
              </motion.div>
              <div className="hidden md:flex items-center space-x-6">
                {["Features", "Testimonials", "Pricing", "FAQ"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="text-sm text-slate-300 hover:text-white transition-all duration-300 relative group"
                      >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-slate-300 hover:text-white"
              >
                <Sun className="h-[15px] w-[15px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[15px] w-[15px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="hidden md:inline-flex h-8 px-3 text-sm font-normal text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
                >
                  Sign in
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="hidden md:inline-flex h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-4 text-sm font-normal text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                  Get Started
                </Button>
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 md:hidden text-slate-300 hover:text-white"
                  >
                    <Menu className="h-[15px] w-[15px]" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[240px] sm:w-[300px] bg-slate-900 border-slate-700"
                >
                  <nav className="flex flex-col space-y-4 mt-8">
                    {["Features", "Testimonials", "Pricing", "FAQ"].map(
                      (item) => (
                        <Link
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="text-sm text-slate-300 hover:text-white transition-colors duration-300"
                        >
                          {item}
                        </Link>
                      ),
                    )}
                    <Link href="/login">
                      <Button
                        variant="ghost"
                        className="justify-start h-8 px-3 text-sm font-normal text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 w-full"
                      >
                        Sign in
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-4 text-sm font-normal text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 w-full">
                        Get Started
                      </Button>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <main className="relative container px-2 mx-auto">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
            <motion.div
              className="flex flex-col items-center space-y-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="flex flex-col items-center space-y-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>247 Discord experts online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span>1,432 active gigs</span>
                  </div>
                </div>
                <motion.h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Top Discord Talent,
                  <br />
                  Available Now
                </motion.h1>
              </motion.div>
              <motion.p
                className="mx-auto max-w-xl text-md sm:text-xl text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                From custom bots to server setups — find verified Discord
                professionals ready to start your project today.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105 group">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Browse Services
                </Button>
                <Link href="/signup?type=client">
                  <Button
                    variant="outline"
                    className="rounded-xl border-2 border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700/70 hover:border-slate-500 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Post a Job
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-col items-center space-y-3 pb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Discord Bots
                  </span>
                  <span className="text-slate-400">Server Design</span>
                  <span className="text-purple-400 hover:text-purple-300 transition-colors">
                    Community Management
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  Built for Discord professionals and clients
                </p>
              </motion.div>

              <motion.div
                className="w-full border border-slate-700/50 p-2 rounded-3xl bg-slate-800/30 backdrop-blur-xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="relative w-full">
                  <div className="relative w-full rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
                    <img
                      src="https://ui.shadcn.com/examples/dashboard-dark.png"
                      alt="Acecord Dashboard Preview"
                      className="w-full h-full object-center hidden dark:block rounded-3xl"
                    />
                    <img
                      src="https://ui.shadcn.com/examples/dashboard-light.png"
                      alt="Acecord Dashboard Preview"
                      className="w-full h-full object-center dark:hidden block rounded-3xl"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-slate-950 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          </section>
        </main>
      </div>

      {/* Trending Categories Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trending{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Discover the most popular Discord services right now
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                title: "Discord Bots",
                count: "342 services",
                price: "From $25",
                gradient: "from-blue-500 to-cyan-500",
                icon: "🤖",
                popular: true,
              },
              {
                title: "Server Setup",
                count: "189 services",
                price: "From $15",
                gradient: "from-purple-500 to-pink-500",
                icon: "⚙️",
                popular: false,
              },
              {
                title: "Graphics & Design",
                count: "267 services",
                price: "From $10",
                gradient: "from-green-500 to-emerald-500",
                icon: "🎨",
                popular: false,
              },
              {
                title: "Moderation",
                count: "156 services",
                price: "From $20",
                gradient: "from-yellow-500 to-orange-500",
                icon: "🛡️",
                popular: false,
              },
              {
                title: "Community Management",
                count: "98 services",
                price: "From $30",
                gradient: "from-indigo-500 to-blue-500",
                icon: "👥",
                popular: false,
              },
              {
                title: "Custom Development",
                count: "124 services",
                price: "From $50",
                gradient: "from-red-500 to-pink-500",
                icon: "💻",
                popular: false,
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {category.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                    🔥 Hot
                  </div>
                )}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 h-full hover:bg-slate-800/70 transition-all duration-300 group-hover:border-slate-600/70">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    {category.count}
                  </p>
                  <p className="text-indigo-400 font-semibold">
                    {category.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BentoGridDemo />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Acecord
            </span>{" "}
            Works
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Get started in just a few simple steps
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              step: "01",
              title: "Create Your Account",
              description:
                "Sign up as a freelancer or client and complete your profile with relevant information.",
            },
            {
              step: "02",
              title: "Connect & Discover",
              description:
                "Browse through available gigs or post your job to find the perfect match for your needs.",
            },
            {
              step: "03",
              title: "Collaborate & Pay",
              description:
                "Work together through our platform and use our secure payment system when the job is done.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {index < 2 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-slate-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <ArrowRight className="w-8 h-8" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Users Say
              </span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Hear from freelancers and clients who have found success on
              Acecord
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Alex Johnson",
                role: "Discord Bot Developer",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
                quote:
                  "Built 50+ custom bots through Acecord. The client quality is amazing and payments are always on time! 🚀",
                rating: 5,
                earnings: "$12,400 earned",
                badge: "⭐ Top Rated",
              },
              {
                name: "Sarah Williams",
                role: "Community Manager",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
                quote:
                  "Grew my Discord community management business 300% in 6 months. Acecord connects me with serious clients who value quality work.",
                rating: 5,
                earnings: "$8,900 earned",
                badge: "🔥 Rising Star",
              },
              {
                name: "Michael Chen",
                role: "Server Setup Specialist",
                image:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
                quote:
                  "From gaming servers to business Discord setups - I've found my niche here. The project variety keeps things exciting!",
                rating: 5,
                earnings: "$15,200 earned",
                badge: "💎 Pro Seller",
              },
              {
                name: "Jessica Taylor",
                role: "Discord Graphics Designer",
                image:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
                quote:
                  "Creating custom Discord server graphics and emotes has never been more profitable. Love the creative freedom clients give me here!",
                rating: 5,
                earnings: "$6,700 earned",
                badge: "🎨 Creative Pro",
              },
              {
                name: "David Rodriguez",
                role: "Discord Moderator",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
                quote:
                  "Turned my Discord moderation skills into a steady income. Managing multiple communities through Acecord has been a game-changer.",
                rating: 5,
                earnings: "$4,300 earned",
                badge: "🛡️ Trusted Mod",
              },
              {
                name: "Emma Wilson",
                role: "Discord Integration Expert",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
                quote:
                  "Helping businesses integrate Discord into their workflow is my passion. Acecord clients understand the value of proper Discord setup.",
                rating: 5,
                earnings: "$9,800 earned",
                badge: "⚡ Integration Guru",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/70 transition-all duration-300 group h-full relative overflow-hidden">
                  {/* Discord-style doodle accent */}
                  <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {index % 3 === 0 ? "✨" : index % 3 === 1 ? "🎯" : "💫"}
                  </div>

                  <CardContent className="p-8 space-y-6 h-full flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5">
                          <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        {/* Online status indicator */}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-slate-800" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-white text-lg">
                            {testimonial.name}
                          </h4>
                          <span className="text-xs bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-1 rounded-full">
                            {testimonial.badge}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-green-400 text-sm font-semibold">
                          {testimonial.earnings}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.div
                          key={star}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + star * 0.05,
                          }}
                        >
                          <Star
                            className={`w-5 h-5 ${star <= testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-600"}`}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-slate-300 leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <motion.div
          className="relative overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/30 to-pink-600/20 rounded-3xl blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl" />

          {/* Content */}
          <div className="relative backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-16 text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                get started?
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join thousands of freelancers and clients already using Acecord to
              connect, collaborate, and create amazing Discord experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 text-white font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 min-w-[200px] group"
                >
                  <Sparkles className="mr-2 h-5 w-5 text-white group-hover:rotate-12 transition-transform" />
                  Start Selling
                </Button>
              </motion.div>

              <Link href="/signup?type=client">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600/70 hover:border-slate-500 hover:text-white backdrop-blur-sm text-lg px-10 py-4 rounded-xl transition-all duration-300 min-w-[200px]"
                  >
                    <Users className="mr-2 h-5 w-5 text-white" />
                    Browse Services
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Additional CTA Info */}
            <motion.div
              className="mt-8 pt-8 border-t border-slate-700/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Secure payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Verified professionals</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="font-bold text-white">A</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Acecord
                </span>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                The premier marketplace for Discord freelancers and clients.
              </p>
            </motion.div>

            {[
              {
                title: "Platform",
                links: ["How it works", "Pricing", "FAQ", "Resources"],
              },
              {
                title: "Company",
                links: ["About us", "Careers", "Blog", "Press"],
              },
              {
                title: "Legal",
                links: [
                  "Terms of Service",
                  "Privacy Policy",
                  "Cookie Policy",
                  "Dispute Resolution",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-semibold mb-4 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors duration-300 hover:underline"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              &copy; {new Date().getFullYear()} Acecord. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  MessageSquare,
  Shield,
  Star,
  Code,
  CheckCircle,
  Zap,
} from "lucide-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 5 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ gradient }: { gradient: string }) => (
  <div
    className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${gradient} opacity-20`}
  ></div>
);

const items = [
  {
    title: "Seamless Communication",
    description:
      "Built-in messaging system that makes client-freelancer communication effortless and organized.",
    header: <Skeleton gradient="from-blue-500 to-cyan-500" />,
    icon: <MessageSquare className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Secure Payments",
    description:
      "Protected payment system ensures you get paid for your work or receive the services you paid for.",
    header: <Skeleton gradient="from-green-500 to-emerald-500" />,
    icon: <Shield className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Verified Reviews",
    description:
      "Transparent review system helps build trust between clients and freelancers.",
    header: <Skeleton gradient="from-yellow-500 to-orange-500" />,
    icon: <Star className="h-6 w-6 text-yellow-400" />,
  },
  {
    title: "Discord Integration",
    description:
      "Seamlessly connect your Discord account and manage your services directly from the platform.",
    header: <Skeleton gradient="from-purple-500 to-pink-500" />,
    icon: <Code className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Quality Assurance",
    description:
      "We verify all freelancers to ensure you're working with qualified professionals.",
    header: <Skeleton gradient="from-indigo-500 to-blue-500" />,
    icon: <CheckCircle className="h-6 w-6 text-indigo-400" />,
  },
  {
    title: "Quick Onboarding",
    description:
      "Get started in minutes with our streamlined registration and verification process.",
    header: <Skeleton gradient="from-red-500 to-pink-500" />,
    icon: <Zap className="h-6 w-6 text-red-400" />,
  },
];

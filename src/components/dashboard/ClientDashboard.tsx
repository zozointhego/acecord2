"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PlusCircle,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
} from "lucide-react";

interface Order {
  id: string;
  title: string;
  freelancer: {
    name: string;
    avatar: string;
    rating: number;
  };
  status: "in-progress" | "review" | "completed" | "cancelled";
  progress: number;
  dueDate: string;
}

interface Job {
  id: string;
  title: string;
  description: string;
  budget: string;
  applicants: number;
  postedDate: string;
}

interface FreelancerRecommendation {
  id: string;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  completedJobs: number;
  skills: string[];
}

interface ClientDashboardProps {
  activeOrders?: Order[];
  postedJobs?: Job[];
  recommendedFreelancers?: FreelancerRecommendation[];
}

export default function ClientDashboard({
  activeOrders = [
    {
      id: "order-1",
      title: "Discord Bot Development",
      freelancer: {
        name: "Alex Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        rating: 4.8,
      },
      status: "in-progress",
      progress: 65,
      dueDate: "2023-06-15",
    },
    {
      id: "order-2",
      title: "Server Setup & Configuration",
      freelancer: {
        name: "Maya Rodriguez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
        rating: 4.9,
      },
      status: "review",
      progress: 90,
      dueDate: "2023-06-10",
    },
    {
      id: "order-3",
      title: "Custom Discord Role Icons",
      freelancer: {
        name: "Jamal Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamal",
        rating: 4.7,
      },
      status: "completed",
      progress: 100,
      dueDate: "2023-06-05",
    },
  ],
  postedJobs = [
    {
      id: "job-1",
      title: "Need Discord Community Manager",
      description:
        "Looking for an experienced community manager to help grow our server.",
      budget: "$200-$500",
      applicants: 12,
      postedDate: "2023-06-01",
    },
    {
      id: "job-2",
      title: "Discord Bot Developer Needed",
      description: "Need a custom bot for moderation and user engagement.",
      budget: "$100-$300",
      applicants: 8,
      postedDate: "2023-06-03",
    },
  ],
  recommendedFreelancers = [
    {
      id: "freelancer-1",
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      title: "Discord Bot Developer",
      rating: 4.9,
      completedJobs: 47,
      skills: ["JavaScript", "Python", "Discord.js"],
    },
    {
      id: "freelancer-2",
      name: "Michael Park",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      title: "Community Manager",
      rating: 4.8,
      completedJobs: 32,
      skills: ["Moderation", "Growth", "Engagement"],
    },
    {
      id: "freelancer-3",
      name: "Leila Ahmadi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leila",
      title: "Discord Server Designer",
      rating: 5.0,
      completedJobs: 28,
      skills: ["UI Design", "Channel Structure", "Roles"],
    },
  ],
}: ClientDashboardProps) {
  return (
    <div className="bg-background min-h-screen p-6 space-y-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Client Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your projects and find talent
          </p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Messages
          </Button>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Post a Job
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Active Orders</CardTitle>
            <CardDescription>Currently in progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">
                {
                  activeOrders.filter(
                    (order) =>
                      order.status !== "completed" &&
                      order.status !== "cancelled",
                  ).length
                }
              </span>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Posted Jobs</CardTitle>
            <CardDescription>Open positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">{postedJobs.length}</span>
              <PlusCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Completed Projects</CardTitle>
            <CardDescription>Successfully delivered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">
                {
                  activeOrders.filter((order) => order.status === "completed")
                    .length
                }
              </span>
              <CheckCircle className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="orders">Active Orders</TabsTrigger>
          <TabsTrigger value="jobs">Posted Jobs</TabsTrigger>
          <TabsTrigger value="recommended">Recommended Freelancers</TabsTrigger>
        </TabsList>

        {/* Active Orders Tab */}
        <TabsContent value="orders" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {activeOrders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{order.title}</h3>
                        <div className="flex items-center mt-2">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage
                              src={order.freelancer.avatar}
                              alt={order.freelancer.name}
                            />
                            <AvatarFallback>
                              {order.freelancer.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">
                            {order.freelancer.name}
                          </span>
                          <div className="flex items-center ml-3">
                            <Star
                              className="h-3 w-3 text-yellow-500 mr-1"
                              fill="currentColor"
                            />
                            <span className="text-sm">
                              {order.freelancer.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <StatusBadge status={order.status} />
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{order.progress}%</span>
                      </div>
                      <Progress value={order.progress} className="h-2" />
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        Due: {new Date(order.dueDate).toLocaleDateString()}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" /> Message
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Posted Jobs Tab */}
        <TabsContent value="jobs" className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Job Listings</h2>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" /> Post New Job
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {postedJobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{job.title}</CardTitle>
                    <Badge variant="outline">{job.budget}</Badge>
                  </div>
                  <CardDescription className="mt-2">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      Posted: {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-4">
                        {job.applicants} Applicants
                      </Badge>
                      <Button size="sm">View Applications</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Recommended Freelancers Tab */}
        <TabsContent value="recommended" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedFreelancers.map((freelancer) => (
              <Card key={freelancer.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={freelancer.avatar}
                        alt={freelancer.name}
                      />
                      <AvatarFallback>
                        {freelancer.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">
                        {freelancer.name}
                      </CardTitle>
                      <CardDescription>{freelancer.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Star
                      className="h-4 w-4 text-yellow-500 mr-1"
                      fill="currentColor"
                    />
                    <span className="font-medium">{freelancer.rating}</span>
                    <span className="text-muted-foreground text-sm ml-2">
                      ({freelancer.completedJobs} jobs)
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {freelancer.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between mt-4">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function StatusBadge({ status }: { status: Order["status"] }) {
  switch (status) {
    case "in-progress":
      return (
        <Badge variant="outline" className="border-blue-500 text-blue-500">
          <Clock className="h-3 w-3 mr-1" /> In Progress
        </Badge>
      );
    case "review":
      return (
        <Badge variant="outline" className="border-yellow-500 text-yellow-500">
          <AlertCircle className="h-3 w-3 mr-1" /> In Review
        </Badge>
      );
    case "completed":
      return (
        <Badge variant="outline" className="border-green-500 text-green-500">
          <CheckCircle className="h-3 w-3 mr-1" /> Completed
        </Badge>
      );
    case "cancelled":
      return (
        <Badge variant="outline" className="border-red-500 text-red-500">
          <AlertCircle className="h-3 w-3 mr-1" /> Cancelled
        </Badge>
      );
    default:
      return null;
  }
}

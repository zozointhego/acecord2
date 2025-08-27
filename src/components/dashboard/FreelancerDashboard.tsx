"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  ChevronRight,
  DollarSign,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";

interface FreelancerDashboardProps {
  username?: string;
  earnings?: number;
  pendingGigs?: number;
  averageRating?: number;
  completedGigs?: number;
  activeGigs?: GigProps[];
  recentMessages?: MessageProps[];
  recentReviews?: ReviewProps[];
}

interface GigProps {
  id: string;
  title: string;
  price: number;
  status: "active" | "pending" | "completed";
  progress: number;
  client: {
    name: string;
    avatar: string;
  };
}

interface MessageProps {
  id: string;
  sender: {
    name: string;
    avatar: string;
  };
  message: string;
  time: string;
  unread: boolean;
}

interface ReviewProps {
  id: string;
  client: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export default function FreelancerDashboard({
  username = "Alex Johnson",
  earnings = 2450,
  pendingGigs = 3,
  averageRating = 4.8,
  completedGigs = 24,
  activeGigs = [
    {
      id: "gig-1",
      title: "Discord Bot Development",
      price: 150,
      status: "active",
      progress: 65,
      client: {
        name: "Sarah Miller",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      },
    },
    {
      id: "gig-2",
      title: "Server Setup & Configuration",
      price: 85,
      status: "active",
      progress: 30,
      client: {
        name: "Mike Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
      },
    },
    {
      id: "gig-3",
      title: "Custom Discord Emojis",
      price: 60,
      status: "pending",
      progress: 0,
      client: {
        name: "Jessica Lee",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
      },
    },
  ],
  recentMessages = [
    {
      id: "msg-1",
      sender: {
        name: "Sarah Miller",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      },
      message: "Hey, just checking on the progress of the bot. How's it going?",
      time: "2h ago",
      unread: true,
    },
    {
      id: "msg-2",
      sender: {
        name: "Mike Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
      },
      message:
        "I've sent you the server credentials. Let me know when you start.",
      time: "5h ago",
      unread: false,
    },
    {
      id: "msg-3",
      sender: {
        name: "Jessica Lee",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
      },
      message: "Looking forward to seeing the emoji designs!",
      time: "1d ago",
      unread: false,
    },
  ],
  recentReviews = [
    {
      id: "rev-1",
      client: {
        name: "David Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      },
      rating: 5,
      comment:
        "Excellent work on our Discord bot! Very responsive and delivered ahead of schedule.",
      date: "2 days ago",
    },
    {
      id: "rev-2",
      client: {
        name: "Emma Thompson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      },
      rating: 4.5,
      comment:
        "Great communication and quality work. Would definitely hire again!",
      date: "1 week ago",
    },
  ],
}: FreelancerDashboardProps) {
  return (
    <div className="bg-background min-h-screen p-6">
      {/* Welcome Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {username}</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your gigs today.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">View Portfolio</Button>
          <Button>Create New Gig</Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Earnings
                </p>
                <h3 className="text-2xl font-bold mt-1">${earnings}</h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground flex items-center">
              <span className="text-green-500 font-medium">+12%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Pending Gigs
                </p>
                <h3 className="text-2xl font-bold mt-1">{pendingGigs}</h3>
              </div>
              <div className="p-2 bg-amber-500/10 rounded-full">
                <BarChart3 className="h-6 w-6 text-amber-500" />
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <span>Estimated value: </span>
              <span className="font-medium">${295}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Average Rating
                </p>
                <h3 className="text-2xl font-bold mt-1">{averageRating}</h3>
              </div>
              <div className="p-2 bg-yellow-500/10 rounded-full">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(averageRating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="ml-2">from {completedGigs} gigs</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Profile Views
                </p>
                <h3 className="text-2xl font-bold mt-1">142</h3>
              </div>
              <div className="p-2 bg-blue-500/10 rounded-full">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground flex items-center">
              <span className="text-green-500 font-medium">+28%</span>
              <span className="ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Gigs */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Active Gigs</CardTitle>
              <CardDescription>Your current ongoing projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activeGigs.map((gig) => (
                  <div
                    key={gig.id}
                    className="flex flex-col space-y-3 p-4 border rounded-lg"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{gig.title}</h3>
                          <Badge
                            variant={
                              gig.status === "active" ? "default" : "secondary"
                            }
                          >
                            {gig.status === "active"
                              ? "In Progress"
                              : "Pending"}
                          </Badge>
                        </div>
                        <div className="flex items-center mt-2">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage
                              src={gig.client.avatar}
                              alt={gig.client.name}
                            />
                            <AvatarFallback>
                              {gig.client.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">
                            {gig.client.name}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${gig.price}</div>
                      </div>
                    </div>

                    {gig.status === "active" && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{gig.progress}%</span>
                        </div>
                        <Progress value={gig.progress} className="h-2" />
                      </div>
                    )}

                    <div className="flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs flex items-center"
                      >
                        View Details <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages & Reviews */}
        <div>
          <Tabs defaultValue="messages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="messages">
                <div className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </div>
              </TabsTrigger>
              <TabsTrigger value="reviews">
                <div className="flex items-center">
                  <Star className="mr-2 h-4 w-4" />
                  Reviews
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>
                    Stay in touch with your clients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMessages.map((message) => (
                      <div
                        key={message.id}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <Avatar>
                          <AvatarImage
                            src={message.sender.avatar}
                            alt={message.sender.name}
                          />
                          <AvatarFallback>
                            {message.sender.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-sm">
                              {message.sender.name}
                            </p>
                            <div className="flex items-center">
                              <span className="text-xs text-muted-foreground">
                                {message.time}
                              </span>
                              {message.unread && (
                                <div className="ml-2 h-2 w-2 rounded-full bg-primary"></div>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {message.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4">
                    View All Messages
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Reviews</CardTitle>
                  <CardDescription>
                    What clients are saying about you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReviews.map((review) => (
                      <div key={review.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar>
                              <AvatarImage
                                src={review.client.avatar}
                                alt={review.client.name}
                              />
                              <AvatarFallback>
                                {review.client.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">
                                {review.client.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {review.date}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium mr-1">
                              {review.rating}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${i < Math.floor(review.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4">
                    View All Reviews
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

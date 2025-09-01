"use client"

import { cn } from "@/lib/utils"

interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: {
    imageUrl: string
    profileUrl: string
  }[]
}

export const AvatarCircles = ({ numPeople, className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((avatar, index) => (
        <a
          key={index}
          href={avatar.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block"
        >
          <img
            className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800 hover:scale-110 transition-transform"
            src={avatar.imageUrl || "/placeholder.svg"}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
        href=""
      >
        +{numPeople}
      </a>
    </div>
  )
}

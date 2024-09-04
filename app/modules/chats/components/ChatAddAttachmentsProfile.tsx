import AppIcon from '@/components/shared/AppIcon'
import { Card, CardContent } from '@/components/shared/ui/AppCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shared/ui/avatar'
import React from 'react'

export const ChatAddAttachmentsProfile = () => {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden border-2 border-primary-1 rounded-xl">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/team/wildelmy-colina.jpg" alt="Mare Kosward" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">Mare Kosward</h2>
            <p className="text-xl text-primary-1">Score 5.0</p>
            <p className="text-gray-1">influencer, instagram, creator</p>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex items-center space-x-3">
            <AppIcon icon="phone" />
            <span className="text-lg">000 0000 000</span>
          </div>
          <div className="flex items-center space-x-3">
            <AppIcon icon="mail" />
            <span className="text-lg">minhoo@minhoo.app</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

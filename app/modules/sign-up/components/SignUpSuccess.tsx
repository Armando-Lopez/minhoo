import React from 'react'

import { Card, CardContent } from "@components/shared/ui/AppCard";
import AppIcon from '@/components/shared/AppIcon';

export const SignUpSuccess = () => {

  return (
    <Card className="w-full py-10 px-5">
    <CardContent className="text-center">
      <AppIcon icon="check-circle" className="mb-7 text-primary-1 mx-auto" height={130} />
      <h4 className="mb-5 text-3xl">Welcome to our team!</h4>
      <p>Now you are part of our community, you have the doors open to a universe of solutions and opportunities.</p>
      {/* <AppButton className="w-full">Continue</AppButton> */}
    </CardContent>
  </Card>
  )
}

"use client"

import { Button } from "./ui/button"
import { MessageCircle } from "lucide-react"

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <Button 
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-full px-6"
      >
        <MessageCircle className="mr-2 w-5 h-5" />
        Offerte
      </Button>
    </div>
  )
}
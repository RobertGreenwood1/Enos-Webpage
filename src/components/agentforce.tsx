"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Bot } from "lucide-react"

export function Agentforce() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 mb-4">
                <Bot className="h-5 w-5" />
                <span>AGENTFORCE IN ENOS</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                There's an AI agent for everyone in Enos.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Update customer profiles, set follow-up reminders, resolve support issues,
                and so much more with always-on, action-taking AI agents in Enos.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 group">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6">
                <img
                  src="placeholder.png"
                  alt="AI Agent Interface"
                  className="w-full h-auto rounded-lg"
                  style={{ minHeight: '400px', backgroundColor: '#f3f4f6' }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <Bot className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                    <div className="text-xl font-medium">AI Agent Chat Interface</div>
                    <div className="text-sm mt-2">Customer Support Assistant</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

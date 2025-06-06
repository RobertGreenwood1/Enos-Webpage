"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Users, FolderKanban, Zap, Brain } from "lucide-react"

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Bring your customers, projects,<br />
            apps, and AI agents together.
          </h2>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
              <Users className="h-5 w-5" />
              <span>CUSTOMER MANAGEMENT</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
              <FolderKanban className="h-5 w-5" />
              <span>PROJECT MANAGEMENT</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
              <Zap className="h-5 w-5" />
              <span>INTEGRATIONS</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
              <Brain className="h-5 w-5" />
              <span>ENOS AI</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>AGENTFORCE</span>
            </div>
          </div>
        </div>

        {/* Features Tabs */}
        <Tabs defaultValue="collaboration" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger value="collaboration" className="data-[state=active]:bg-white">
              Customer Management
            </TabsTrigger>
            <TabsTrigger value="project" className="data-[state=active]:bg-white">
              Project Management
            </TabsTrigger>
            <TabsTrigger value="integrations" className="data-[state=active]:bg-white">
              Integrations
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-white">
              Enos AI
            </TabsTrigger>
          </TabsList>

          <div className="mt-12">
            <TabsContent value="collaboration" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 mb-4">
                      <Users className="h-5 w-5" />
                      <span>CUSTOMER MANAGEMENT</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Communicate with customers in countless ways from one place.
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Enos is built for bringing customer data and team communication together.
                      Track interactions, manage relationships, and collaborate with your team seamlessly.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                      <div className="text-sm text-gray-600">
                        of Fortune 100 companies use integrated CRM systems
                        to improve customer relationships¹
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-green-500 rounded-full w-96 h-96 absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 opacity-20" />
                  <Card className="relative bg-white shadow-xl">
                    <CardContent className="p-6">
                      <img
                        src="placeholder.png"
                        alt="Customer Management Interface"
                        className="w-full h-auto rounded-lg"
                        style={{ minHeight: '300px', backgroundColor: '#f3f4f6' }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <div className="text-center">
                          <Users className="h-12 w-12 mx-auto mb-2" />
                          <div className="font-medium">Customer Dashboard</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="project" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 mb-4">
                      <FolderKanban className="h-5 w-5" />
                      <span>PROJECT MANAGEMENT</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Manage projects and move work forward faster.
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Prioritize tasks, share ideas, and stay aligned. Enos brings every piece
                      of your customer project together from start to finish.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <div className="text-4xl font-bold text-blue-600 mb-2">47%</div>
                      <div className="text-sm text-gray-600">
                        increase in productivity for teams using
                        integrated project management²
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="relative bg-white shadow-xl">
                    <CardContent className="p-6">
                      <img
                        src="placeholder.png"
                        alt="Project Management Interface"
                        className="w-full h-auto rounded-lg"
                        style={{ minHeight: '300px', backgroundColor: '#f3f4f6' }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <div className="text-center">
                          <FolderKanban className="h-12 w-12 mx-auto mb-2" />
                          <div className="font-medium">Project Pipeline</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 mb-4">
                      <Zap className="h-5 w-5" />
                      <span>INTEGRATIONS</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Tap into the tools you already use.
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Over 2,600 apps are ready to connect with Enos so you can automate
                      everyday tasks in the flow of work, and save your team precious time.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
                      <div className="text-sm text-gray-600">
                        increase in time saved due to automation
                        for CRM users³
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="relative bg-white shadow-xl">
                    <CardContent className="p-6">
                      <img
                        src="placeholder.png"
                        alt="Integrations Interface"
                        className="w-full h-auto rounded-lg"
                        style={{ minHeight: '300px', backgroundColor: '#f3f4f6' }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <div className="text-center">
                          <Zap className="h-12 w-12 mx-auto mb-2" />
                          <div className="font-medium">App Integrations</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 mb-4">
                      <Brain className="h-5 w-5" />
                      <span>ENOS AI</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Do more with AI that works where you do.
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Search your entire customer history for insights, instantly catch up on
                      conversations, and get daily recaps of important updates.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <div className="text-4xl font-bold text-blue-600 mb-2">97 min</div>
                      <div className="text-sm text-gray-600">
                        average time users can save weekly
                        with Enos AI⁴
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="relative bg-white shadow-xl">
                    <CardContent className="p-6">
                      <img
                        src="placeholder.png"
                        alt="AI Interface"
                        className="w-full h-auto rounded-lg"
                        style={{ minHeight: '300px', backgroundColor: '#f3f4f6' }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <div className="text-center">
                          <Brain className="h-12 w-12 mx-auto mb-2" />
                          <div className="font-medium">AI Assistant</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

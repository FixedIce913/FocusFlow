import { Card, CardHeader, CardContent, Button } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Calendar, PlayCircle, CheckCircle, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function FocusFlowWireframe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 p-6">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-center mb-6">
        FocusFlow – High-Fidelity Wireframe
      </motion.h1>

      {/* Dashboard Screen */}
      <Card className="max-w-5xl mx-auto mb-8 shadow-lg">
        <CardHeader className="text-xl font-semibold">Dashboard / Home</CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 text-center bg-blue-100">
            <p className="font-medium">Today's Focus Time</p>
            <h2 className="text-2xl font-bold mt-2">3h 20m</h2>
          </Card>
          <Card className="p-4 text-center bg-green-100">
            <p className="font-medium">Tasks Completed</p>
            <h2 className="text-2xl font-bold mt-2">5</h2>
          </Card>
          <Card className="p-4 text-center bg-yellow-100">
            <p className="font-medium">Breaks Taken</p>
            <h2 className="text-2xl font-bold mt-2">2</h2>
          </Card>
          <Button className="col-span-full mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center">
            <PlayCircle className="mr-2" /> Start Focus Session
          </Button>
        </CardContent>
      </Card>

      {/* Tabs for Navigation */}
      <Tabs defaultValue="tasks" className="max-w-5xl mx-auto">
        <TabsList className="flex justify-around bg-gray-100 rounded-lg p-2 mb-6">
          <TabsTrigger value="tasks" className="flex items-center gap-2"><CheckCircle />Tasks</TabsTrigger>
          <TabsTrigger value="schedule" className="flex items-center gap-2"><Calendar />Schedule</TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center gap-2"><BarChart3 />Stats</TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2"><Settings />Settings</TabsTrigger>
        </TabsList>

        {/* Tasks Tab */}
        <TabsContent value="tasks">
          <Card className="p-4 shadow-md">
            <CardHeader className="font-semibold">Your Tasks</CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span>Finish essay draft</span>
                <Progress value={80} className="w-1/2" />
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Study math chapter 6</span>
                <Progress value={40} className="w-1/2" />
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white mt-3">+ Add Task</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Schedule Tab */}
        <TabsContent value="schedule">
          <Card className="p-4 shadow-md">
            <CardHeader className="font-semibold">Weekly Schedule</CardHeader>
            <CardContent className="grid grid-cols-7 gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="bg-blue-50 rounded-lg p-2 text-center text-sm font-medium border border-blue-100">
                  {day}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Stats Tab */}
        <TabsContent value="stats">
          <Card className="p-4 shadow-md">
            <CardHeader className="font-semibold">Weekly Productivity Stats</CardHeader>
            <CardContent>
              <p className="mb-2">Total Focus Time: 18h 40m</p>
              <p>Study vs. Personal Time Ratio:</p>
              <Progress value={70} className="w-full mt-2" />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card className="p-4 shadow-md">
            <CardHeader className="font-semibold">Settings</CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Dark Mode</span>
                <Button variant="outline">Toggle</Button>
              </div>
              <div className="flex justify-between items-center">
                <span>Notifications</span>
                <Button variant="outline">Manage</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

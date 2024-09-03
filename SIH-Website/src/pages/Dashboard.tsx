import { Bell, User, GraduationCap, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import Sidebar from "../components/myComponents/Sidebar";

function Dashboard() {
    let userDetails
    const userString = localStorage.getItem("user");
    if(userString===null){
        console.log("No user found");
    }else{
        userDetails = JSON.parse(userString)
    }
  return (
    <>
        <div className="flex h-screen bg-white dark:bg-purple-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black dark:text-purple-100">Welome {userDetails.name}</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-black hover:text-gray-800 dark:text-purple-300 dark:hover:text-purple-100">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:text-gray-800 dark:text-purple-300 dark:hover:text-purple-100">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Progress Overview */}
        <section className="mb-6 font-TitilliumWeb">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-purple-100">Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white dark:bg-purple-900 border-purple-200 dark:border-purple-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-black dark:text-purple-200">Courses Completed</CardTitle>
                <GraduationCap className="w-4 h-4 text-gray-500 dark:text-purple-300" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black dark:text-purple-100">4/12</div>
                <Progress value={33} className="mt-2 bg-purple-200 dark:bg-purple-700"/>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-purple-900 border-purple-200 dark:border-purple-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-black dark:text-purple-200">Daily Streak</CardTitle>
                <PieChart className="w-4 h-4 text-gray-500 dark:text-purple-300" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black dark:text-purple-100">7 days</div>
                <p className="text-xs text-gray-600 dark:text-purple-300">Keep it up!</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-purple-900 border-purple-200 dark:border-purple-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-black dark:text-purple-200">Points Earned</CardTitle>
                <GraduationCap className="w-4 h-4 text-gray-500 dark:text-purple-300" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black dark:text-purple-100">1,234</div>
                <p className="text-xs text-gray-600 dark:text-purple-300">+100 this week</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Daily Challenge */}
        <section className="mb-6">
          <Card className="bg-white dark:bg-purple-900 border-purple-200 dark:border-purple-700">
            <CardHeader>
              <CardTitle className="text-black dark:text-purple-100">Daily Challenge</CardTitle>
              <CardDescription className="text-gray-600 dark:text-purple-300">Test your skills with a new problem every day</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2 text-black dark:text-purple-200">Today's Challenge: Probability Puzzle</h3>
              <p className="text-sm text-gray-600 dark:text-purple-300 mb-4">
                Solve a tricky probability question and earn bonus points!
              </p>
              <Button className="bg-purple-600 hover:bg-gray-700 text-white">Start Challenge</Button>
            </CardContent>
          </Card>
        </section>

        {/* Recommended Courses */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-purple-100">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Computer Science Fundamentals', 'Calculus and Analysis', 'Scientific Thinking'].map((course, index) => (
              <Card key={index} className="bg-white dark:bg-purple-900 border-purple-200 dark:border-purple-700">
                <CardHeader>
                  <CardTitle className="text-black dark:text-purple-100">{course}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-purple-300 mb-4">
                    Dive deep into the core concepts and applications of {course.toLowerCase()}.
                  </p>
                  <Button variant="outline" className="bg-purple-600 text-white border-purple-600 hover:bg-gray-50 hover:text-black dark:text-purple-300 dark:border-purple-600 dark:hover:bg-purple-800 dark:hover:text-purple-100">
                    View Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
    </>
    
  );
}

export default Dashboard;

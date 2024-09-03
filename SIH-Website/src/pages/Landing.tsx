import TopbarLanding from "@/components/myComponents/TopbarLanding"
import landing from "../assets/landing.png"
import { Button } from "@/components/ui/button"
import ai from "../assets/AI.svg"
import news from "../assets/news.svg"
import library from "../assets/library.svg"
import quality from "../assets/quality.svg"
import smart from "../assets/smart.svg"
import { useNavigate } from "react-router-dom"
import SectionHeader from "@/components/myComponents/SectionHeader"
import SectionContent from "@/components/myComponents/SectionContent"
import SectionLayout from "@/components/myComponents/SectionLayout"


function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-4 md:px-16 py-8">
        <TopbarLanding />
      </div>

      <div className="flex flex-col-reverse md:flex-row h-full w-screen justify-around items-center mb-20 md:mb-48 mt-8">
        <div className="flex flex-col w-full md:w-1/2 px-6 md:px-12 gap-6 md:gap-12 pt-10">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <p className="text-3xl md:text-5xl font-TitilliumWeb font-bold tracking-wide">Ed-tech for</p>
            <p className="text-3xl md:text-5xl font-bold font-TitilliumWeb text-purple-600 tracking-wider">ALL</p>
          </div>
          <p className="font-medium text-lg md:text-xl leading-relaxed font-TitilliumWeb">
            Unlock a world of knowledge with free access to diverse educational resources, AI-powered summaries, and personalized private classrooms. Join us in making quality education accessible to everyone, everywhere.
          </p>
          <Button className="bg-purple-600 w-full md:w-1/2 rounded-full py-4 md:py-6" onClick={() => navigate('/form')}>
            Get Started
          </Button>
        </div>
        <div className="w-full md:w-1/2 pr-2">
          <img src={landing} className="w-full" alt="Landing" />
        </div>
      </div>

      <SectionLayout
        header={<SectionHeader title="Digital" subtitle="Library" />}
        content={
          <SectionContent
            items={[
              { title: "Comprehensive Access:", description: "All educational content sorted into categories and subcategories including official tests." },
              { title: "Multi-Platform Availability:", description: "Accessible on web, mobile, and tablets." }
            ]}
          />
        }
        imageSrc={library}
      />

      <SectionLayout
        header={<SectionHeader title="AI" subtitle="Integration" />}
        content={
          <SectionContent
            items={[
              { title: "AI Summaries, Quizzes, and Daily Problems:", description: "Enhance learning with AI-generated content from PDFs and PPTs." },
              { title: "Gesture Writing:", description: "Enable interactive learning through gesture-based writing." },
              { title: "AI Authentication:", description: "Secure video authentication with AI for authorized access." }
            ]}
          />
        }
        imageSrc={ai}
        reverse
      />

      <SectionLayout
        header={<SectionHeader title="Smart" subtitle="Classrooms" />}
        content={
          <SectionContent
            items={[
              { title: "Personalised Learning:", description: "Ed-Tech level personalisation without extra costs." },
              { title: "Interactive Tools:", description: "Use of digital tools for engaging lessons." }
            ]}
          />
        }
        imageSrc={smart}
      />

      <SectionLayout
        header={<SectionHeader title="Credible" subtitle="Information" />}
        content={
          <SectionContent
            items={[
              { title: "Effective Study Tools:", description: "Promote effective study habits." },
              { title: "Fact-Checking:", description: "Ensure all information is accurate and reliable." }
            ]}
          />
        }
        imageSrc={news}
        reverse
      />

      <SectionLayout
        header={<SectionHeader title="Quality" subtitle="Content Visibility" />}
        content={
          <SectionContent
            items={[
              { title: "Discovery Algorithms:", description: "Highlight high-quality educational content." },
              { title: "User Reviews:", description: "Ratings and reviews to guide content selection." }
            ]}
          />
        }
        imageSrc={quality}
      />
    </>
  );
}

export default Landing;

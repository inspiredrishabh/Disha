import Topbar from '@/components/myComponents/Topbar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
}

interface StepProps {
  question: string;
  options: string[];
  handleOptionClick: (option: string) => void;
}

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
  });

  const handleOptionClick = (question: keyof FormData, option: string): void => {
    setFormData({
      ...formData,
      [question]: option,
    });
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleOptionClick4 = (question: keyof FormData, option: string): void =>{
    setFormData({
      ...formData,
      [question]: option,
    });
    if (step < 5) {
      setStep(step + 1);
    }
  }

  const progressBarWidth = `${(step / 5) * 100}%`;

  return (
    <>
    <div className="px-16 py-8">
        <Topbar/>
      </div>
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow-md rounded-md">
       <h1 className="text-2xl font-bold mb-6 text-center">Let's get you started with a few questions</h1>

      {/* Progress Bar */}
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-purple-600 rounded-full transition-all duration-300"
          style={{ width: progressBarWidth }}
        ></div>
      </div>

      {/* Question Steps */}
      {step === 1 && (
        <Step
          question="You are currently pursuing?"
          options={['School', 'Graduation', 'Postgraduation', 'Unenrolled']}
          handleOptionClick={(option) => handleOptionClick('question1', option)}
        />
      )}
      {
        formData.question1=="School" && (
          step===2 && (
            <Step
          question="What is your current grade you are studying in?"
          options={['1-5', '6-8', '9-10', '11-12']}
          handleOptionClick={(option) => handleOptionClick('question2', option)}
        />
          )
        )
      }
      {
        (formData.question2==="9-10") && (
          step===3 && (
            <Step
          question="What is your current stream?"
          options={['Science', 'Commerce', 'Arts', 'None']}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
          )
        )
      }
      {
        (formData.question2==="11-12") && (
          step===3 && (
            <Step
          question="What is your current stream?"
          options={['Science(Maths)', 'Science(Biology)','Science(Maths & Biology)','Commerce (Maths)', 'Commerce(Without Maths)','Arts']}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
          )
        )
      }
      {
        (formData.question2==="1-5") || (formData.question2==="6-8")  && (
          step===3 && (
            <Step
          question="What is your favourite subject?"
          options={['Maths', 'Social Studies','Science', 'Hindi', 'English']}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
          )
        )
      }
      {
        (formData.question1==="School") && (
          step===4 && (
            <Step
            question='What are you preparing for?'
            options={['Olympiad', 'IIT-JEE', 'NEET', 'Boards', 'School Examinations']}
            handleOptionClick={(option) => handleOptionClick4('question4', option)}
            />
          )
        )
      }

      {
        formData.question1=="Graduation" && (
          step===2 && (
            <Step
          question="What is your stream?"
          options={['B.Tech', 'B.Sc', 'B.A', 'B.Com', 'BCA', 'BBA', 'MBBS', 'Other']}
          handleOptionClick={(option) => handleOptionClick('question2', option)}
        />
          )
        )
      }
      {
        (formData.question2==="B.Tech") && (
          step===3 && (
            <Step
          question="What is your specialization?"
          options={['Computer Science and Related Streams', 'Mechanical', 'Electrical', 'Electronics', 'Chemical', 'Other']}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
          )
        )
      }
      {
        (formData.question2==="B.Sc") && (
          step===3 && (
            <Step
          question="What is your specialization?"
          options={['Maths', 'Physics','Chemistry','Astronomy', 'Biology','Arts']}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
          )
        )
      }
      {
       (formData.question1==="Graduation") && (formData.question2!="B.Sc") && (formData.question2!="B.Tech")  && (
          step===3 && (
            <Step
          question="Do you want to learn coding?"
          options={['Yes, I want to learn coding', `No, I don't want to learn coding`]}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
          )
        )
      }

      {
        formData.question1=="Postgraduation" && (
          step===2 && (
            <Step
          question="What is your stream?"
          options={['M.Tech', 'M.Sc', 'M.A', 'M.Com', 'MCA', 'MBA', 'PHD', 'Other']}
          handleOptionClick={(option) => handleOptionClick('question2', option)}
        />
          )
        )
      }
      {
        (formData.question2==="M.Tech") && (
          step===3 && (
            <Step
          question="What is your specialization?"
          options={['Computer Science and Related Streams', 'Mechanical', 'Electrical', 'Electronics', 'Chemical', 'Other']}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
          )
        )
      }
      {
        (formData.question2==="M.Sc") && (
          step===3 && (
            <Step
          question="What is your specialization?"
          options={['Maths', 'Physics','Chemistry','Astronomy', 'Biology','Arts']}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
          )
        )
      }
      {
        (formData.question1==="Postgraduation") && (formData.question2!="M.Sc") && (formData.question2!="M.Tech")  && (
          step===3 && (
            <Step
          question="Do you want to learn coding?"
          options={['Yes, I want to learn coding', `No, I don't want to learn coding`]}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
          )
        )
      }

      {
        formData.question1=="Unenrolled" && (
          step===2 && (
            <Step
          question="When did you graduate?"
          options={['2023', '2022', '2021', '2020', 'Before 2020']}
          handleOptionClick={(option) => handleOptionClick('question2', option)}
        />
          )
        )
      }
      {
        (formData.question1=="Unenrolled") && (
          step===3 && (
            <Step
          question="What was your specialization?"
          options={['B.Tech', 'B.Sc', 'B.A', 'B.Com', 'BCA', 'BBA', 'MBBS','M.Tech', 'M.Sc', 'M.A', 'M.Com', 'MCA', 'MBA', 'PHD','School Passout', 'Other']}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
          )
        )
      }

      {
        (formData.question1!="School") && (
          step===4 && (
            <Step
            question='What are you preparing for?'
            options={['UPSC', 'State PCS', 'Other Govt. Exams', 'NEET UG', 'NEET PG', 'GATE', 'IIT JAM', 'Coding Jobs', 'Other']}
            handleOptionClick={(option) => handleOptionClick4('question4', option)}
            />
          )
        )
      }
      

      {/* Submit Button */}
      {step === 5 && (
        <div className="mt-5 text-center">
          <button
            onClick={() => {
              localStorage.setItem("userInfo", JSON.stringify(formData));
              navigate('/signup')
            }
            }
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-600 transition-all"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
    </>
  );
};

const Step: React.FC<StepProps> = ({ question, options, handleOptionClick }) => {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold mb-4 font-TitilliumWeb">{question}</h2>
      <div className="grid grid-cols-1 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="px-4 py-2 bg-white hover:bg-gray-200 border rounded-md transition-all"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Form;

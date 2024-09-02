import React, { useState } from 'react';

interface FormData {
  question1: string;
  question2: string;
  question3: string;
}

interface StepProps {
  question: string;
  options: string[];
  handleOptionClick: (option: string) => void;
}

const Form: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    question1: '',
    question2: '',
    question3: '',
  });

  const handleOptionClick = (question: keyof FormData, option: string): void => {
    setFormData({
      ...formData,
      [question]: option,
    });
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const progressBarWidth = `${(step / 3) * 100}%`;

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow-md rounded-md">
      {/* Progress Bar */}
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: progressBarWidth }}
        ></div>
      </div>

      {/* Question Steps */}
      {step === 1 && (
        <Step
          question="What is your favorite color?"
          options={['Red', 'Blue', 'Green', 'Yellow']}
          handleOptionClick={(option) => handleOptionClick('question1', option)}
        />
      )}
      {step === 2 && (
        <Step
          question="What is your favorite animal?"
          options={['Dog', 'Cat', 'Bird', 'Fish']}
          handleOptionClick={(option) => handleOptionClick('question2', option)}
        />
      )}
      {step === 3 && (
        <Step
          question="What is your favorite food?"
          options={['Pizza', 'Burger', 'Pasta', 'Sushi']}
          handleOptionClick={(option) => handleOptionClick('question3', option)}
        />
      )}

      {/* Submit Button */}
      {step === 3 && (
        <div className="mt-5 text-center">
          <button
            onClick={() => alert(JSON.stringify(formData, null, 2))}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

const Step: React.FC<StepProps> = ({ question, options, handleOptionClick }) => {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="grid grid-cols-1 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border rounded-md transition-all"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Form;

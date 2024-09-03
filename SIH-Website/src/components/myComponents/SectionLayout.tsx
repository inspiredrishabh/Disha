import React from 'react';

interface SectionLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
  imageSrc: string;
  reverse?: boolean;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ header, content, imageSrc, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-around mb-20 md:mb-20 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex flex-col w-full md:w-1/2 px-6 md:px-12 gap-6 md:gap-12 pt-6 md:pt-10">
        {header}
        {content}
      </div>
      <div className="w-full md:w-1/3 md:pr-2 mt-6 md:mt-0">
        <img src={imageSrc} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default SectionLayout;

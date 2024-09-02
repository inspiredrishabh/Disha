// SectionLayout.tsx
import React from 'react';

interface SectionLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
  imageSrc: string;
  reverse?: boolean;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ header, content, imageSrc, reverse }) => {
  return (
    <div className={`flex flex-row items-center justify-around mb-20 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex flex-col w-1/2 px-12 gap-12 pt-10">
        {header}
        {content}
      </div>
      <div className="w-1/3 pr-2">
        <img src={imageSrc} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default SectionLayout;
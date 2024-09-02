// SectionContent.tsx
import React from 'react';

interface SectionContentProps {
  items: { title: string; description: string }[];
}

const SectionContent: React.FC<SectionContentProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h2 className="text-3xl font-TitilliumWeb font-semibold">{item.title}</h2>
          <p className="text-xl">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionContent;
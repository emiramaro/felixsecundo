import React from 'react';
import Link from 'next/link';
import { ResearchProject } from '@/types';

interface ResearchProjectCardProps {
  project: ResearchProject;
}

export const ResearchProjectCard: React.FC<ResearchProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/research/${project.id}`} className="block transition-transform hover:scale-105">
      <div className="bg-white p-4 rounded-lg shadow h-full flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
        <div className="mt-4 text-sm text-primary font-medium">Learn more</div>
      </div>
    </Link>
  );
};


import React, { useState } from 'react';
import { ResearchProject } from '@/types';
import { ResearchProjectCard } from './ResearchProjectCard';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ResearchProjectCarouselProps {
  projects: ResearchProject[];
}

export const ResearchProjectCarousel: React.FC<ResearchProjectCarouselProps> = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {currentProjects.map((project) => (
          <ResearchProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        <Button variant="outline" size="icon" onClick={prevPage}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextPage}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      {/* <div className="text-center mt-2">
        Page {currentPage + 1} of {totalPages}
      </div> */}
    </div>
  );
};


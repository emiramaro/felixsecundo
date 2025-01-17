import { notFound } from 'next/navigation';
import Link from 'next/link';
import { researchProjects } from '@/data/research';
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/ResearchImageGallery";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResearchProjectPage({ params }: { params: { id: string } }) {
  const project = researchProjects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{project.description}</p>
                {project.images && project.images.length > 0 && (
                  <ImageGallery images={project.images} />
                )}
                <div className="prose max-w-none mt-6">
                  <p>{project.details}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/#research">
                <Button variant="outline">Back to Research & Tools</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


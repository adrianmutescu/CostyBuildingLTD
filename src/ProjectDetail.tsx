import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  location: string;
  fullDescription: string;
  progressImages: string[];
}

interface ProjectDetailProps {
  projects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '0', 10);
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link to="/#projects" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <Link to="/#projects" className="inline-flex items-center text-gray-700 hover:text-blue-600">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Project Hero */}
      <div className="relative h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex items-center mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-gray-700 text-lg mb-12">{project.fullDescription}</p>
          
          <h2 className="text-3xl font-bold mb-6">Project Progress</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.progressImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={image}
                  alt={`${project.title} - Progress ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Costy Building LTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
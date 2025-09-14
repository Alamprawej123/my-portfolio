// src/components/Projects.jsx
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Includes user authentication, payment integration, and admin panel.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects with drag-and-drop functionality and real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather for any location with beautiful UI.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1065&q=80",
      tags: ["JavaScript", "API", "CSS"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some projects which I have worked. Each project has taught me something new and improved my coding skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
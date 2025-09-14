// src/components/Skills.jsx
const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'MongoDB', level: 70 },
    { name: 'Git/Github', level: 80 },
    { name: 'UI/UX Design', level: 70 },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My <span className="text-indigo-600">Skills</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are my technical skills which i use in my projects. 
          I'm always learning new technologies to improve myself.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">{skill.name}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase"],
  Tools: ["Git", "VS Code", "Figma", "Docker", "Vercel"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
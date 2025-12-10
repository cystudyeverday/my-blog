export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Introduction
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A little about myself
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                About Me
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm a passionate developer and creative thinker who loves building
                meaningful digital experiences. With a background in web development and
                a keen eye for design, I enjoy bringing ideas to life through code.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'UI/UX Design'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Interests
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, reading about
                design trends, and contributing to open-source projects. I believe in
                continuous learning and staying curious about the ever-evolving world of
                technology.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


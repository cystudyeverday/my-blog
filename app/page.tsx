import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              Welcome to My Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A place where I share my thoughts, projects, and experiences
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/introduction"
              className="px-8 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Learn More About Me
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View My Projects
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">👋</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Introduction
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get to know me, my background, and my journey
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore my portfolio of work and creative projects
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Contact
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Let's connect and collaborate on exciting opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


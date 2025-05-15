export default function ComingSoon() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Coming Soon</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6 space-y-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
            This project is maintained and developed by <a href="https://github.com/danielvici" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">me</a> as an individual developer. 
            New functions and tools will be added as time and inspiration allow.
            </p>
            
            <p className="text-gray-300 mb-6">
            Since I develop this project in my free time, there is no fixed schedule for new features. 
            Instead, I add new tools and functions when I have a good idea and the time allows.
            </p>

            <p className="text-gray-300 mt-8">
              If you have suggestions for new tools or features, you can submit them via GitHub 
              or contact <a href="https://x.com/danielvici123" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">me</a> directly. I welcome any feedback and suggestions!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 
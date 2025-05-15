export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">About</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6 space-y-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Welcome to my Tool Website! This Website provides a collection of useful web-based tools 
              designed to help you with various tasks. All tools run directly in your browser, ensuring 
              your data stays private and secure. This Website is hosted on Vercel and Open Source. 
              The Source Code is available on GitHub (link below).
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-6 mb-4">Features</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Password Generator - Create secure passwords with customizable options</li>
              <li>Image Converter - Convert images between different formats</li>
              <li>Website Bookmarks - Save and organize your favorite websites</li>
              <li>More tools coming soon!</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-6 mb-4">Privacy</h2>
            <p className="text-gray-300 mb-6">
              All tools operate entirely in your browser. No data is sent to external servers 
              (except for explicitly shared URLs in bookmarks). Your data remains on your device 
              and is stored only in your browser&apos;s local storage.
            </p>

            <h2 className="text-2xl font-bold text-white mt-6 mb-4">Developer</h2>
            <div className="bg-zinc-900 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                This website is developed and maintained by <a href="https://github.com/danielvici" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">danielvici123</a>. If you find these tools helpful, 
                you can support the development or check out other projects through the links below:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href="https://github.com/danielvici/tool-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                
                <a
                  href="https://ko-fi.com/danielvici123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-[#13C3FF] text-white rounded-md hover:bg-[#00b8f5] transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
                  </svg>
                  Buy me a coffee
                </a>

                <a
                  href="https://x.com/danielvici123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
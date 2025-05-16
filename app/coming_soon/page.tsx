export default function ComingSoon() {
  return (
    <main className="min-h-screen p-8 pt-24">
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

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Planned Features</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Text Tools
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Text Case Converter</li>
                      <li>Lorem Ipsum Generator</li>
                      <li>String Hash Generator</li>
                    </ul>
                  </li>
                  <li>Development Tools
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>JSON Formatter</li>
                      <li>Base64 Encoder/Decoder</li>
                      <li>URL Encoder/Decoder</li>
                    </ul>
                  </li>
                  <li>Image Tools
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Image Resizer</li>
                      <li>Image Format Converter</li>
                      <li>Image Compression</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-800">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Want to suggest a feature?</h3>
                <p className="text-gray-300">
                  Feel free to suggest new tools or features through the GitHub repository or contact <a href="https://x.com/danielvici123" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">me</a> directly. 
                  I welcome any feedback and suggestions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
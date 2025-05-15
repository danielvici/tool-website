export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">About</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Welcome to our Tool Website! This platform provides a collection of useful web-based tools 
              designed to help you with various tasks. All tools run directly in your browser, ensuring 
              your data stays private and secure.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-6 mb-4">Features</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Password Generator - Create secure passwords with customizable options</li>
              <li>Image Converter - Convert images between different formats</li>
              <li>Website Bookmarks - Save and organize your favorite websites</li>
              <li>More tools coming soon!</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-6 mb-4">Privacy</h2>
            <p className="text-gray-300">
              All tools operate entirely in your browser. No data is sent to external servers 
              (except for explicitly shared URLs in bookmarks). Your data remains on your device 
              and is stored only in your browser&apos;s local storage.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 
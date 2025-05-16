export default function Changelog() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Changelog</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6 space-y-8">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Version 0.2.0</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Added Settings and Changelog pages</li>
                  <li>Color Converter added</li>
                  <li>Enhanced QR code generator</li>
                  <li>Currency converter added</li>
                  <li>Number Converter added</li>
                  <li>Scientific Calculator added</li>
                  <li>Removed bookmarked websites feature</li>
                  <li>Updated navigation structure</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Version 0.1.0</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Initial release</li>
                  <li>Added basic tools: Password Generator, QR Code Generator</li>
                  <li>Added converters: Number, Color, Currency</li>
                  <li>Added Scientific Calculator</li>
                  <li>Basic website layout and navigation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
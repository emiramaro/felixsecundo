import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Felix Lab</h3>
            <p className="text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
              Advancing pancreatic cancer research through innovative approaches and collaborative efforts.
            </p>
          </div>
          <div className="text-center w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">601 N. Caroline St, JHOC 3250</p>
            <p className="text-sm text-gray-400">Baltimore, MD 21287</p>
            <p className="text-sm text-gray-400 mt-2">info@felixlab.org</p>
            <p className="text-sm text-gray-400">(123) 456-7890</p>
          </div>
          <div className="text-center md:text-right w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Felix Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


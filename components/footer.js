import react from "react";

const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return (
        // <div className="container mx-auto flex flex-col bottom-0 items-center">
        //     <p className="text-center text-sm text-gray-700 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4">
        //             © {currentYear} Utkristi AI Labs — Made with 🤍 by
        //             <a
        //                 href="https://utkristi-io.netlify.app"
        //                 className="text-primary ml-1"
        //                 rel="noopener noreferrer"
        //                 target="_blank">
        //                  Utkristi.io
        //             </a>
        //     </p>
        // </div>
        <footer className="bg-black rounded-lg shadow dark:bg-black m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex items-center sm:justify-between">
          <a href="/" className="flex flex-wrap items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/logo-dark.png" className="h-8" alt="Utkristi AI Labs" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap gradient-title">Utkristi AI Labs</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6 text-white">About</a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline me-4 md:me-6 text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="/license" className="hover:underline me-4 md:me-6 text-white">Licensing</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline text-white">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {currentYear} Utkristi AI Labs — Made with 🤍 by
        <a
            href="https://utkristi-io.netlify.app"
            className="text-primary ml-1"
            rel="noopener noreferrer"
            target="_blank">
             Utkristi.io
        </a>
        </span>
      </div>
    </footer>
    );
}

export default Footer;
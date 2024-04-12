import Link from 'next/link';
import React from 'react'

const Contact = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Posjetite nas
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4831.210175285545!2d18.997743266709854!3d45.35279852954131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c8fb963e34a33%3A0x1b603b27797e96a2!2sUl.%20Lokvanjski%20sokak%206%2C%2032000%2C%20Vukovar!5e0!3m2!1shr!2shr!4v1712951137165!5m2!1shr!2shr" width="600" 
            height="450"  
            loading="lazy">
            </iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Naša adresa
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Lokvanjski sokak 6, Vukovar
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Radno vrijeme
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Ponedjeljak - Petak: 07:30h - 19:30h
                  </p>
                  <p className="mt-1 text-gray-600">Subota: 07:30h - 13:00h</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Kontakt</h3>
                  <p className="mt-1 text-gray-600">
                    Email: prodaja@zivic-elektro.com
                  </p>
                  <p className="mt-1 text-gray-600">Telefon: +385 32 442-992</p>
                </div>
                <span className="inline-flex mx-4">
                  <Link className="text-blue-500 animate-pulse" href={'/'}>
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </Link>
                  <Link className="ml-4 text-orange-500 animate-pulse" href={''}>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
import { Button } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function not_found() {
  return (
    <section className="bg-transparent py-7 min-h-[70vh]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="gradient-title mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-200">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
            <Link href="/">
            <Button className="inline-flex text-white bg-black hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">
              Back to Homepage
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

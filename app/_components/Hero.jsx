import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className="bg-gay-50 flex flex-col items-center">
        <div className="mx-auto max-w-screen-md px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="mx-auto text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    Track Your Expenses, Empower Your Future
                </h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Gain clarity and control over your finances with effortless expense tracking. 
                    Set budgets, monitor spending, and achieve your financial goals—all in one place.
                </p>
                <div className="flex justify-center">
                    <a
                        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-indigo-700 hover:border-indigo-700"
                        href="#"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
        <Image src={'/dash.webp'} alt='Expense Tracker'
        width={1000}
        height={600}
        className="mt-5 rounded-xl border-2 shadow-lg"
        />
    </section>
  )
}

export default Hero
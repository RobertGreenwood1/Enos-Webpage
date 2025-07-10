'use client';

import { AnimatedCounter } from './AnimatedCounter';

export function Statistics() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">
            We're in the business of growing businesses.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <AnimatedCounter
              value={90}
              duration={2000}
              suffix="%"
              className="text-6xl font-bold text-blue-200 mb-4"
            />
            <p className="text-lg text-blue-100">
              of users say Enos helps them stay more connected⁵
            </p>
          </div>

          <div>
            <AnimatedCounter
              value={4.3}
              duration={3000}
              decimals={1}
              className="text-6xl font-bold text-blue-200 mb-4"
            />
            <p className="text-lg text-blue-100">
              The average number of apps used by teams in Enos⁶
            </p>
          </div>

          <div>
            <AnimatedCounter
              value={87}
              duration={2000}
              suffix="%"
              className="text-6xl font-bold text-blue-200 mb-4"
            />
            <p className="text-lg text-blue-100">
              of users say Enos helps them collaborate more efficiently⁶
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

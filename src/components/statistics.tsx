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
            <div className="text-6xl font-bold text-blue-200 mb-4">90%</div>
            <p className="text-lg text-blue-100">
              of users say Enos helps them stay more connected⁵
            </p>
          </div>

          <div>
            <div className="text-6xl font-bold text-blue-200 mb-4">4.3</div>
            <p className="text-lg text-blue-100">
              The average number of apps used by teams in Enos⁶
            </p>
          </div>

          <div>
            <div className="text-6xl font-bold text-blue-200 mb-4">87%</div>
            <p className="text-lg text-blue-100">
              of users say Enos helps them collaborate more efficiently⁶
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

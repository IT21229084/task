import React from 'react'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-white to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* first View */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Embark on a cosmic journey with SpaceLink.{' '}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Explore the Wonders of SpaceLink!
          </h1>
          <div className="mt-4 relative animate-spin-slow">
            <img
              width="94"
              height="94"
              src="https://img.icons8.com/3d-fluency/94/globe-asia.png"
              alt="globe-asia"
            />
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-500 font-bold">
            Dive into the depths of space with our curated collection of images, videos, and data. Embark on a cosmic journey to explore Earth, Mars, and the wonders of the universe.
          </p>
        </div>

      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-white to-[#9089fc] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Welcome section */}
      <div className="relative overflow-hidden bg-gray-50 mb-20">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Welcome to the SpaceLink
              </h1>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img src="https://cdn.pixabay.com/photo/2023/08/26/18/01/planet-8215532_1280.png" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_1280.jpg" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://cdn.pixabay.com/photo/2020/06/19/22/33/wormhole-5319067_960_720.jpg" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://cdn.pixabay.com/photo/2011/12/14/12/11/astronaut-11080_960_720.jpg" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://cdn.pixabay.com/photo/2024/02/21/14/40/ai-generated-8587832_960_720.jpg" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://cdn.pixabay.com/photo/2024/04/21/13/49/ai-generated-8710647_1280.png" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239_1280.jpg" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="#" className="inline-block rounded-md border border-transparent bg-blue-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                    Explore Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
     
      <section className="relative h-screen overflow-hidden mb-20">
        <img src="https://www.nasa.gov/wp-content/uploads/2024/05/hubble-ic776-potw2418a.jpg?resize=2000,2000" alt="Cover Image" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center text-white w-1/2">
          <div className="max-w-lg mx-auto p-4 text-left">
            <h1 className="text-4xl font-bold mb-4">Explore the Universe from your Inbox</h1>
            <p className="text-lg mb-4">Stay up-to-date on the latest news from SpaceLink–from Earth to the Moon, the Solar System and beyond.</p>
            <p className="text-lg">Discover exciting developments in aerospace areas such as space exploration, astrophysics, planetary science, and more.</p>
          </div>
        </div>
      </section>
        
      {/* Aerospace Collections section */}
      <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-4xl font-bold text-gray-900">Aerospace Collections</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://cdn.pixabay.com/photo/2015/03/26/18/36/rocket-launch-693233_960_720.jpg" alt="Rocket Launch" class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Rocket Launch
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Witness the breathtaking moments of rocket launches into space.</p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://cdn.pixabay.com/photo/2017/03/28/22/55/night-photograph-2183637_960_720.jpg" alt="Night Sky Photography" class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Night Sky Photography
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Explore stunning photographs of celestial wonders captured during the night.</p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://cdn.pixabay.com/photo/2022/12/28/09/30/cosmos-7682504_960_720.jpg" alt="Cosmos Exploration" class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Cosmos Exploration
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Embark on a journey through the cosmos with stunning images of galaxies, nebulas, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* newsletter */}
      <div className="relative overflow-hidden bg-gray-900 py-12 sm:py-16 lg:py-20 mt-20 mb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay Updated with SpaceLink</h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Subscribe to our newsletter for the latest news, updates, and discoveries from the cosmos.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">Weekly Updates</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Stay informed with our weekly newsletter featuring the latest space discoveries and events.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">No Spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  We value your privacy. You'll only receive relevant updates and announcements from SpaceLink.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default Home
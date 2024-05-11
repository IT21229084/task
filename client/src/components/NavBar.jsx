import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Apod', href: '/apod', current: false },
    { name: 'Epic', href: '/epic', current: false },
    { name: 'Mars', href: '/mars', current: false },
  ]
  return (

    <header className="absolute inset-x-0 top-0 z-50 -mb-10">
      {/* main nav section */}
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src="data:image/png;base64,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"></img>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-bold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* mobile view */}
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-12 w-auto" src="data:image/png;base64,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"></img>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

    </header>

  )
}

export default NavBar
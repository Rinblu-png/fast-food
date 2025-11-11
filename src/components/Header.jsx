import React from 'react'

const Header = () => {
  return (
    <>
      <header className="bg-linear-to-r from-sky-200 to-sky-300 shadow-md sticky top-0 z-10 w-full rounded-b-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">FAST FOOD</h1>
            <p className="text-sm text-gray-600">hi Nattapat</p>
          </div>

          {/* Nav */}
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-col sm:flex-row justify-center sm:justify-end items-center sm:space-x-10 space-y-2 sm:space-y-0 text-gray-800 font-medium">
              <li className="transition-all duration-200 hover:text-sky-900 hover:underline underline-offset-4 hover:scale-105">
                <a href="#">Home</a>
              </li>
              <li className="transition-all duration-200 hover:text-sky-900 hover:underline underline-offset-4 hover:scale-105">
                <a href="#">About</a>
              </li>
              <li className="transition-all duration-200 hover:text-sky-900 hover:underline underline-offset-4 hover:scale-105">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header

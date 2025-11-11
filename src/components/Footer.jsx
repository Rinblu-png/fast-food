import React from 'react'
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-gray-200 py-4">
      <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="font-semibold text-lg mb-3">FAST FOOD</h2>
          <p className="text-sm leading-relaxed">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus ad non necessitatibus, nostrum accusamus illum similique esse, nesciunt voluptates voluptatem! Nostrum necessitatibus praesentium quaerat id facilis quis commodi natus.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">About</h2>
          <p className="text-sm ">Name: Nattapat Meeseangpan</p>
          <p className="text-sm">NickName: Rin</p>
          <p className="text-sm">For Works Master Mark</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Contact</h2>
          <p className="text-sm">Instagram:  BLURIN.GG</p>
          <p className="text-sm">Line: blurin.gg</p>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer
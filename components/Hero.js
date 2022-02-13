import Link from 'next/link'

export default function Hero() {
  return (
    <div className="my-2 mx-auto max-w-7xl px-4 sm:mt-10 md:mt-40 text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">Boyboy Online Restaurant</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl">Modern eCommerce</p>
      </h1>
      <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        eCommerce Revolution.
      </h2>
     </div>
  )
}

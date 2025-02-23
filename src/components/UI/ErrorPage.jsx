import { NavLink } from "react-router-dom"

export const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-400 mt-2 text-center">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <NavLink to="/" className="mt-6">
        <button className="bg-[#202020] cursor-pointer hover:bg-[#161616] text-white px-6 py-2 rounded-lg transition-all">
          Go Back Home
        </button>
      </NavLink>
    </div>
    )
  }
  
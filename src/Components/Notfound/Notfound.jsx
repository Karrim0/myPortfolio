import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import React from 'react'
export default function Notfound() {
  return <>
        <div className="flex flex-col items-center justify-center     text-center px-4 fixed top-0 left-0 right-0 bottom-0 z-999999" >
      <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest">404</h1>
      <p className="mt-6 text-2xl font-semibold text-gray-700">
        Oops! Page not found.
      </p>
      <p className="mt-2 text-gray-500">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  </>
}

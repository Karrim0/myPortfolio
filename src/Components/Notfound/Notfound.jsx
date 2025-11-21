import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 fixed inset-0 z-50 bg-background">
      <h1 className="text-9xl font-extrabold text-foreground tracking-widest">
        404
      </h1>
      <p className="mt-6 text-2xl font-semibold text-foreground">
        Oops! Page not found.
      </p>
      <p className="mt-2 text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
import { ArrowUp } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center">
      <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} Kareem. All rights reserved</p>
    <a className="ms-3 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors" href="#hero">
        <ArrowUp size={16}/>
    </a>
    </footer>
  );
}

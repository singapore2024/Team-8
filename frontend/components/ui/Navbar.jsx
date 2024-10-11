import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-green-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-green-600">
                SG Community Garden
            </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/infopage" className="text-gray-600 hover:text-green-500">
              Learn About Plants
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-green-500">
              Community
            </Link>
            <Link href="https://www.reddit.com/r/sg_community_gardens" className="text-gray-600 hover:text-green-500">
              Reddit
            </Link>
            <Link href="https://www.reddit.com/r/plantclinic" className="text-gray-600 hover:text-green-500">
              Plant help?
            </Link>
          </div>
          <Link href="/infopage">
            <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
          </Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

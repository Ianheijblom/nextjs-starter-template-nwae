import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (

    <header className="fixed w-full top-0 z-50 pt-20 bg-white shadow-sm">
      <nav className="fixed w-full top-0 z-40 bg-gray-50 shadow-sm">
        <div className="container mx-auto flex justify-between px-6 py-2 items-center">
            <div>
                <ul>
                    <li className="inline-block mr-6">
                        <Link href="mailto:talent@bouwbureaunederland.nl" className="text-sm text-gray-600 hover:text-gray-900 transition">talent@bouwbureaunederland.nl</Link>   
                    </li>
                    <li className="inline-block mr-6">
                        <Link href="tel:+31 35 80 80 207" className="text-sm text-gray-600 hover:text-gray-900 transition">+31 35 80 80 207</Link>   
                    </li>
                </ul>
            </div>
            <div>
                <button className="transition duration-500 ease-in-out transform hover:scale-105 bg-gray-900 text-white px-8 py-3 rounded-full font-medium text-sm bg-gradient-to-r from-gray-900 to-gray-700  ">Ontdek Vacatures</button>

            </div>
        </div>
      </nav>

      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="img\BouwBureauNederland.png"
                alt="Bouwbureau Nederland Logo"
                width={170}
                height={40}
                priority
              />
            </Link>
          </div>

          <div>
            <nav className="hidden md:flex items-center space-x-20 ">
            <Link href="/" className="text-gray-700 hover:text-gray-950 transition ">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-950 transition ">Recruitment voor Bedrijven</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-950 transition ">Recruitment voor Professionals</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-950 transition ">Contact</Link>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

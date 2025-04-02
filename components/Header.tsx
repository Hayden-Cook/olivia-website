"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Olivia Cook: Digital Marketing</div>
      <div className="relative">
        <Menu>
          {({ open }) => (
            <div>
              <MenuButton
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md bg-gray-800 text-white"
              >
                {isOpen ? (
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                )}
              </MenuButton>
              {open && (
                <MenuItems className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <MenuItem>
                    {({ active }) => (
                      <Link href="/" className={`block px-4 py-2 text-gray-800 ${active ? 'bg-gray-100' : ''} hover:bg-gray-200`}>
                        Home
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link href="/about" className={`block px-4 py-2 text-gray-800 ${active ? 'bg-gray-100' : ''} hover:bg-gray-200`}>
                        About
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link href="/contact" className={`block px-4 py-2 text-gray-800 ${active ? 'bg-gray-100' : ''} hover:bg-gray-200`}>
                        Contact
                      </Link>
                    )}
                  </MenuItem>
                </MenuItems>
              )}
            </div>
          )}
        </Menu>
      </div>
    </header>
  );
};

export default Header;
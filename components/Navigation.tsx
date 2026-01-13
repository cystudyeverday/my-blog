'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'antd';

const navItems = [
  { key: '/introduction', label: 'Introduction' },
  { key: '/projects', label: 'Projects' },
  { key: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-red-650 to-red-700 shadow-2xl border-b-4 border-yellow-400" style={{ background: 'linear-gradient(to right, #dc2626, #b91c1c, #991b1b)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl md:text-2xl font-extrabold text-white hover:text-yellow-300 transition-all duration-300 cursor-pointer drop-shadow-lg transform hover:scale-105">
            Cyporteveryday&apos;s Blog
          </Link>
          <div className="flex items-center" style={{ minWidth: 200 }}>
            <Menu
              mode="horizontal"
              selectedKeys={[pathname]}
              items={navItems.map(item => ({
                ...item,
                label: <Link href={item.key} className="font-bold text-base">{item.label}</Link>,
              }))}
              className="border-none bg-transparent mcd-navbar"
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                backgroundColor: 'transparent',
              }}
              theme="dark"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}


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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
            My Blog
          </Link>
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            items={navItems.map(item => ({
              ...item,
              label: <Link href={item.key}>{item.label}</Link>,
            }))}
            className="border-none bg-transparent"
            style={{ minWidth: 300, justifyContent: 'flex-end' }}
          />
        </div>
      </div>
    </nav>
  );
}


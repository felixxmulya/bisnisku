import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    const links = [
        { href: "#", label: "Industry" },
        { href: "#", label: "Customers" },
        { href: "#", label: "Financial" },
        { href: "#", label: "Company" },
    ];

    return (
        <nav className="z-50 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <div className="text-blue-700 font-bold text-2xl">bisnisKu</div>
                    <div className="hidden md:flex space-x-6">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className="text-gray-500 font-medium hover:text-blue-700">
                            {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="#" className="text-gray-500 font-medium hover:text-blue-700">Masuk</Link>
                    <Link href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Daftar gratis
                    </Link>
                </div>
            </div>
        </nav>
    );
}
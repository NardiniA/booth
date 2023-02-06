"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    link: {
        href: string,
        text: string,
    },
    handleClick: any,
};

const NavLink: React.FC<NavLinkProps> = ({ link: { href, text }, handleClick }) => {
    const pathname = usePathname();
    const current = href === pathname ? "current" : "";

    return (
        <li className={current}>
            <Link href={href} className="smoothscroll" onClick={handleClick}>
                {text}
            </Link>
        </li>
    );
}

export default NavLink
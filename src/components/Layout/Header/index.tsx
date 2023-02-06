"use client";

import React, { useState, useEffect, FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Logo from "./Logo";
import Nav from "./Nav";
import HeaderBtn from "./HeaderBtn";

const Header: FC = () => {
    const pathname = usePathname();
    const [triggerHeight, setTriggerHeight] = useState(500);
    const [sticky, setSticky] = useState(false);
    const [offset, setOffset] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [open, setOpen] = useState(false);
    const isDark = pathname === "/404" || pathname === "/500";

    const handleScroll = () => {
        if (window !== undefined) {
            let loc = window.scrollY;

            if (loc > triggerHeight) setSticky(true);
            else setSticky(false);

            if (loc > triggerHeight + 20) {
                setOffset(true);
            } else {
                setOffset(false);
            }

            if (loc > triggerHeight + 150) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }
    };

    const handleResize = () => {
        if (window !== undefined && window.matchMedia("(max-width: 800px)").matches) {
            open === true && setOpen(false);
            document.body.classList.contains("menu-is-open") &&
                document.body.classList.remove("menu-is-open");
        }
    };

    useEffect(() => {
        if (window !== undefined) {
            setTimeout(() => {
                let trigger = window.innerHeight - 170;
                const el: HTMLElement = document.querySelector("#first-section")!;
                if (el) {
                    trigger = el.offsetHeight - 170;
                }
                setTriggerHeight(trigger);
            }, 300);
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    });

    const toggle = () => {
        if (window !== undefined) {
            document.body.classList.toggle("menu-is-open");
            setOpen(!open);
        }
    };

    const handleClick = () => {
        if (window !== undefined && window.matchMedia("(max-width: 800px)").matches) {
            setOpen(!open);
            document.body.classList.toggle("menu-is-open");
        }
    };

    return (
        <header className={clsx(
            "s-header",
            sticky && "sticky",
            offset && "offset",
            scrolling && "scrolling",
            isDark && "dark-text",
        )}>
            <div className="row s-header__inner">
                <div className="s-header__block">
                    <Logo />

                    <span className={clsx("s-header__menu-toggle", open && "is-clicked")} onClick={toggle}>
                        <span>Menu</span>
                    </span>
                </div>

                <Nav handleClick={handleClick} />

                <HeaderBtn />
            </div>
        </header>
    )
}

export default Header;
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const ToTop: React.FC = () => {
    const [showToTop, setShowToTop] = useState(false);
    const pxShow = 900;

    const handleScroll = () => {
        if (window.scrollY >= pxShow) setShowToTop(true);
        else setShowToTop(false);
    };

    useEffect(() => {
        if (window.scrollY >= pxShow) setShowToTop(true);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={clsx("ss-go-top", showToTop && "link-is-visible")}>
            <Link className="smoothscroll" title="Back to Top" href="#top">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"></path>
                </svg>
            </Link>
        </div>
    );
};

export default ToTop;

import React from "react";
import Link from "next/link";
import menus from "@/config/menus.json";

const HeaderBtn = () => {
    if (!!menus?.cta)
        return (
            <div className="s-header__cta">
                <Link
                    href={menus?.cta?.href}
                    className="btn btn--stroke s-header__cta-btn smoothscroll"
                >
                    {menus?.cta?.text}
                </Link>
            </div>
        );
    return null;
};

export default HeaderBtn;

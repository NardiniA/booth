import React from "react";
import Link from "next/link";

const Links: React.FC<{ links: Array<{
    text: string,
    href: string,
}>}> = ({ links }) => {
    return (
        <ul className="s-footer__site-links">
            {links &&
                links.map(({ text, href }, index) => (
                    <li key={text + "footer__link" + index}>
                        <Link
                            href={href}
                            className="smoothscroll"
                            title="intro"
                            passHref
                        >
                            {text}
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default Links;

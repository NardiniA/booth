import React from 'react';
import siteConfig from "@/config/site.config.json";
import Link from 'next/link';
import Icon from '@/components/Icon';

const Social: React.FC = () => {
    return (
        <ul className="s-footer__social">
            {siteConfig?.social &&
                siteConfig?.social?.map(({ text, href, icon }, index) => (
                    <li key={text + "social_footer" + index}>
                        <Link href={href}>
                            <Icon name={icon} type="logo" />
                            <span className="u-screen-reader-text">{text}</span>
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default Social
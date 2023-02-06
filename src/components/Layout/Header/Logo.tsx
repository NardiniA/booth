import React, { FC } from 'react';
import Link from "next/link";
import siteConfig from "@/config/site.config.json";

const Logo: FC = () => {
  return (
      <div className="s-header__logo">
          <Link href="/" className="logo" title={siteConfig.logoText}>
              <img
                  src={siteConfig?.baseImageURL + siteConfig?.logo}
                  alt={siteConfig.logoText}
              />
          </Link>
      </div>
  );
}

export default Logo;
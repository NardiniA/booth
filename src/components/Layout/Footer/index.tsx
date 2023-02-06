import React from 'react';
import clsx from "clsx";
import footer from "@/config/footer.json";
import ToTop from './ToTop';
import Subscribe from './Subscribe';
import Bottom from "./Bottom";

const Footer = () => {
  return (
      <footer
          className={clsx(
              "s-footer footer",
              !footer.showSubscribe && "no-subscribe"
          )}
      >
          {footer.showSubscribe && <Subscribe footer={footer?.subscribe} />}

          {footer?.main && <Bottom footer={footer?.main} />}

          <ToTop />
      </footer>
  );
}

export default Footer
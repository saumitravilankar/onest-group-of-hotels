"use client";

import { getStrapiMedia } from "@/utils/helpers";
import Link from "next/link";
import { Parallax } from "react-parallax";

const ParallaxBanner = ({ blockData }) => {
  const { cta, head, image } = blockData;
  return (
    <Parallax
      strength={200}
      bgImage={getStrapiMedia(image?.url)}
      bgImageAlt="amazing place"
      bgClassName="object-fit-cover"
    >
      <div className="section-bg layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto" data-aos="fade">
              <div className="text-white mb-10">{head?.subHeading}</div>
              <h2 className="text-40 text-white">{head?.heading}</h2>
              <div className="d-inline-block mt-30">
                <Link
                  href={cta?.href}
                  className="button -md -blue-1 bg-white text-dark-1"
                >
                  {cta?.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxBanner;

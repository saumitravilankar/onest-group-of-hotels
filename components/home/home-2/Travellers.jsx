"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/helpers";
import { destinations3 } from "@/data/desinations";

const Travellers = ({ bodyData }) => {
  return (
    <div className="pt-40 overflow-hidden js-section-slider">
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-places-next",
          prevEl: ".js-places-prev",
        }}
        pagination={{
          el: ".js-places-pag",
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {bodyData?.map((item, index) => (
          <SwiperSlide key={item?.id}>
            <Link
              href={`/properties/${item.slug}`}
              className="citiesCard -type-2"
            >
              <div className="citiesCard__image rounded-4 ratio ratio-3:4">
                <img
                  className="img-ratio rounded-4 js-lazy"
                  src={getStrapiMedia(item?.carouselImage?.url)}
                  alt={item?.carouselImage?.alternativeText}
                />
              </div>
              <div className="citiesCard__content mt-10">
                <h4 className="text-18 lh-13 fw-500 text-dark-1">
                  {item?.title}
                </h4>
                <div className="text-14 text-light-1">
                  {Number(item?.travellers)?.toLocaleString()} travellers
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Travellers;

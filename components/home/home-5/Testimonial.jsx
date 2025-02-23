"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { testimonial3 } from "../../../data/testimonialData";
import { getStrapiMedia } from "@/utils/helpers";

const Testimonial = ({ blockData }) => {
  const { head, body } = blockData;
  return (
    <>
      <section className="section-bg layout-pt-md">
        <div className="section-bg__item col-12">
          <img src="/img/backgrounds/testimonials/bg.png" alt="image" />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{head?.heading}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {head?.subHeading}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-center pt-60 md:pt-30">
            <div className="col-xl-5 col-lg-8 col-md-11">
              <div className="overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  className="overflow-visible"
                  navigation={{
                    nextEl: ".js-review-next",
                    prevEl: ".js-review-prev",
                  }}
                  pagination={{
                    el: ".js-review-pag",
                    clickable: true,
                  }}
                >
                  {body.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="testimonials -type-2 text-center">
                        <div className="testimonials__image mb-24 md:mb-20">
                          <img
                            src={getStrapiMedia(item.image.url)}
                            alt={item.image.alternativeText}
                            width={60}
                            height={60}
                          />
                        </div>
                        <h4 className="text-16 fw-500 text-blue-1">
                          {item.company}
                        </h4>
                        <div className="fw-500 text-dark-1 mt-20">
                          {item.comment}
                        </div>
                        <div className="testimonials__author mt-40">
                          <h5 className="text-15 lh-14 fw-500">
                            {item.author}
                          </h5>
                          <div className="text-14 text-light-1 mt-5">
                            {item.position}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* start navigation and pagination */}
                <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                  <div className="col-auto">
                    <button className="d-flex items-center text-24 arrow-left-hover js-review-prev">
                      <i className="icon icon-arrow-left" />
                    </button>
                  </div>
                  {/* End .col prev */}
                  <div className="col-auto">
                    <div className="pagination -dots text-border js-review-pag" />
                  </div>
                  {/* End .col pagination */}
                  <div className="col-auto">
                    <button className="d-flex items-center text-24 arrow-right-hover js-review-next">
                      <i className="icon icon-arrow-right" />
                    </button>
                  </div>
                  {/* End .col next */}
                </div>
                {/* start navigation and pagination */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

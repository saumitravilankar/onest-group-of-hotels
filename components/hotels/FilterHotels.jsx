"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import isTextMatched from "../../utils/isTextMatched";
import { useEffect, useState } from "react";
import { getStrapiMedia, getTagClass } from "@/utils/helpers";

const FilterHotels = ({ filterOption, properties }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    setFilteredItems(
      properties.filter((property) =>
        property?.filter_options?.some(
          (filter) => filter?.value === filterOption
        )
      )
    );
  }, [filterOption]);

  // custom navigation
  function ArrowSlick(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      {filteredItems.length ? (
        filteredItems.map((item, index) => (
          <div
            className="col-xl-3 col-lg-3 col-sm-6"
            key={item?.id}
            data-aos="fade"
            data-aos-delay={index * 100}
          >
            <Link
              href={`/hotel-single-v2/${item.id}`}
              className="hotelsCard -type-1 hover-inside-slider"
            >
              <div className="hotelsCard__image">
                <div className="cardImage inside-slider">
                  <Slider
                    {...itemSettings}
                    arrows={true}
                    nextArrow={<ArrowSlick type="next" />}
                    prevArrow={<ArrowSlick type="prev" />}
                  >
                    {item?.slide_images?.map((slide, i) => (
                      <div className="cardImage ratio ratio-1:1" key={i}>
                        <div className="cardImage__content ">
                          <Image
                            width={300}
                            height={300}
                            className="rounded-4 col-12 js-lazy"
                            src={getStrapiMedia(slide.image.url)}
                            alt={slide.alt}
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>

                  {/* <div className="cardImage__wishlist">
                  <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                    <i className="icon-heart text-12" />
                  </button>
                </div> */}
                  <div className="cardImage__leftBadges">
                    {item.tabs.map((tab, index) => (
                      <div
                        key={tab.id}
                        className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${getTagClass(
                          tab.value
                        )}`}
                      >
                        {tab.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hotelsCard__content mt-10">
                <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span>{item?.title}</span>
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5">
                  {item?.address || item?.location?.location}
                </p>
                <div className="d-flex items-center mt-20">
                  <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                    {item?.ratings}
                  </div>
                  <div className="text-14 text-dark-1 fw-500 ml-10">
                    Exceptional
                  </div>
                  <div className="text-14 text-light-1 ml-10">
                    {item?.review_count} reviews
                  </div>
                </div>
                <div className="mt-5">
                  <div className="fw-500">
                    Starting from{" "}
                    <span className="text-blue-1">
                      INR {item?.starting_price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="noData-section__h20">
          <p>No Properties To Show</p>
        </div>
      )}
    </>
  );
};

export default FilterHotels;

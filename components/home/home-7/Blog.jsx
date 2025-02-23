import Link from "next/link";
import blogs from "../../../data/blogs";
import { getStrapiMedia } from "@/utils/helpers";

const Blog = ({ blockData }) => {
  const { head, body } = blockData;
  return (
    <>
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{head.heading}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {head.subHeading}
                </p>
              </div>
            </div>
          </div>
          <div className="blog-grid-1 pt-40">
            {body.slice(0, 3).map((item, index) => (
              <Link
                href={`/blog-details/${item.id}`}
                key={item.id}
                data-aos="fade"
                data-aos-delay={blogs[index].delayAnimation}
              >
                <div className="blogCard -type-3 ">
                  <div className="blogCard__image rounded-4">
                    <img
                      className="rounded-4 js-lazy"
                      src={getStrapiMedia(item.image.url)}
                      alt="image"
                    />
                  </div>
                  <div className="blogCard__content px-50 pb-30 lg:px-20 pb-20">
                    <h4 className="text-20 lg:text-18 fw-600 lh-16 text-white">
                      {item.title}
                    </h4>
                    <div className="text-15 lh-14 text-white mt-10">
                      {new Date(item.publishDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

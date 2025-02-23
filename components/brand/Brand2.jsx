import { getStrapiMedia } from "@/utils/helpers";

const Brand2 = ({ blockData }) => {
  const { tagline, clients } = blockData;
  return (
    <>
      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="text-15 lh-1">{tagline}</div>
            </div>
          </div>
          <div className="row y-gap-40 justify-between items-center pt-60 lg:pt-40 sm:pt-20">
            {clients?.map((item, i) => (
              <div className="col-md-auto col-sm-6" key={i}>
                <div className="d-flex justify-center">
                  <img
                    src={getStrapiMedia(item.image.url)}
                    alt={item.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand2;

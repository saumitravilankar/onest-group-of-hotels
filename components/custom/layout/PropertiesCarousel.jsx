import Travellers from "@/components/home/home-2/Travellers";

const PropertiesCarousel = ({ blockData }) => {
  const { head, properties } = blockData;
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">{head?.heading}</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">
                {head?.subHeading}
              </p>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                  <i className="icon icon-arrow-left" />
                </button>
              </div>
              {/* End prev */}

              <div className="col-auto">
                <div className="pagination -dots text-border js-places-pag" />
              </div>
              {/* End pagination */}

              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                  <i className="icon icon-arrow-right" />
                </button>
              </div>
              {/* End Next */}
            </div>
          </div>
          {/* End .col for navigation and pagination */}
        </div>
        {/* End .row */}

        <Travellers bodyData={properties} />
        {/* End travellers component */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default PropertiesCarousel;

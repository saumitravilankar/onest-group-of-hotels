import { getFeatureLogo } from "@/utils/helpers";

const BlockGuide = ({ blockData }) => {
  const { usps } = blockData;
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "Best Price Guarantee",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Easy & Quick Booking",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Customer Care 24/7",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "300",
    },
  ];

  return (
    <>
      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            {usps?.map((item, index) => (
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade"
                data-aos-delay={blockContent[index]?.delayAnim}
                key={item.id}
              >
                <div className="featureIcon -type-1 ">
                  <div className="d-flex justify-center">
                    <img
                      src={getFeatureLogo(item?.logo)}
                      alt="image"
                      className="js-lazy"
                    />
                  </div>
                  <div className="text-center mt-30">
                    <h4 className="text-18 fw-500">{item?.head?.heading}</h4>
                    <p className="text-15 mt-10">{item?.head?.subHeading}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlockGuide;

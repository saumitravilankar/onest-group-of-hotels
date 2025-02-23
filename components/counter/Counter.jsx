const Counter = ({ blockData }) => {
  const { counts } = blockData;
  const blockContent = [
    {
      id: 1,
      number: "4,958",
      meta: "Destinations",
      hasUnit: "",
      delayAnim: "100",
    },
    {
      id: 2,
      number: "2,869",
      meta: "Total Properties",
      hasUnit: "",
      delayAnim: "200",
    },
    {
      id: 3,
      number: "2",
      meta: "Happy customers",
      hasUnit: "M",
      delayAnim: "300",
    },
    {
      id: 4,
      number: "574,974",
      meta: "Our Volunteers",
      hasUnit: "",
      delayAnim: "400",
    },
  ];
  return (
    <>
      <section className="pt-50 pb-40 border-bottom-light">
        <div className="container">
          <div className="row justify-center text-center">
            {counts?.map((item, index) => (
              <div
                className="col-xl-3 col-6"
                key={item.id}
                data-aos="fade"
                data-aos-delay={blockContent[index]?.delayAnim}
              >
                <div className="text-40 lg:text-30 lh-13 fw-600">
                  {item?.count}
                </div>
                <div className="text-14 lh-14 text-light-1 mt-5">
                  {item?.unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;

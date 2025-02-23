import CallToActions from "@/components/common/CallToActions";
import Header3 from "@/components/header/header-3";
import DefaultFooter from "@/components/footer/footer-2";
import StepperBooking from "@/components/booking-page/stepper-booking";
import { getNavbarData } from "@/actions/data-loaders";

export const metadata = {
  title: "Hotel Booking Page || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const index = async () => {
  const navbarData = await getNavbarData();

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 navbarData={navbarData} />
      {/* End Header 1 */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking />
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;

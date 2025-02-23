import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header3 from "@/components/header/header-3";
import DefaultFooter from "@/components/footer/footer-2";
import Address from "@/components/block/Address";
import Social from "@/components/common/social/Social";
import ContactForm from "@/components/common/ContactForm";
import LocationTopBar from "@/components/common/LocationTopBar";
import { getHomePageData, getNavbarData } from "@/actions/data-loaders";

export const metadata = {
  title: "Contact || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Contact = async () => {
  const homepageData = await getHomePageData();
  const { blocks } = homepageData;
  const navbarData = await getNavbarData();

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 navbarData={navbarData} />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <div className="map-outer">
        <div className="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.018819474348!2d73.27242427462137!3d17.120581310437547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1020b786da5d%3A0x4c2b271c8105ca36!2sO&#39;NEST%20Nakshatra%20Beach%20Resort!5e0!3m2!1sen!2sin!4v1740294138862!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End map section */}

      <section className="relative container">
        <div className="row justify-end">
          <div className="col-xl-5 col-lg-7">
            <div className="map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
              <div className="text-22 fw-500">Send a message</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* End contact section form */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row x-gap-80 y-gap-20 justify-between">
            <div className="col-12">
              <div className="text-30 sm:text-24 fw-600">Contact Us</div>
            </div>
            {/* End .col */}

            <Address />
            {/* End address com */}

            <div className="col-auto">
              <div className="text-14 text-light-1">
                Follow us on social media
              </div>
              <div className="d-flex x-gap-20 items-center mt-10">
                <Social />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Address Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });

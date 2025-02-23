import dynamic from "next/dynamic";
import DefaultFooter from "@/components/footer/footer-2";
import Header3 from "@/components/header/header-3";
import Hero1 from "@/components/hero/hero-1";
import BlockGuide from "@/components/block/BlockGuide";
import Blog from "@/components/home/home-7/Blog";
import Testimonial from "@/components/home/home-5/Testimonial";
import ParallaxBanner from "@/components/banner/ParallaxBanner";
import Counter from "@/components/counter/Counter";
import FilterHotels3 from "@/components/hotels/FilterHotels3";
import Subscribe from "@/components/home/home-2/Subscribe";
import Brand2 from "@/components/brand/Brand2";
import PropertiesCarousel from "@/components/custom/layout/PropertiesCarousel";
import { getHomePageData, getNavbarData } from "@/actions/data-loaders";

const Home_1 = async () => {
  const homepageData = await getHomePageData();
  const { blocks } = homepageData;
  const navbarData = await getNavbarData();

  return (
    <>
      <Header3 navbarData={navbarData} />
      <Hero1 blockData={blocks[0]} />
      <PropertiesCarousel blockData={blocks[1]} />
      <ParallaxBanner blockData={blocks[2]} />
      <Counter blockData={blocks[3]} />
      <BlockGuide blockData={blocks[4]} />
      <FilterHotels3 blockData={blocks[5]} />
      <Testimonial blockData={blocks[6]} />
      <Brand2 blockData={blocks[7]} />
      <Blog blockData={blocks[8]} />
      <Subscribe blockData={blocks[9]} />
      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });

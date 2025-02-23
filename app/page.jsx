import Wrapper from "@/components/layout/Wrapper";
import MainHome from "./home/page";
import { getHomePageData } from "@/actions/data-loaders";

export async function generateMetadata() {
  const homepageData = await getHomePageData();
  const { title, description } = homepageData;

  return {
    title: title,
    description: description,
  };
}

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}

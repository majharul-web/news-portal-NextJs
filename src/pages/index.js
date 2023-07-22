import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
// import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";
import { useGetNewsQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";

const HomePage = () => {
  const { data, isLoading } = useGetNewsQuery(undefined, { refetchOnMountOrArgChange: true });
  const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <h3 style={{ textAlign: "center" }}>Loading...</h3>,
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta name='description' content='This is news portal of programming hero made by next-js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DynamicBanner />
      {isLoading ? <h1 style={{ textAlign: "center" }}>Loading...</h1> : <AllNews allNews={data} />}
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

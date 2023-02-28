import Head from "next/head";
import Header from "src/components/Header";
import MainSection from "src/components/MainSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bet Your Bet</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <div className="w-full text-white overflow-hidden">
        <Header />
        <MainSection />
      </div>
    </>
  );
}

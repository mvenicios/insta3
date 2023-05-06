import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Feed from "../components/Feed";
import UploadModal from "../components/UploadModal";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <Head>
        <title>Insta </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header />
      {/*Feed*/}
      <Feed />
      {/*Modal*/}
      <UploadModal />
    </div>
  );
}

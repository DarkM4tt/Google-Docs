import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import { IconButton } from "@material-tailwind/react";
import { Icon } from "@mui/material";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>

            <IconButton color="gray" variant="outlined" className=" border-0">
              <Icon>more-vert</Icon>
            </IconButton>
          </div>

          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
              <Image src="https://links.papareact.com/pju" layout="fill" />
            </div>
            <p className="text-gray-700 ml-2 mt-2 font-semibold text-sm">
              Blank
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

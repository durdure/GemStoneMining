import Head from "next/head";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <section>
      <Head>
        <title>
          Gemstone Mininge
        </title>
      </Head>
      <Header/>
      <Hero/>
    </section>
   
  );
}

import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/DataAnalysis';
import Services from '@components/DataAnalysis/Services';
import About from '@components/DataAnalysis/About';
import Testimonials from '@components/DataAnalysis/Testimonials';
import Pricing from '@components/DataAnalysis/Pricing';
import Footer from '@components/DataAnalysis/Footer';

const PageServices5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Services 5</title>
      </Head>

      <MainLayout>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} />
        <main className="services-page style-5">
          <Services />
          <About noPaddingTop />
          <Testimonials />
          <Pricing />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageServices5;
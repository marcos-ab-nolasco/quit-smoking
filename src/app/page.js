"use client";

import './globals.css';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import SilentRobbery from '../components/sections/SilentRobbery'
import HowItWorks from '../components/sections/HowItWorks';
// import Benefits from '../components/sections/Benefits';
// import Results from '../components/sections/Results';
// import ContentPreview from '../components/sections/ContentPreview';
import Transformation from '../components/sections/Transformation'
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import FormSection from '../components/sections/FormSection';
import FinalDecision from '../components/sections/FinalDecision'
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SilentRobbery />
      <HowItWorks />
      {/* <Benefits />
      <Results /> */}
      {/* <ContentPreview /> */}
      <Transformation />
      <Pricing />
      <FAQ />
      <FormSection />
      <FinalDecision />
      <Footer />
    </Layout>
  );
}
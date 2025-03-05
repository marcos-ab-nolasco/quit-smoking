"use client";

import './globals.css';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import HowItWorks from '../components/sections/HowItWorks';
import VideoSection from '../components/sections/VideoSection';
import Results from '../components/sections/Results';
import Authors from '../components/sections/Authors';
import ContentPreview from '../components/sections/ContentPreview';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import FormSection from '../components/sections/FormSection';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <VideoSection />
      <Benefits />
      <HowItWorks />
      <Results />
      <ContentPreview />
      <Pricing />
      <FAQ />
      <FormSection />
      <Footer />
    </Layout>
  );
}
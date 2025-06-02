import Head from 'next/head';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ServicesSection from '@/components/ServicesSection';
import WhyHueneuSection from '@/components/WhyHueneuSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>hueneu - Where stories find their aesthetic.</title>
        <meta name="description" content="hueneu is a graphic design studio. Designs that whisper loud stories." />
        {/* Add other relevant meta tags for SEO, social sharing etc. */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section: Animated logo reveal, tagline, subtext, scroll indicator */}
      <HeroSection />

      {/* The hueneu Story: Meaning, balance, "Who Knew?" moment */}
      <StorySection />

      {/* What We Do: Core offerings with icons and microcopy */}
      <ServicesSection />

      {/* Why hueneu?: Emotional brand pitch */}
      <WhyHueneuSection />

      {/* Let's Work Together: Contact form, Instagram link */}
      <ContactSection />

    </Layout>
  );
}

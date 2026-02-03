import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroSection from '@/app/components/HeroSection';
import InsurancePartners from '@/app/components/InsurancePartners';
import TiredOfOverpaying from '@/app/components/TiredOfOverpaying';
import HowItWorks from '@/app/components/HowItWorks';
import WhyOurPlans from '@/app/components/WhyOurPlans';
import WhoWeHelp from '@/app/components/WhoWeHelp';
import Testimonials from '@/app/components/Testimonials';
import {
  getLandingPage,
  getAllLandingPageSlugs,
} from '@/config/landing-pages';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllLandingPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: `https://healthcoveragesearch.com/lp/${slug}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <HeroSection config={page.hero} />
      <InsurancePartners />
      <TiredOfOverpaying />
      <HowItWorks />
      <WhyOurPlans />
      <WhoWeHelp />
      <Testimonials />
    </>
  );
}
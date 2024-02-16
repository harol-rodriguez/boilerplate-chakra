import { Box } from "@chakra-ui/react";
import HeroSection from "./home/_/components/HeroSection";
import BrandSection from "./home/_/components/BrandSection";
import QuoteSection from "./home/_/components/QuoteSection";
import AboutSection from "./home/_/components/AboutSection";
import LoadingSpinner from "./home/_/components/LoadingSpinner";
import ProductsSection from "./home/_/components/ProductsSection";
import StackSection from "./home/_/components/StackSection";
import RecentProductsSection from "./home/_/components/RecentProductsSection";
import OurProductsSection from "./home/_/components/OurProductsSection";
import InnovationBanner from "./home/_/components/InnovationBanner";
import BlogSection from "./home/_/components/BlogSection";
import CompanyInfoSection from "./home/_/components/CompanyInformation";

export default function RootPage(props: any) {

  return (
    <Box position="relative">
      <LoadingSpinner />
      <HeroSection />
      <BrandSection />
      <QuoteSection />
      <AboutSection />
      <ProductsSection />
      <StackSection />
      <RecentProductsSection />
      {/* <OurProductsSection /> */}
      <BlogSection />
      <InnovationBanner />
      <CompanyInfoSection />
    </Box>
  );
}

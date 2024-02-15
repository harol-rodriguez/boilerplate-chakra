import { Box } from "@chakra-ui/react";
import HeroSection from "./home/_/components/HeroSection";
import BrandSection from "./home/_/components/BrandSection";
import QuoteSection from "./home/_/components/QuoteSection";
import AboutSection from "./home/_/components/AboutSection";
import LoadingSpinner from "./home/_/components/LoadingSpinner";
import ProductsSection from "./home/_/components/ProductsSection";

export default function RootPage(props: any) {

  return (
    <Box position="relative">
      <LoadingSpinner />
      <HeroSection />
      <BrandSection />
      <QuoteSection />
      <AboutSection />
      <ProductsSection />
    </Box>
  );
}

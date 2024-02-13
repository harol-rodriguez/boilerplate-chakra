import { Box } from "@chakra-ui/react";
import HeroSection from "./home/_/components/HeroSection";
import BrandSection from "./home/_/components/BrandSection";
import QuoteSection from "./home/_/components/QuoteSection";
import AboutSection from "./home/_/components/AboutSection";
import ProductsSection from "./home/_/components/ProductsSection";
import LoadingSpinner from "./home/_/components/LoadingSpinner";

export default function RootPage(props: any) {

  return (
    <Box>
      <LoadingSpinner />
      <HeroSection />
      <BrandSection />
      <QuoteSection />
      <AboutSection />
      <ProductsSection />
    </Box>
  );
}

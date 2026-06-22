import AppleStoreSection from "./shopping/_components/AppleStoreSection";
import HeroSection from "./shopping/_components/HeroSection";
import MyEMIShopSection from "./shopping/_components/MyEMIShopSection";
import PreferencesSection from "./shopping/_components/PreferencesSection";
import RewardCatalogueSection from "./shopping/_components/RewardCatalogueSection";
import ShopWithBrandsSection from "./shopping/_components/ShopWithBrandsSection";
import TrendingSection from "./shopping/_components/TrendingSection";

export default function CacheDemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AppleStoreSection />
      <ShopWithBrandsSection />
      <MyEMIShopSection />
      <RewardCatalogueSection />
      <PreferencesSection />
      <TrendingSection />
    </main>
  );
}

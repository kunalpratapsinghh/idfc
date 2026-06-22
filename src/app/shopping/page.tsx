import AppleStoreSection from "./_components/AppleStoreSection";
import HeroSection from "./_components/HeroSection";
import MyEMIShopSection from "./_components/MyEMIShopSection";
import PreferencesSection from "./_components/PreferencesSection";
import RewardCatalogueSection from "./_components/RewardCatalogueSection";
import ShopWithBrandsSection from "./_components/ShopWithBrandsSection";
import TrendingSection from "./_components/TrendingSection";

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

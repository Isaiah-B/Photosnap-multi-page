import Banner from "../../components/banner/banner.component";
import PricingPlan from "../../components/pricing-plan/pricing-plan.component";
import Row2 from "../../components/row-2/row-2.component";

export default function PricingPage() {
  return (
    <main>
      <Row2
        title="Pricing"
        description="Create a your stories, Photosnap is a platform for photographers and 
          visual storytellers. It’s the simple way to create and share your photos."
        images={{
          desktop: "../../../assets/pricing/desktop/hero.jpg",
          tablet: '',
          mobile: '',
        }}
        theme="dark"
        accent
      />

      <PricingPlan />

      <Banner />
    </main>
  );
}
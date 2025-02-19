import './Pricing.css';
import Layout from '../components/Layout';
// import ExplosiveGrowthCard from '../components/Cards/ExplosiveGrowthCard';
import BaseCard from '../components/Cards/BaseCard';
import ExtendedCard from '../components/Cards/ExtendedCard';
import PremiumCard from '../components/Cards/PremiumCard';
export default function Pricing() {
  return (
    <Layout className="">
      {/* <ExplosiveGrowthCard /> */}
      <BaseCard />
      <ExtendedCard />
      <PremiumCard />
    </Layout>
  );
}

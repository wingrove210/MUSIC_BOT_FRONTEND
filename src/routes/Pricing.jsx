import './Pricing.css';
// import ExplosiveGrowthCard from '../components/Cards/ExplosiveGrowthCard';
import BaseCard from '../components/Cards/BaseCard';
import ExtendedCard from '../components/Cards/ExtendedCard';
import PremiumCard from '../components/Cards/PremiumCard';
import BackButton_Pricing from '../components/ButtonBack/index_pricing';
export default function Pricing() {
  return (
      <div className='pb-10 px-3'>
        <BackButton_Pricing />
        <BaseCard />
        <ExtendedCard />
        <PremiumCard />
      </div>
  );
}

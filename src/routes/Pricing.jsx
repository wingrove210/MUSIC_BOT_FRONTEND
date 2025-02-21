import { useEffect } from 'react';
import './Pricing.css';
import BaseCard from '../components/Cards/BaseCard';
import ExtendedCard from '../components/Cards/ExtendedCard';
import PremiumCard from '../components/Cards/PremiumCard';
import BackButton_Pricing from '../components/ButtonBack/index_pricing';

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
      <div className='pb-10 px-3'>
        <BackButton_Pricing />
        <BaseCard />
        <ExtendedCard />
        <PremiumCard />
      </div>
  );
}

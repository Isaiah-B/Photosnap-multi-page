import { useState } from 'react';

import PricingCard from './pricing-card/pricing-card.component';
import PricingTable from './pricing-table/pricing-table.component';

import {
  PricingCardList,
  PricingPlanContainer,
  PricingSelection,
  PricingTimeSwitchButton,
  PricingTimeSwitchContainer,
} from './pricing-plan.styles';

export default function PricingPlan() {
  const [pricingTime, setPricingTime] = useState<'monthly' | 'yearly'>('monthly');

  const handleChangePricingTime = () => {
    if (pricingTime === 'monthly') setPricingTime('yearly');
    else setPricingTime('monthly');
  }

  return (
    <PricingPlanContainer>
      <PricingSelection>
        <PricingTimeSwitchContainer>
          <h3 className={pricingTime === 'monthly' ? 'selected' : ''}>
            Monthly
          </h3>
          <PricingTimeSwitchButton
            className={pricingTime}
            onClick={() => handleChangePricingTime()}
            aria-label={`Switch to ${pricingTime === 'monthly' ? 'yearly' : 'monthly'}`}
          />
          <h3 className={pricingTime === 'yearly' ? 'selected' : ''}>
            Yearly
          </h3>
        </PricingTimeSwitchContainer>

        <PricingCardList>
          <PricingCard
            title='Basic'
            description='Includes basic usage of our platform. Recommended 
              for new and aspiring photographers.'
            priceMonth={19}
            priceYear={190}
            frequency={pricingTime}
            cardSize='small'
          />

          <PricingCard
            title='Pro'
            description='More advanced features available. Recommended for 
              photography veterans and professionals.'
            priceMonth={39}
            priceYear={390}
            frequency={pricingTime}
            cardSize='large'
          />

          <PricingCard
            title='Business'
            description='Additional features available such as more detailed 
              metrics. Recommended for business owners.'
            priceMonth={99}
            priceYear={990}
            frequency={pricingTime}
            cardSize='small'
          />
        </PricingCardList>
      </PricingSelection>

      <PricingTable />
    </PricingPlanContainer>
  );
}
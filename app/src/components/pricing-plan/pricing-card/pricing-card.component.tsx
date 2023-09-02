import { Button } from '../../cta/cta.component';

import { PricingCardLarge, PricingCardSmall } from './pricing-card.styles';

interface PricingCardProps { 
  title: string,
  description: string,
  priceMonth: number,
  priceYear: number,
  frequency: 'monthly' | 'yearly',
  cardSize: 'small' | 'large',
}

export default function PricingCard({
  title,
  description,
  priceMonth,
  priceYear,
  frequency,
  cardSize,
}: PricingCardProps) {

  const CARD_TYPES = {
    'small': PricingCardSmall,
    'large': PricingCardLarge,
  }
  
  const SelectedComponent = CARD_TYPES[cardSize]
  const selectedPrice = frequency === 'monthly'
    ? priceMonth
    : priceYear;
  
  return (
    <SelectedComponent>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div>
        <h1>{`$${selectedPrice.toFixed(2)}`}</h1>
        <p>
          {
            frequency === 'monthly'
              ? 'per month'
              : 'per year'
          }
        </p>
      </div>
      
      {
        cardSize === 'small'
          ? <Button buttonType='dark'>Pick Plan</Button>
          : <Button buttonType='light'>Pick Plan</Button>
      }
    </SelectedComponent>
  );
}
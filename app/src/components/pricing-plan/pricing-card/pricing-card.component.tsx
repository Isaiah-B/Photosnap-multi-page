import { Button } from '../../cta/cta.component';

import {
  PricingCardButton,
  PricingCardHead,
  PricingCardLarge,
  PricingCardPrice,
  PricingCardSmall,
} from './pricing-card.styles';

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
      <PricingCardHead>
        <h2>{title}</h2>
        <p>{description}</p>
      </PricingCardHead>

      <PricingCardPrice>
        <h1>{`$${selectedPrice.toFixed(2)}`}</h1>
        <p>
          {
            frequency === 'monthly'
              ? 'per month'
              : 'per year'
          }
        </p>
      </PricingCardPrice>
      
      <PricingCardButton>      
        {
          cardSize === 'small'
            ? <Button buttonType='dark'>Pick Plan</Button>
            : <Button buttonType='light'>Pick Plan</Button>
        }
      </PricingCardButton>
    </SelectedComponent>
  );
}
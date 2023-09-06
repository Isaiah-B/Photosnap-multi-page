import { ReactComponent as CheckIcon } from '../../../../assets/pricing/desktop/check.svg';

import useScreenWidth from '../../../hooks/useScreenWidth';

import {
  MobileTableHead,
  PricingTableComponent,
  PricingTableContainer,
} from './pricing-table.styles';

export default function PricingTable() {
  const screenWidth = useScreenWidth();

  const isMobile = screenWidth <= 656;

  return (
    <PricingTableContainer>
      <h1>Compare</h1>

      <PricingTableComponent>
        <thead>
          <tr>
            <th colSpan={isMobile ? 3 : 1}>The Features</th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Business</th>
          </tr>
        </thead>

        <MobileTableHead colSpan={3}>Unlimited Story Posting</MobileTableHead>
        <tr>
          <td>Unlimited Story Posting</td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
        </tr>

        <MobileTableHead colSpan={3}>Unlimited Photo Upload</MobileTableHead>
        <tr>
          <td>Unlimited Photo Upload</td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
        </tr>

        <MobileTableHead colSpan={3}>Embedding Custom Content</MobileTableHead>
        <tr>
          <td>Embedding Custom Content</td>
          <td></td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
        </tr>

        <MobileTableHead colSpan={3}>Customize Metadata</MobileTableHead>
        <tr>
          <td>Customize Metadata</td>
          <td></td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
        </tr>

        <MobileTableHead colSpan={3}>Advanced Metrics</MobileTableHead>
        <tr>
          <td>Advanced Metrics</td>
          <td></td>
          <td></td>
          <td><CheckIcon /></td>
        </tr>

        <MobileTableHead colSpan={3}>Photo Downloads</MobileTableHead>
        <tr>
          <td>Photo Downloads</td>
          <td></td>
          <td></td>
          <td><CheckIcon /></td>
        </tr>

        <MobileTableHead colSpan={3}>Search Engine Indexing</MobileTableHead>
        <tr>
          <td>Search Engine Indexing</td>
          <td></td>
          <td></td>
          <td><CheckIcon /></td>
        </tr>

        <MobileTableHead colSpan={3}>Custom Analytics</MobileTableHead>
        <tr>
          <td>Custom Analytics</td>
          <td></td>
          <td></td>
          <td><CheckIcon /></td>
        </tr>
      </PricingTableComponent>
    </PricingTableContainer>
  );
}
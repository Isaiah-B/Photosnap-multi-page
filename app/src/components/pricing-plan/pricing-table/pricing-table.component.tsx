import { ReactComponent as CheckIcon } from '../../../../assets/pricing/desktop/check.svg';

import { PricingTableComponent, PricingTableContainer } from './pricing-table.styles';

export default function PricingTable() {
  return (
    <PricingTableContainer>
      <h1>Compare</h1>

      <PricingTableComponent>
        <thead>
          <tr>
            <th>The Features</th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Business</th>
          </tr>
        </thead>

        <tr>
          <td>Unlimited Story Posting</td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
        </tr>
        <tr>
          <td>Unlimited Photo Upload</td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
        </tr>
        <tr>
          <td>Embedding Custom Content</td>
          <td></td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
        </tr>
        <tr>
          <td>Customize Metadata</td>
          <td></td>
          <td><CheckIcon /></td>
          <td><CheckIcon /></td>
        </tr>
        <tr>
          <td>Advanced Metrics</td>
          <td></td>
          <td></td>
          <td><CheckIcon /></td>
        </tr>
        <tr>
          <td>Photo Downloads</td>
          <td></td>
          <td></td>
          <td><CheckIcon /></td>
        </tr>
        <tr>
          <td>Search Engine Indexing</td>
          <td></td>
          <td></td>
          <td><CheckIcon /></td>
        </tr>
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
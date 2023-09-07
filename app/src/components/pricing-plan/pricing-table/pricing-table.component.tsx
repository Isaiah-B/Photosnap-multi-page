import { ReactComponent as CheckIcon } from '../../../assets/pricing/desktop/check.svg';

import useScreenWidth from '../../../hooks/useScreenWidth';

import {
  MobileSubheadRow,
  MobileTableHead,
  PricingTableComponent,
  PricingTableContainer,
  TableRow,
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

        <tbody>
          <MobileSubheadRow>
            <MobileTableHead colSpan={3}>Unlimited Story Posting</MobileTableHead>
          </MobileSubheadRow>
          <TableRow>
            <td>Unlimited Story Posting</td>
            <td><CheckIcon /></td>
            <td><CheckIcon /></td>
            <td><CheckIcon /></td>
          </TableRow>

          <MobileSubheadRow>
            <MobileTableHead colSpan={3}>Unlimited Photo Upload</MobileTableHead>
          </MobileSubheadRow>
          <TableRow>
            <td>Unlimited Photo Upload</td>
            <td><CheckIcon /></td>
            <td><CheckIcon /></td>
            <td><CheckIcon /></td>
          </TableRow>

          <MobileSubheadRow>
            <MobileTableHead colSpan={3}>Embedding Custom Content</MobileTableHead>
          </MobileSubheadRow>
          <TableRow>
            <td>Embedding Custom Content</td>
            <td></td>
            <td><CheckIcon /></td>
            <td><CheckIcon /></td>
          </TableRow>

          <MobileSubheadRow>
            <MobileTableHead colSpan={3}>Customize Metadata</MobileTableHead>
          </MobileSubheadRow>
          <TableRow>
            <td>Customize Metadata</td>
            <td></td>
            <td><CheckIcon /></td>
            <td><CheckIcon /></td>
          </TableRow>

          <MobileSubheadRow>
            <MobileTableHead colSpan={3}>Advanced Metrics</MobileTableHead>
          </MobileSubheadRow>
          <TableRow>
            <td>Advanced Metrics</td>
            <td></td>
            <td></td>
            <td><CheckIcon /></td>
          </TableRow>

          <MobileSubheadRow>
            <MobileTableHead colSpan={3}>Photo Downloads</MobileTableHead>
          </MobileSubheadRow>
          <TableRow>
            <td>Photo Downloads</td>
            <td></td>
            <td></td>
            <td><CheckIcon /></td>
          </TableRow>

          <MobileSubheadRow>
            <MobileTableHead colSpan={3}>Search Engine Indexing</MobileTableHead>
          </MobileSubheadRow>
          <TableRow>
            <td>Search Engine Indexing</td>
            <td></td>
            <td></td>
            <td><CheckIcon /></td>
          </TableRow>

          <MobileSubheadRow>
            <MobileTableHead colSpan={3}>Custom Analytics</MobileTableHead>
          </MobileSubheadRow>
          <TableRow>
            <td>Custom Analytics</td>
            <td></td>
            <td></td>
            <td><CheckIcon /></td>
          </TableRow>
        </tbody>
      </PricingTableComponent>
    </PricingTableContainer>
  );
}
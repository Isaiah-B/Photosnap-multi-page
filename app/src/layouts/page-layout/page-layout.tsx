import { Outlet } from 'react-router-dom';

import ScrollToTop from '../../helpers/scrollToTop';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import { PageLayoutContainer } from './page-layout.styles';

export default function PageLayout() {
  return (
    <PageLayoutContainer>
      <ScrollToTop />

      <Header />

      <Outlet />

      <Footer />
    </PageLayoutContainer>
  );
}
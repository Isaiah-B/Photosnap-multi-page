import { Route, Routes } from 'react-router-dom';

import PageLayout from './layouts/page-layout/page-layout';
import HomePage from './pages/home/home.page';
import StoriesPage from './pages/stories/stories.page';
import FeaturesPage from './pages/features/features.page';
import PricingPage from './pages/pricing/pricing.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path='stories' element={<StoriesPage />} />
        <Route path='features' element={<FeaturesPage />} />
        <Route path='pricing' element={<PricingPage />} />
      </Route>
    </Routes>    
  );
}

export default App

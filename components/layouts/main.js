import { LayoutFavicon } from './LayoutFavicon';
import Header from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <LayoutFavicon />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;

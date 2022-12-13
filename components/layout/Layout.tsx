import styles from './Layout.module.scss';
import Sidebar from './Sidebar';
import MainHeader from './MainHeader';
import { useContext } from 'react';
import { LightModeContext } from '../../context/lightModeContext';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const {
    state: { lightMode },
  } = useContext(LightModeContext);

  return (
    <>
      <div className={lightMode ? `${styles.light}` : ''}>
        <MainHeader />
        <div className={styles.container}>
          <Sidebar />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};
export default Layout;

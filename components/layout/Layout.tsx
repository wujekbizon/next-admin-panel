import styles from './Layout.module.scss';
import Sidebar from './Sidebar';
import MainHeader from './MainHeader';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <MainHeader />
      <div className={styles.container}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
};
export default Layout;

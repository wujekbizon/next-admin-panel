import styles from './MainHeader.module.scss';
import Link from 'next/link';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Image from 'next/image';

const MainHeader = () => {
  return (
    <header className={styles.topbar}>
      <nav className={styles.topWrapper}>
        <div className={styles.topLeft}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={140}
                height={25}
                priority
              />
            </Link>
          </div>
          <span className={styles.textLeft}>ADMIN PANEL</span>
        </div>
        {/* {!admin && ( */}
        {/* <span className="viewMode">View Mode Only For Show Purpose</span> */}
        {/* )} */}
        <div className={styles.topRight}>
          <div className={styles.topIconContainer}>
            <LanguageIcon />
            English
          </div>
          <div className={styles.topIconContainer}>
            <Badge
              badgeContent={1}
              sx={{
                '& .MuiBadge-badge': {
                  color: 'white',
                  backgroundColor: '#010409',
                },
              }}
            >
              <NotificationsNoneIcon />
            </Badge>
          </div>
          <div className={styles.topIconContainer}>
            <DarkModeOutlinedIcon
            // onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>

          <Image
            className={styles.topAvatar}
            src={
              // user.img ||
              'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
            }
            width={50}
            height={50}
            alt="avatar"
          />
        </div>
      </nav>
    </header>
  );
};
export default MainHeader;

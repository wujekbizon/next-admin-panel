import styles from './Sidebar.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Sidebar = () => {
  const [active, setActive] = useState('1');

  const handleToggleActive = (event: React.MouseEvent<HTMLLIElement>) => {
    setActive(event.currentTarget.id);
  };

  return (
    <>
      {/* {isOpen && <LogoutModal />} */}
      <aside className={styles.sidebar}>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <h3 className={styles.title}>Main</h3>
            <ul className={styles.list}>
              <Link href="/" className={styles.link}>
                <li
                  className={
                    active === '1'
                      ? `${styles.active}  ${styles.item} `
                      : styles.item
                  }
                  id={'1'}
                  onClick={handleToggleActive}
                >
                  <DashboardIcon className={styles.sidebarIcon} />
                  Dashboard
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.menu}>
            <h3 className={styles.title}>Sales</h3>
            <ul className={styles.list}>
              <li
                className={
                  active === '2'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'2'}
                onClick={handleToggleActive}
              >
                <TimelineOutlinedIcon className={styles.sidebarIcon} />
                Analytics
              </li>
              <li
                className={
                  active === '3'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'3'}
                onClick={handleToggleActive}
              >
                <AttachMoneyOutlinedIcon className={styles.sidebarIcon} />
                Transactions
              </li>
              <li
                className={
                  active === '4'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'4'}
                onClick={handleToggleActive}
              >
                <BarChartIcon className={styles.sidebarIcon} />
                Stats
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <h3 className={styles.title}>List</h3>
            <ul className={styles.list}>
              <Link href="/users" className={styles.link}>
                <li
                  className={
                    active === '5'
                      ? `${styles.active}  ${styles.item} `
                      : styles.item
                  }
                  id={'5'}
                  onClick={handleToggleActive}
                >
                  <GroupIcon className={styles.sidebarIcon} />
                  Users
                </li>
              </Link>
              <Link href="/products" className={styles.link}>
                <li
                  className={
                    active === '6'
                      ? `${styles.active}  ${styles.item} `
                      : styles.item
                  }
                  id={'6'}
                  onClick={handleToggleActive}
                >
                  <StoreMallDirectoryIcon className={styles.sidebarIcon} />
                  Products
                </li>
              </Link>
              <li
                className={
                  active === '7'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'7'}
                onClick={handleToggleActive}
              >
                <CreditCardOutlinedIcon className={styles.sidebarIcon} />
                Orders
              </li>
              <li
                className={
                  active === '8'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'8'}
                onClick={handleToggleActive}
              >
                <LocalShippingIcon className={styles.sidebarIcon} />
                Delivery
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <h3 className={styles.title}>Notifications</h3>
            <ul className={styles.list}>
              <li
                className={
                  active === '9'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'9'}
                onClick={handleToggleActive}
              >
                <MailOutlinedIcon className={styles.sidebarIcon} />
                Mail
              </li>
              <li
                className={
                  active === '10'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'10'}
                onClick={handleToggleActive}
              >
                <DynamicFeedOutlinedIcon className={styles.sidebarIcon} />
                Feedback
              </li>
              <li
                className={
                  active === '11'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'11'}
                onClick={handleToggleActive}
              >
                <ChatBubbleOutlinedIcon className={styles.sidebarIcon} />
                Messages
              </li>
            </ul>
          </div>
          {/* <div className={styles.menu}>
            <h3 className={styles.title}>Staff</h3>
            <ul className={styles.list}>
              <li
                className={active === '12' ? `${styles.active}  ${styles.item} ` : styles.item}
                id={'12'}
                onClick={handleToggleActive}
              >
                <WorkOutlineOutlinedIcon className="sidebarIcon" />
                Manage
              </li>
              <li
                className={active === '13' ? `${styles.active}  ${styles.item} ` : styles.item}
                id={'13'}
                onClick={handleToggleActive}
              >
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div> */}
          <div className={styles.menu}>
            <h3 className={styles.title}>Service</h3>
            <ul className={styles.list}>
              <li
                className={
                  active === '14'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'14'}
                onClick={handleToggleActive}
              >
                <SettingsSystemDaydreamOutlinedIcon
                  className={styles.sidebarIcon}
                />
                System Health
              </li>
              <li
                className={
                  active === '15'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'15'}
                onClick={handleToggleActive}
              >
                <PsychologyOutlinedIcon className={styles.sidebarIcon} />
                Logs
              </li>
              <li
                className={
                  active === '16'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'16'}
                onClick={handleToggleActive}
              >
                <SettingsIcon className={styles.sidebarIcon} />
                Settings
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <h3 className={styles.title}>User</h3>
            <ul className={styles.list}>
              <li
                className={
                  active === '17'
                    ? `${styles.active}  ${styles.item} `
                    : styles.item
                }
                id={'17'}
                onClick={handleToggleActive}
              >
                <AccountCircleOutlinedIcon className={styles.sidebarIcon} />
                Profile
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.bottomTitle}>Color:</span>
          <div
            className={styles.colorOption}
            // onClick={() => dispatchContext({ type: 'LIGHT' })}
          ></div>
          <div
            className={styles.colorOption}
            // onClick={() => dispatchContext({ type: 'DARK' })}
          ></div>
          <div
            className={styles.logout}
            // onClick={() => dispatch(openModal())}
          >
            <ExitToAppOutlinedIcon className={styles.sidebarIcon} />
            Logout
          </div>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;

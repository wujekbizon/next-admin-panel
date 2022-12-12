import styles from './WidgetSm.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Image from 'next/image';

const usersData = [
  {
    _id: 1,
    username: 'GregWolf',
    img: 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif',
  },
  {
    _id: 2,
    username: 'GregWolf',
    img: 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif',
  },
  {
    _id: 3,
    username: 'GregWolf',
    img: 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif',
  },
  {
    _id: 4,
    username: 'GregWolf',
    img: 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif',
  },
];

const WidgetSm = () => {
  const [users, setUsers] = useState(usersData);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const res = await userRequest.get('users/?new=true');
  //       setUsers(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUsers();
  // }, []);

  return (
    <div className={styles.widgetSm}>
      <h3 className={styles.title}>New Join Members</h3>
      <ul className={styles.list}>
        {users
          .filter((user) => user.username !== 'admin')
          .map((user) => (
            <li className={styles.listItem} key={user._id}>
              <Image
                src={
                  user.img ||
                  'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
                }
                alt="user image"
                className={styles.img}
                width={40}
                height={40}
              />
              <div className={styles.user}>
                <span className={styles.userName}>{user.username}</span>
                <span className={styles.userTitle}>Software Engineer</span>
              </div>
              <Link className="link" href={`/user/${user._id}`}>
                <button className={styles.button}>
                  <VisibilityOutlinedIcon className={styles.icon} />
                  Display
                </button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default WidgetSm;

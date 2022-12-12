import styles from './FeaturedInfo.module.scss';
import { useState, useEffect } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const myIncome = [{ total: 11456 }, { total: 43456 }];

const FeaturedInfo = () => {
  const [income, setIncome] = useState(myIncome);
  const [perc, setPerc] = useState(0);

  // useEffect(() => {
  //   const getIncome = async () => {
  //     try {
  //       const res = await userRequest.get('orders/income');
  //       const list = res.data.sort((a, b) => {
  //         return a._id - b._id;
  //       });
  //       setIncome(list);
  //       setPerc((res.data[1].total * 100) / res.data[0].total - 100);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getIncome();
  // }, []);

  return (
    <div className={styles.featured}>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Revanue</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>${income[1]?.total}</span>
          <span className={styles.moneyRate}>
            %{perc.toFixed(2)}
            {perc < 0 ? (
              <ArrowDownwardOutlinedIcon
                className={`${styles.icon} ${styles.negative}`}
              />
            ) : (
              <ArrowUpwardOutlinedIcon className={styles.icon} />
            )}
          </span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Sales</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>$46415</span>
          <span className={styles.moneyRate}>
            -1.4{' '}
            <ArrowDownwardOutlinedIcon
              className={`${styles.icon} ${styles.negative}`}
            />
          </span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Cost</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>$1415</span>
          <span className={styles.moneyRate}>
            5.4 <ArrowUpwardOutlinedIcon className={styles.icon} />
          </span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
    </div>
  );
};
export default FeaturedInfo;

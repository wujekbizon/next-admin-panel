import styles from './WidgetLg.module.scss';

const orders = [
  {
    _id: 1,
    userId: 123399932,
    createdAt: '13.10.2022',
    amount: 560,
    status: 'Pending',
  },
  {
    _id: 2,
    userId: 99932333,
    createdAt: '03.12.2022',
    amount: 1202,
    status: 'Declined',
  },
  {
    _id: 3,
    userId: 324322,
    createdAt: '09.12.2022',
    amount: 610,
    status: 'Approved',
  },
  {
    _id: 4,
    userId: 13123888,
    createdAt: '03.12.2022',
    amount: 3560,
    status: 'Approved',
  },
];

const WidgetLg = () => {
  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const getOrders = async () => {
  //     try {
  //       const res = await userRequest.get('/orders');
  //       setOrders(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getOrders();
  // }, []);

  const Button = ({ type }: { type: string }) => {
    return (
      <button className={`${styles.button} ${styles.type}`}>{type}</button>
    );
  };

  return (
    <div className={styles.widgetLg}>
      <h3 className={styles.title}>Latest transactions</h3>
      <table className={styles.widgetTable}>
        <tbody>
          <tr className={styles.widgetTr}>
            <th className={styles.widgetTh}>Customer</th>
            <th className={styles.widgetTh}>Date</th>
            <th className={styles.widgetTh}>Amount</th>
            <th className={styles.widgetTh}>Status</th>
          </tr>
          {orders.map((order) => (
            <tr className={styles.widgetTr} key={order._id}>
              <td className={styles.user}>
                <span className={styles.name}>{order.userId}</span>
              </td>
              <td className={styles.date}>{order.createdAt}</td>
              <td className={styles.amount}>${order.amount}</td>
              <td className={styles.status}>
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default WidgetLg;

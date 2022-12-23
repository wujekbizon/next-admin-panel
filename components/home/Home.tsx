import './Home.scss';
import WidgetLg from '../widgets/WidgetLg';
import WidgetSm from '../widgets/WidgetSm';
import Chart from '../chart/Chart';
import FeaturedInfo from '../featuredInfo/FeaturedInfo';

const Home = () => {
  return (
    <section className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" aspect={3 / 1} />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </section>
  );
};
export default Home;

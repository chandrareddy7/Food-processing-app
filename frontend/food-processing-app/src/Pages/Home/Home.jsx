import "./Home.css";
import logo from "../../assets/chef-logo.png";
import Menu from "../../components/Menu/Menu";
import FoodItems from "../../components/FoodItems/FoodItems";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="left">
          <div className="header">Satisfy Your Cravings Anytime, Anywhere</div>
          <div className="description">
            Explore a world of culinary delights from your favorite local
            vendors, delivered straight to your doorstep.
          </div>
        </div>
        <div className="right">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <Menu />
    </>
  );
};
export default Home;

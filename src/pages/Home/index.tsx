import "./styles.css";
import car from "assets/images/homeCar.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-top-container">
        <img src={car} alt="Home Car" />
        <h1>O carro perfeito para você</h1>
        <p>
          Conheça nossos carros e dê mais um passo na realização do seu sonho
        </p>
      </div>
      <div className="home-botton-container">
        <button>
          <Link to="/catalog">VER CATÁLOGO</Link>
        </button>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;

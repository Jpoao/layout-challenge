import "./styles.css";
import ProductCar from "assets/images/productCar.png";

const ProductCard = () => {
    return (
        <div className="card-container">
            <div className="card-top-container">
                <img src={ProductCar} alt="product car"/>
                <h4>Audi Supra TT</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <button> COMPRAR </button>
        </div>
    );
}

export default ProductCard;
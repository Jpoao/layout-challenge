import "./styles.css";
import ProductCard from "components/ProductCard";

const Product = () => {
  return (
    <div className="container my-0">
      <div className="product-top-container">
        <div className="input-container">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Digite sua busca"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn">
            BUSCAR
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Product;

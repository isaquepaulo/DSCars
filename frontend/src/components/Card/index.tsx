import { ReactComponent as Imagecar } from "assets/images/carcard.svg";
import "./style.css";
const Card = () => {
  return (
    <div className="d-flex-column card-base mt-5 p-3 justify-content-center">
      <div className="image-fluid text-center">
        <Imagecar />
      </div>
      <div>
        <h2 className="text-center">Audi Supra TT</h2>
        <p className="text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div className="d-flex justify-content-center mt-4 mt-lg-5">
        <button className="btn btn-secundary w-75">Comprar</button>
      </div>
    </div>
  );
};

export default Card;

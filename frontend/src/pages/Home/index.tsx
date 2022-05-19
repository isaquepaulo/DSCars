import { ReactComponent as MainImage } from "assets/images/car-main.svg";
import "./style.css";
import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <div className="home-page-main d-flex justify-content-center">
        <div className="row ">
          <div className="col-xl-5 home-image-container d-flex justify-content-center mt-5 order-xl-2">
            <MainImage />
          </div>
          <div className="col-xl-7 mt-5 mb-5 order-xl-1">
            <div className="flex-column ">
              <div className="text-main">
                <h1> O carro perfeito para você</h1>
              </div>
              <div className="width-p">
                <p className="paragrafo">
                  Conheça nossos carros e dê mais um passo na realização do seu
                  sonho
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="card-btn">
          <div className="row">
            <div className="col-6  offset-md-1 col-md-2  offset-lg-1 col-lg-2">
              <Button />
            </div>
            <div className="col-6  offset-md-1 col-md-8 ml-md-2 offset-lg-0 col-lg-8 ml-lg-1 width-lg ">
              <p className="mt-2 ">Começe agora a navegar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

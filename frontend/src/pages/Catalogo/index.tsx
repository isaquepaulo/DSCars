import "./style.css";
import Card from "../../components/Card";

const Catalogo = () => {
  return (
    <div className="container">
      <div className="bar-search p-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Digite sua busca"
          />
          <button className="btn btn-secundary  btn-busca ">BUSCAR</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <Card />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Catalogo;

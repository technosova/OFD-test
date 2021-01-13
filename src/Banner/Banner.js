import AccessForm from "../AccessForm/AccessForm";
import "./Banner.css";

function Banner() {
  return (
    <div className="Banner">
      <div className="BlockHeader">
        <h1>
          Простой <br></br> и удобный сервис<br></br> для вашего бизнеса
        </h1>
        <p> Принимаем чеки с любых касс и бережно их храним</p>
      </div>

      <AccessForm />
    </div>
  );
}

export default Banner;

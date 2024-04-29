import { useNavigate } from "react-router";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const handleChannel = () => {
    navigate("/servers");
  };

  return (
    <article className="homePage">
      <section className="homePage__header">
        <img className="homePage__logo" src="/logo.jpg" alt="logo bot" />
        <div className="homePage__container">
          <h1 className="homePage__title">Hawking's</h1>
          <p className="homePage__info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, qui
            perspiciatis. Fugiat illum iure distinctio maiores quo quae debitis
            totam consectetur voluptatum commodi, quibusdam ducimus, doloremque
            qui repudiandae magnam maxime!
          </p>
          <ul className="homePage__list">
            <li className="homePage__btn">Invite To Server</li>
            <li className="homePage__btn">Support</li>
          </ul>
        </div>
      </section>
      <section className="homePage__footer">
        <div className="homePage__item">Text to speach</div>
        <div className="homePage__item">Admin Voice</div>
        <div className="homePage__item" onClick={handleChannel}>
          Temporary Channels
        </div>
      </section>
    </article>
  );
};

export default HomePage;

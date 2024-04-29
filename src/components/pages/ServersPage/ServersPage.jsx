import { useNavigate } from "react-router";
import "./ServersPage.css";

const ServersPage = () => {
  const navigate = useNavigate();
  const handleSettings = () => {
    navigate("/servers/settings");
  };
  return (
    <article className="serversPage">
      <section className="serversPage__container">
        <div className="serversPage__item">
          <h2 className="serversPage__title">Server 1</h2>
          <button className="serversPage__btn" onClick={handleSettings}>
            Settings
          </button>
        </div>
        <div className="serversPage__item">
          <h2 className="serversPage__title">Server 2</h2>
          <button className="serversPage__btn" onClick={handleSettings}>
            Settings
          </button>
        </div>
        <div className="serversPage__item">
          <h2 className="serversPage__title">Server 3</h2>
          <button className="serversPage__btn">Add</button>
        </div>
      </section>
    </article>
  );
};

export default ServersPage;

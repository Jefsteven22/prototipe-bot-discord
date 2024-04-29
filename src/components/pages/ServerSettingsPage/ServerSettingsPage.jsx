import "./ServerSettingsPage.css";

const ServerSettingsPage = () => {
  return (
    <article className="serverSettingsPage">
      <div className="serverSettingsPage__info">
        <img
          className="serverSettingsPage__logo"
          src="/logo.jpg"
          alt="logo del server"
        />
        <h2 className="serverSettingsPage__title">Server</h2>
        <div className="serverSettingsPage__container">
          <span className="serverSettingsPage__container-icon">Icon</span>
          <p className="serverSettingsPage__data">109</p>
        </div>
        <div className="serverSettingsPage__container">
          <span className="serverSettingsPage__container-icon">Icon</span>
          <p className="serverSettingsPage__data">23/03/22</p>
        </div>
      </div>
      <form className="serverSettingsPage__form">
        <div className="serverSettingsPage__item">
          <label className="serverSettingsPage__label">TTS</label>
          <select className="serverSettingsPage__select">
            <option>Empty Option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div className="serverSettingsPage__item">
          <label className="serverSettingsPage__label">Admin Voice</label>
          <select className="serverSettingsPage__select">
            <option>Empty Option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div className="serverSettingsPage__item">
          <label className="serverSettingsPage__label">
            Temporary Channels
          </label>
          <select className="serverSettingsPage__select">
            <option>Empty Option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </form>
    </article>
  );
};

export default ServerSettingsPage;

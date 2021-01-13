import React from "react";
import "./modal.css";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2>Вход в Личный кабинет</h2>
        <div className="content">

        <div className="form-modal">
          <input
            type="text"
            id="login"
            placeholder="Введите логин"
            required
          ></input>
          <label htmlFor="login">Логин</label>
        </div>

        <div className="form-modal">
          <input
            type="password"
            placeholder="Введите пароль"
            required
          ></input>
          <label htmlFor="login">Пароль</label>
        </div>

        </div>

        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            Закрыть
          </button>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

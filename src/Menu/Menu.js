import logo from "./logo.svg";
import React from "react";
import Modal from "../Modal/index";

import "./Menu.css";

class Menu extends React.Component {
  state = {
    show: false,
  };
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="Menu">
        <header className="Menu-header">
          <img src={logo} alt="logo" />
          <p className="Menu-title">Первый ОФД</p>
          <nav className="Menu-nav">
            <div className="Menu-nav-item">Тарифы</div>
            <div className="Menu-nav-item">Контакты</div>
          </nav>
        </header>

        <div className="buttonBlock">
          <button
            className=" Button Button-login"
            onClick={(e) => {
              this.showModal(e);
            }}
          >
            {" "}
            Вход в ЛК{" "}
          </button>
          <button className="Button Button-registration">Регистрация</button>
        </div>
        <Modal onClose={this.showModal} show={this.state.show}></Modal>
      </div>
    );
  }
}

export default Menu;

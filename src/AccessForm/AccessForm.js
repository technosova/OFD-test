import React from "react";
import "./AccessForm.css";
import axios from "axios";

class AccessForm extends React.Component {
  handleSubmit(e) {
    var object = {};
    var formData = new FormData(document.forms.AccessForm);

    formData.forEach(function (value, key) {
      object[key] = value;
    });

    axios
      .post("http://localhost:3000", object)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    e.preventDefault();
  }
  render() {
    return (
      <div className="AccessForm">
        <form
          name="AccessForm"
          className="form"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Введите ваше имя"
              required
            ></input>
            <label htmlFor="login">Ваше имя</label>
          </div>

          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Введите ваш email"
              required
            ></input>
            <label htmlFor="login">Ваш E-mail</label>
          </div>

          <input
            className="form-submit"
            type="submit"
            value="Получить доступ"
          />
        </form>
      </div>
    );
  }
}

export default AccessForm;

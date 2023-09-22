import React, { Component } from "react";
import { logo, menu } from "../../assets";
import "./Header.scss";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  render() {
    return (
      <header className="header">
        <div className="container-header">
          <nav>
            <a href="#" className="logo">
              <img src={logo} alt="logo" />
            </a>
            <a href="#" onClick={toggleMenu} className="menu">
              <img src={menu} alt="" />
            </a>
            <div className="big">
              <div className="nav-links">
                <p className="line"></p>
                <a href="#">Продукция</a>
                <p className="line"></p>
                <a href="#">Сертификаты</a>
                <p className="line"></p>
                <a href="#">Наша команда</a>
                <p className="line"></p>
                <a href="#">О нас</a>
                <p className="line"></p>
                <a href="#">Новости</a>
                <p className="line"></p>
                <a href="#">Вакансии</a>
                <p className="line"></p>
                <a href="#">Контакты</a>
                <p className="line"></p>
              </div>

              <div className="dark">
                <a href="#">
                  <box-icon name="moon" className="dark" id="mooon"></box-icon>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

import React, { useState } from "react";
import { logo, menu } from "../../assets";
import "./Header.scss";

const Header = () => {
  const [open, setIsOpen] = useState(false);
  const [dropdown, setIsOpens] = useState(false);
  return (
    <header className="header">
      <div className="container-header">
        <nav>
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <button href="#" className="menu" onClick={() => setIsOpen(!open)}>
            <img src={menu} alt="" />
          </button>
          <div className="big">
            {open && (
              <div className="nav-links open">
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
            )}
            <div className="nav-link">
              <p className="line"></p>
              <button
                onClick={() => setIsOpens(!dropdown)}
                className="dropDown"
              >
                Продукция
              </button>
              {dropdown && (
                <div className="dropDownMenu">
                  <p className="dropDownMenus">
                    <p>ламинатные тубы</p>
                    <br />
                    <p>экструзионные тубы</p>
                    <br />
                    <p>другая упаковка</p>
                  </p>
                </div>
              )}

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
};

export default Header;

// import React, { Component } from "react";
// import { logo, menu } from "../../assets";
// import "./Header.scss";

// const Header = () => {
//     const Menus =
//   return (
//     <header className="header">
//       <div className="container-header">
//         <nav>
//           {/* <a href="#" className="logo">
//               <img src={logo} alt="logo" />
//             </a> */}
//           <button href="#" className="menu" onClick={this.toggleMenu}>
//             <img src={menu} alt="" />
//           </button>
//           <div className={`big ${isOpen ? "open" : ""}`}>
//             <div className="nav-links">
//               <p className="line"></p>
//               <a href="#">{items.value}</a>
//               <p className="line"></p>
//               <a href="#">Сертификаты{items.value}</a>
//               <p className="line"></p>
//               <a href="#">Наша команда{items.value}</a>
//               <p className="line"></p>
//               <a href="#">О нас{items.value}</a>
//               <p className="line"></p>
//               <a href="#">Новости{items.value}</a>
//               <p className="line"></p>
//               <a href="#">Вакансии{items.value}</a>
//               <p className="line"></p>
//               <a href="#">Контакты{items.value}</a>
//               <p className="line"></p>
//             </div>

//             {/* <div className="dark">
//                 <a href="#">
//                   <box-icon name="moon" className="dark" id="mooon"></box-icon>
//                 </a>
//               </div> */}
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

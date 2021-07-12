import React, { useState } from "react";

export const Search = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <i class="fab fa-earlybirds"></i>
        </div>
        <h1 className="header__title">
          GIF<span className="header__title--lite">Expert</span>
        </h1>
        <div className="search">
          <form onSubmit={handleSubmit} className="search__form">
            <div className="search__icon">
              <i
                className="fas fa-search search__icon-i"
                onClick={handleSubmit}
              ></i>
            </div>
            <input
              className="search__input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Escribe Aqui!!!"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

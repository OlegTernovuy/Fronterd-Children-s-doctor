import React from "react";
import { useState } from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import "./AddPriceModal.css";

export const AddPriceModal = ({ addNewPrice, handleHideAddPriceForm }) => {
  const [PriceTitle, setPriceTitle] = useState("");
  const [PoslugaPrice, setPoslugaPrice] = useState("");

  const handlePriceTitleChange = (e) => {
    setPriceTitle(e.target.value);
  };

  const handlePoslugaPriceChange = (e) => {
    setPoslugaPrice(e.target.value);
  };

  const createPrice = (e) => {
    e.preventDefault();
    const price = {
      title: PriceTitle,
      price: PoslugaPrice,
    };
    addNewPrice(price);
    handleHideAddPriceForm();
  };

  return (
    <>
      <form className="addVacForm" onSubmit={createPrice}>
        <h2>Додати послугу</h2>
        <button
          onClick={handleHideAddPriceForm}
          className="hideBtn"
          type="button"
        >
          <HighlightOffOutlinedIcon />
        </button>
        <input
          className="addFormInput"
          type="text"
          placeholder="Введіть назву послуги"
          value={PriceTitle}
          required
          onChange={handlePriceTitleChange}
        />
        <input
          className="addFormInput"
          type="number"
          placeholder="Введіть ціну послуги"
          value={PoslugaPrice}
          required
          onChange={handlePoslugaPriceChange}
        />
        <button className="confirmAddVac" type="submit">
          Додати
        </button>
      </form>
      <div onClick={handleHideAddPriceForm} className="modalAddVac"></div>
    </>
  );
};

import React from "react";
import { useState } from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import "./AddVacModal.css";

export const AddVacModal = ({ addNewVac, handleHideAddVacForm }) => {
  const [VacTitle, setVacTitle] = useState("");
  const [VacPrice, setVacPrice] = useState("");

  const handleVacTitleChange = (e) => {
    setVacTitle(e.target.value);
  };

  const handleVacPriceChange = (e) => {
    setVacPrice(e.target.value);
  };

  const createVac = (e) => {
    e.preventDefault();
    const vacs = {
      title: VacTitle,
      price: VacPrice,
    };
    addNewVac(vacs);
    handleHideAddVacForm();
  };

  return (
    <>
      <form className="addVacForm" onSubmit={createVac}>
        <h2>Додати вакцину</h2>
        <button
          onClick={handleHideAddVacForm}
          className="hideBtn"
          type="button"
        >
          <HighlightOffOutlinedIcon />
        </button>
        <input
          className="addFormInput"
          type="text"
          placeholder="Введіть назву вакцини"
          value={VacTitle}
          required
          onChange={handleVacTitleChange}
        />
        <input
          className="addFormInput"
          type="number"
          placeholder="Введіть ціну вакцини"
          value={VacPrice}
          required
          onChange={handleVacPriceChange}
        />
        <button className="confirmAddVac" type="submit">
          Додати
        </button>
      </form>
      <div onClick={handleHideAddVacForm} className="modalAddVac"></div>
    </>
  );
};

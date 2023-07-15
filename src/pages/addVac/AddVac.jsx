import { useState, useEffect } from "react";
import "./Vaccination.css";
import { VacCard } from "./VacCard";
import { AddVacModal } from "./AddVacModal";
import { EditVacModal } from "./EditVacModal";
import CircularProgress from "@mui/material/CircularProgress";
import { url } from "../../App";

import axios from "axios";

export const AddVac = ({ isAdministrator }) => {
  const [showAddVacForm, setShowAddVacForm] = useState(false);
  const [showEditVacForm, setShowEditVacForm] = useState(false);
  const [VacArr, setVacArr] = useState([]);
  const [selectVac, setSelectVac] = useState({});
  const [isPending, setIsPending] = useState(false);

  // const getData = async () => {
  //   try {
  //     setIsPending(true);
  //     const responce = await fetch(`${url}/vaccines`);
  //     if (responce.status === 200) {
  //       const data = await responce.json();
  //       setIsPending(false);
  //       setVacArr(data);
  //     }
  //   } catch (err) {
  //     setIsPending(false);
  //     console.log(err);
  //   }
  // };

  const getData = async () => {
    try {
      setIsPending(true);
      const responce = await axios.get(`${url}/vaccines`);
      if (responce.status === 200) {
        // const data = await responce.json();
        setIsPending(false);
        setVacArr(responce.data);
      }
    } catch (err) {
      setIsPending(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleShowAddVacForm = () => {
    setShowAddVacForm(true);
  };
  const handleHideAddVacForm = () => {
    setShowAddVacForm(false);
  };

  const handleShowEditVacForm = () => {
    setShowEditVacForm(true);
  };

  const handleHideEditVacForm = () => {
    setShowEditVacForm(false);
  };

  const handlSelectVac = (Vac) => {
    setSelectVac(Vac);
  };

  const deleteVac = async (MyVac) => {
    try {
      if (
        window.confirm(
          `Ви впевнені, що хочете видалити вакцину: ${MyVac.title}?`
        )
      ) {
        setIsPending(true);
        const responce = await fetch(`${url}/vaccines/` + MyVac._id, {
          method: "DELETE",
        });

        if (responce.status === 200) {
          getData();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addNewVac = async (MyVac) => {
    try {
      setIsPending(true);
      const responce = await fetch(`${url}/vaccines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(MyVac),
      });

      if (responce.status === 200) {
        getData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const EditVac = async (updateVac) => {
    try {
      setIsPending(true);
      const responce = await fetch(`${url}/vaccines/` + updateVac.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updateVac.title,
          price: updateVac.price,
        }),
      });
      if (responce.status === 200) {
        getData();
      } else {
        setIsPending(false);
      }
    } catch (err) {
      setIsPending(false);
      console.log(err);
    }
  };

  const vacPosts = VacArr.map((item) => {
    return (
      <VacCard
        key={item._id}
        id={item._id}
        title={item.title}
        price={item.price}
        deleteVac={() => deleteVac(item)}
        handleShowEditVacForm={handleShowEditVacForm}
        handlSelectVac={() => handlSelectVac(item)}
        isAdministrator={isAdministrator}
      />
    );
  });

  if (VacArr.length === 0)
    return (
      <div className="waitDownl">
        <h1>Завантаження даних...</h1>
      </div>
    );

  const vacOpacity = isPending ? 0.5 : 1;

  return (
    <>
      <div className="containerVac">
        {showAddVacForm && (
          <AddVacModal
            VacArr={VacArr}
            handleHideAddVacForm={handleHideAddVacForm}
            addNewVac={addNewVac}
          />
        )}
        {showEditVacForm && (
          <EditVacModal
            handleHideEditVacForm={handleHideEditVacForm}
            selectVac={selectVac}
            EditVac={EditVac}
          />
        )}
        <div className="vaccination">Ціна на вакцинацію</div>
        <div className="price" style={{ opacity: vacOpacity }}>
          <div className="vacList" id="vacList">
            <div
              className="vacName"
              style={{ fontWeight: "1000", color: "#000" }}
            >
              Назва вакцини
            </div>
            <div
              className="PoslugaPrice"
              style={{ fontWeight: "1000", color: "#000" }}
            >
              Ціна, грн
            </div>
          </div>
          <div className="price">{vacPosts}</div>
          {isPending && <CircularProgress className="preLoader" />}
        </div>

        {isAdministrator && (
          <div className="addVacButton">
            <button onClick={handleShowAddVacForm}>Додати нову вакцину</button>
          </div>
        )}
      </div>
    </>
  );
};

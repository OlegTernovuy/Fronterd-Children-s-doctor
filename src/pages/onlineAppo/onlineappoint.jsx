import React, { useEffect, useState } from "react";

import { InfoPatients } from "./InfoPatients.jsx";
import "./appoint.css";
import { useSelector } from "react-redux";
import { docName } from "../../Redux/features/auth/authSlice";

import { url } from "../../App";

export const Appointments = () => {
  const [dateAboutPatients, setDateAboutPatients] = useState([]);
  const [IsPending, setIsPending] = useState(false);
  const nameDoctor = useSelector(docName);

  const getData = async () => {
    try {
      const responce = await fetch(`${url}/patients`);
      if (responce.status === 200) {
        const data = await responce.json();
        setIsPending(false);
        if (nameDoctor == "admin") {
          setDateAboutPatients(data);
        } else {
          setDateAboutPatients(
            data.filter((word) => word.doctor == nameDoctor)
          );
        }
      } else {
        setDateAboutPatients([]);
        setIsPending(false);
      }
    } catch (err) {
      setDateAboutPatients([]);
      setIsPending(false);
      console.log(err);
    }
  };

  const deletePat = async (pat) => {
    try {
      setIsPending(true);
      const responce = await fetch(`${url}/patients/` + pat._id, {
        method: "DELETE",
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

  const addNewPatient = async (patient) => {
    try {
      const responce = await fetch(`${url}/oldpatient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patient),
      });

      const data = await responce.json();
      deletePat(patient);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const infoPatients = dateAboutPatients.map((item) => {
    return (
      <InfoPatients
        key={item._id}
        name={item.name}
        date={item.date}
        time={item.time}
        phone={item.phone}
        reason={item.reason}
        doctor={item.doctor}
        addNewPatient={() => addNewPatient(item)}
      />
    );
  });

  return (
    <>
      <div className="containerPatients">
        <div className="titleTable">Таблиця записів</div>
        <div className="forTable">
          <table className="titleAppo">
            <tr className="patTable">
              <th className="appo">Ім'я</th>
              <th className="appo">Дата</th>
              <th className="appo">Час</th>
              <th className="appo">Телефон</th>
              <th className="appo">Причина</th>
              <th className="appo">Оглянув</th>
            </tr>
          </table>
        </div>
        <div className="dataAppo">{infoPatients}</div>
      </div>
    </>
  );
};

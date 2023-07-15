import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./customers.css";

import { url } from "../../../App";

export const Orders = () => {
  const [dateAboutPatients, setDateAboutPatients] = useState([]);
  const [IsPending, setIsPending] = useState(false);

  const getData = async () => {
    try {
      const responce = await fetch(`${url}/statistics/orders`);

      if (responce.status === 200) {
        const data = await responce.json();
        setIsPending(false);
        setDateAboutPatients(data);
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

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "Ім'я",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "date",
      headerName: "Дата",
      flex: 1,
    },
    {
      field: "time",
      headerName: "Час",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Телефон",
      flex: 1,
    },
    {
      field: "reason",
      headerName: "Причина звертання",
      flex: 1,
    },
    {
      field: "doctor",
      headerName: "Лікар",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <div>
        <p className="pageName">Page</p>
        <p className="customerPage">Активні клієнти</p>
      </div>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row._id}
          checkboxSelection
          rows={dateAboutPatients}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

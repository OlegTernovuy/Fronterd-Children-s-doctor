import React, { useEffect, useState } from "react";

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataTeam } from "../components/links";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import { url } from "../../../App";

export const Employees = () => {
  const [dateAboutEmployees, setDateAboutEmployees] = useState([]);
  const [IsPending, setIsPending] = useState(false);

  const getData = async () => {
    try {
      const responce = await fetch(`${url}/statistics/employees`);

      if (responce.status === 200) {
        const data = await responce.json();
        setIsPending(false);
        setDateAboutEmployees(data);
      } else {
        setDateAboutEmployees([]);
        setIsPending(false);
      }
    } catch (err) {
      setDateAboutEmployees([]);
      setIsPending(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Ім'я",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Вік",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Телефон",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Рівень доступності",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? { color: "#dd5454" }
                : access === "manager"
                ? { color: "#76da97" }
                : { color: "#63b0e4" }
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "doctor" && <LockOpenOutlinedIcon />}
            <Typography color="grey" sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <div>
        <p className="pageName">Page</p>
        <p className="customerPage">Працівники</p>
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
          checkboxSelection
          rows={dateAboutEmployees}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

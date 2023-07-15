import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";

export const VacCard = ({
  id,
  title,
  price,
  deleteVac,
  handleShowEditVacForm,
  handlSelectVac,
  isAdministrator,
}) => {
  const showEditForm = () => {
    handleShowEditVacForm();
    handlSelectVac();
  };

  return (
    <div className="vacList1">
      <div className="vacName">{title}</div>
      {isAdministrator ? (
        <div className="PoslugaPrice">
          {price}
          <button onClick={showEditForm}>
            <EditIcon />
          </button>
          <button onClick={deleteVac}>
            <DeleteOutlineOutlinedIcon fontSize="large" color="black" />
          </button>
        </div>
      ) : (
        <div className="PoslugaPrice">{price}</div>
      )}
    </div>
  );
  // }
};

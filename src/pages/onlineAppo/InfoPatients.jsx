import "./appoint.css";

export const InfoPatients = ({
  name,
  date,
  time,
  phone,
  reason,
  addNewPatient,
}) => {
  return (
    <table className="listPatients">
      <tr className="patTable">
        <th className="Patient">{name}</th>
        <th className="Patient">{date}</th>
        <th className="Patient">{time}</th>
        <th className="Patient">{phone}</th>
        <th className="Patient">{reason}</th>
        <th className="Patient">
          <input
            className="PatientCheck"
            type="checkBox"
            onChange={addNewPatient}
          />
        </th>
      </tr>
    </table>
  );
};

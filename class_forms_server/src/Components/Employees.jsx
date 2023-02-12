import React from "react";
import { useState } from "react";

const Employees = () => {
  const [emps, setEmps] = useState(["Ram", "Krishna", "Sai"]);
  const handleDelete = (emp) => {
    //   let newEmp = emps.filter( ( employ ) => employ !== emp );
    //   setEmps(newEmp)

    setEmps(emps.filter((employ) => employ !== emp));
    console.log("Handle Delete called", emp);
  };
  return (
    <div>
      <ul>
        {emps.map((emp, i) => (
          <li key={i}>
            {emp}
            <span
              style={{
                color: "red",
                border: "1px solid red",
                margin: "pointer",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => {
                handleDelete(emp);
              }}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;

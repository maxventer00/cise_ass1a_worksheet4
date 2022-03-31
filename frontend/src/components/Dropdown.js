import React, { useState, useEffect } from "react";
// import SEPractices from "../dummydata/SEPractices";
import axios from "axios";

const DropDown = ({ sendDataToParent }) => {
  const [SEPractices, setSEPractices] = useState();

  const handleChange = (e) => {
    sendDataToParent(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/sepractices")
      .then((res) => {
        setSEPractices(res.data);
      })
      .catch((err) => {
        console.log("Error from getting SEPractices");
      });
  }, []);

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        <option value="">Select an SE Practice </option>
        {SEPractices
          ? SEPractices.map((SEPractice) => (
              <option key={SEPractice.practice}>{SEPractice.practice}</option>
            ))
          : null}
      </select>
    </div>
  );
};

export default DropDown;

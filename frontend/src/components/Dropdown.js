import React from "react";
import SEPractices from "../dummydata/SEPractices";

const optionItems = SEPractices.map((SEPractice) => (
  <option key={SEPractice.practice}>{SEPractice.practice}</option>
));

const DropDown = ({ sendDataToParent }) => {
  const handleChange = (e) => {
    sendDataToParent(e.target.value);
  };

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        <option value="">Select an SE Practice </option>
        {optionItems}
      </select>
    </div>
  );
};

export default DropDown;

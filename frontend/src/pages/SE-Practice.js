import React, { useState } from "react";
import Styles from "../components/tablestyle";
import articles from "../dummydata/articles";
import tablecolumns from "../components/tablecolumns";
import Table from "../components/Evidencetable";
import Dropdown from "../components/Dropdown";

function SEPractice() {
  const [userSelection, setUserSelection] = useState("");

  const sendDataToParent = (index) => {
    console.log(index);
    setUserSelection(index);
  };

  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Dropdown sendDataToParent={sendDataToParent} />
      {userSelection === "TDD" ? (
        <>
          <Styles>
            <Table data={articles} columns={tablecolumns} />
          </Styles>
        </>
      ) : null}
    </div>
  );
}

export default SEPractice;

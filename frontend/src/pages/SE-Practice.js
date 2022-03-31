import React, { useEffect, useState } from "react";
import Styles from "../components/tablestyle";
// import articles from "../dummydata/articles";
import tablecolumns from "../components/tablecolumns";
import Table from "../components/Evidencetable";
import Dropdown from "../components/Dropdown";
import axios from "axios";

function SEPractice() {
  const [userSelection, setUserSelection] = useState("");
  const [apiArticles, setApiArticles] = useState();

  const sendDataToParent = (index) => {
    setUserSelection(index);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/articles")
      .then((res) => {
        setApiArticles(res.data);
      })
      .catch((err) => {
        console.log("Error from getting Articles");
      });
  }, [userSelection]);

  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Dropdown sendDataToParent={sendDataToParent} />
      {userSelection === "TDD" ? (
        <>
          <Styles>
            <Table data={apiArticles} columns={tablecolumns} />
          </Styles>
        </>
      ) : null}
    </div>
  );
}

export default SEPractice;

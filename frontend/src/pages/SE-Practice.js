import React from "react";
import Styles from "../components/tablestyle";
import articles from "../dummydata/articles";
import tablecolumns from "../components/tablecolumns";
import Table from "../components/Evidencetable";

function SEPractice() {
  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Styles>
        <Table data={articles} columns={tablecolumns} />
      </Styles>
    </div>
  );
}

export default SEPractice;

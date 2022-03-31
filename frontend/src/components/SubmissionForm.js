import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function SubmissionForm() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  const history = useHistory();

  const onSubmit = (data) => {
    setResult(JSON.stringify(data));
    console.log(JSON.stringify(data));
    axios
      .post("http://localhost:8082/api/articles", JSON.stringify(data))
      .then((res) => {
        history.push("/SEPractice");
      })
      .catch((err) => {
        setResult("Error creating Article");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" />
      <p>
        <input {...register("authors")} placeholder="Authors" />
      </p>
      <p>
        <input {...register("source")} placeholder="Source" />
      </p>
      <p>
        <input {...register("pubyear")} placeholder="Publication Year" />
      </p>
      <p>
        <input {...register("doi")} placeholder="DOI" />
      </p>

      <select>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;

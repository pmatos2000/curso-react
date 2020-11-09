import ReactDOM from "react-dom";
import React from "react"; //Para usar o JSX
import "./index.css";
import First from "./components/basic/first";
import Second from "./components/basic/second";

ReactDOM.render(
  <div>
      <First />
      <Second title="Situação do aluno" student="Pedro" score="8" />
      <Second title="Situação do aluno" student="Lucas" score="3" />
  </div>,
  document.getElementById("root")
); 
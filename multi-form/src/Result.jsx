import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import { useNavigate } from "react-router-dom";

function Result(props) {
  const { data, setData } = useContext(DataContext);

  console.log(data);
  
  // JSX code for the Result component
  return 
    <div></div>
}
  

export default Result;

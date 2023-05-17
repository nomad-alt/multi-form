import React, { useState, useContext } from "react";
import { DataContext, useData } from "./DataContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email(),
    phoneNumber: yup.number().min(8).positive().integer().required(),
  })
  .required();

function FirstStep() {
  const { data, setData } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  function onSubmit(data) {
    navigate("/result");
    setData((prevData) => ({ ...prevData, data }));
  }

  console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="gmail" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input placeholder="number" {...register("phoneNumber")} />
      <p>{errors.phoneNumber?.message}</p>

      <input type="submit" />
    </form>
  );
}
export default FirstStep;
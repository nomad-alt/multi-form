import React, { useState, useContext } from "react";
import { DataContext, useData } from "./DataContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
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
    navigate("/step2");
    setData(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="name" {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input placeholder="lastname" {...register("lastName")} />
      <p>{errors.lastName?.message}</p>

      <input type="submit" />
    </form>
  );
}
export default FirstStep;
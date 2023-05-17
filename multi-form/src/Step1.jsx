import { useFormContext } from "./FormContext";
import { useForm } from "react-hook-form";
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Step1.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Efternamn är obligatoriskt"),
  firstName: Yup.string().required("Förnamn är obligatoriskt"),
  email: Yup.string().email("Ogiltig e-postadress").required("E-post är obligatoriskt"),
});

const Step1 = () => {
  const { updateFormData } = useFormContext();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateFormData(data);
    navigate("/step2");
  };

  return (
    <div className={`${styles.step1FormWrapper} step1-root`}>
      <div id={styles.step1Bg}></div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.step1FormContainer}>
        <FormControl isInvalid={errors.name} className={styles.step1FormControl}>
          <FormLabel htmlFor="name" className={styles.step1FormLabel}>Efternamn</FormLabel>
          <Input id="name" {...register("name")} className={styles.step1FormInput} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.firstName} className={styles.step1FormControl}>
          <FormLabel htmlFor="firstName" className={styles.step1FormLabel}>Förnamn</FormLabel>
          <Input id="firstName" {...register("firstName")} className={styles.step1FormInput} />
          <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email} className={styles.step1FormControl}>
          <FormLabel htmlFor="email" className={styles.step1FormLabel}>E-post</FormLabel>
          <Input id="email" {...register("email")} className={styles.step1FormInput} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" className={styles.step1FormButton}>Nästa</Button>
      </form>
    </div>
  );
};

export default Step1;

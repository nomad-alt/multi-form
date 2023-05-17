import { useFormContext } from "./FormContext";
import { useForm } from "react-hook-form";
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Step2.module.css";

const validationSchema = Yup.object().shape({
  address: Yup.string().required("Adress är obligatoriskt"),
  postCode: Yup.string().required("Postnummer är obligatoriskt"),
  city: Yup.string().required("Ort är obligatoriskt"),
  phone: Yup.string().required("Telefon är obligatoriskt"),
});

const Step2 = () => {
  const { formData, updateFormData } = useFormContext();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      address: formData.address || "",
      postCode: formData.postCode || "",
      city: formData.city || "",
      phone: formData.phone || "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateFormData(data);
    navigate("/step3");
  };

  return (
    <div className={`${styles.formWrapper} ${styles.step2}`}>
      <div id={styles.bg}></div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <FormControl isInvalid={errors.address} className={styles.formControl}>
          <FormLabel htmlFor="address" className={styles.formLabel}>Adress</FormLabel>
          <Input id="address" {...register("address")} className={styles.formInput} />
          <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.postCode} className={styles.formControl}>
          <FormLabel htmlFor="postCode" className={styles.formLabel}>Postnummer</FormLabel>
          <Input id="postCode" {...register("postCode")} className={styles.formInput} />
          <FormErrorMessage>{errors.postCode?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.city} className={styles.formControl}>
          <FormLabel htmlFor="city" className={styles.formLabel}>Ort</FormLabel>
          <Input id="city" {...register("city")} className={styles.formInput} />
          <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.phone} className={styles.formControl}>
          <FormLabel htmlFor="phone" className={styles.formLabel}>Telefon</FormLabel>
          <Input id="phone" {...register("phone")} className={styles.formInput} />
          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" className={styles.formButton}>Nästa</Button>
      </form>
    </div>
  );
};

export default Step2;

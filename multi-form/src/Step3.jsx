import { useFormContext } from "./FormContext";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const { formData, resetFormData } = useFormContext();
  const navigate = useNavigate();

  const handleReset = () => {
    resetFormData();
    navigate("/step1");
  };

  return (
    <Box>
      <h2>Resultat</h2>
      <p>Efternamn: {formData.name}</p>
      <p>Förnamn: {formData.firstName}</p>
      <p>E-post: {formData.email}</p>
      <p>Adress: {formData.address}</p>
      <p>Postnummer: {formData.postalCode}</p>
      <p>Ort: {formData.city}</p>
      <p>Telefon: {formData.phone}</p>
      <Button onClick={handleReset}>Återställ</Button>
    </Box>
  );
};

export default Step3;


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { FormProvider } from "./FormContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const App = () => {
  return (
    <ChakraProvider>
      <FormProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/step1" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
          </Routes>
        </Router>
      </FormProvider>
    </ChakraProvider>
  );
};

export default App;

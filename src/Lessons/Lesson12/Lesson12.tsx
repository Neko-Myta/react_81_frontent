/*import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import type { Employee } from "./type";
import {
  Lesson12Wrapper,
  InputConteiner,
  Result,
  ContentWrapper,
} from "./styles";
import { useState } from "react";
import { Title } from "../Lesson08/styles";
import { useFormik } from "formik";
import * as Yup from "yup";


function Lesson12() {
  const [employee, setEmployee] = useState<Employee[]>([]);
  const [nextId, setNextId] = useState({
    name: "",
    surname: "",
    age: 0, // Changed to number to match schema
    job: "",
  });

  const employeeSchema = Yup.object().shape({
    name: Yup.string()
      .required("Field name is required")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
    surname: Yup.string()
      .required("Field surname is required")
      .max(50, "Max 50 symbols"), // Fixed message to match limit
    age: Yup.number()
      .typeError("Must be a number")
      .required("Field age is required")
      .min(18, "Min age 18")
      .max(80, "Max age 80"),
    job: Yup.string().max(30, "Max 30 symbols"),
  });

   const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      job: '',
    },
    validationSchema: employeeSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      const newEmployee: Employee = {
        id: nextId.toString(), // Use pure counter instead of Date.now()
        text: `${values.name}, ${values.surname}, ${values.age}${values.job ? `, ${values.job}` : ''}`,
      };
      setEmployee([...employee, newEmployee]);
      setNextId(nextId + 1); 
      formik.resetForm();
    },
  });

  return (
    <Lesson12Wrapper>
      <ContentWrapper>
        <InputConteiner>
          <Title>Create Employee</Title>

          <Input
            type="text"
            name="name"
            label="Name*"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
          <Input
            type="text"
            name="surname"
            label="Surname*"
            placeholder="Enter surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.errors.surname}
          />
          <Input
            type="number"
            name="age"
            label="Age*"
            placeholder="Enter age"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.errors.age}
          />
          <Input
            type="text"
            name="job"
            label="Job Position"
            placeholder="Enter job"
            value={formik.values.job}
            onChange={formik.handleChange}
            error={formik.errors.job}
          />

          <Button name="ДОБАВИТЬ" onButtonClick={formik.handleSubmit} />
        </InputConteiner>

        {employee.length > 0 && (
          <Result>
            {employee.map((emp) => (
              <div key={emp.id}>{emp.text}</div>
            ))}
          </Result>
        )}
      </ContentWrapper>
    </Lesson12Wrapper>
  );
}

export default Lesson12;
*/
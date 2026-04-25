import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EmployeeContext } from "../../components/LayoutEmployee/NameContext";
import { ContactForm, ContentWrapper, CreateButton, EmployeeSection, FieldContainer, FieldError, Page, Title } from "./styles";


export default function CreateEmployee() {
  const { addEmployee } = useContext(EmployeeContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      job: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().min(2).max(50).required("Required"),
      surname: Yup.string().max(15).required("Required"),
      age: Yup.number().min(18).max(80).required("Required"),
      job: Yup.string().max(30),
    }),

    onSubmit: (values) => {
      addEmployee({
        name: values.name,
        surname: values.surname,
        age: Number(values.age),
        job: values.job,
      });
    },
  });

  return (
    <Page>
          <EmployeeSection>
            <Title>Create Employee</Title>
    
            <ContentWrapper>
              <ContactForm onSubmit={formik.handleSubmit}>
                <FieldContainer>
                  <label htmlFor="name">Name*</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter employee Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // для отслеживания касания
                  />
                  {/* Ошибка покажется только если поле 'трогали' И есть текст ошибки */}
                  {formik.touched.name && formik.errors.name && (
                    <FieldError>{formik.errors.name}</FieldError>
                  )}
                  
                </FieldContainer>
    
                <FieldContainer>
                  <label htmlFor="surname">Surname*</label>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Enter employee Surame"
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.surname && formik.errors.surname && (
                    <FieldError>{formik.errors.surname}</FieldError>
                  )}
                </FieldContainer>
    
                <FieldContainer>
                  <label htmlFor="age">Age*</label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter employee Age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    //onBlur={formik.handleBlur}
                  />
                  {formik.touched.age && formik.errors.age && (
                    <FieldError>{formik.errors.age}</FieldError>
                  )}
                </FieldContainer>
    
                <FieldContainer>
                  <label htmlFor="job">Job Position</label>
                  <input
                    id="job"
                    type="text"
                    placeholder="Enter employee Position"
                    value={formik.values.job}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </FieldContainer>
    
                <CreateButton type="submit">Create</CreateButton>
              </ContactForm>
    
              
            </ContentWrapper>
          </EmployeeSection>
        </Page>
  );
}
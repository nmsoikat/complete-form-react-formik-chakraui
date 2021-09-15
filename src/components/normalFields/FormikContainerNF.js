import { Formik, Form } from "formik";
import FormikControlNF from "./FormikControlNF";
import * as Yup from "yup";

const bodySizeOptions = [
  { key: "", value: "Select One" },
  { key: "xxl", value: "XXL" },
  { key: "xl", value: "XL" },
  { key: "lg", value: "LG" },
  { key: "md", value: "MD" },
  { key: "sm", value: "sm" },
];

const skillOptions = [
  { key: "html", value: "HTML" },
  { key: "css", value: "CSS" },
  { key: "js", value: "Javascript" },
];

const langOptions = [
  { key: "bn", value: "Bangla" },
  { key: "en", value: "English" },
  { key: "ja", value: "Japanese" },
  { key: "ko", value: "Korean" },
];

const initialValues = {
  name: "",
  email: "",
  password: "",
  comment: "",
  bodySize: "",
  skillSet: [],
  lang: "",
  date: "",
  chooseFile: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("required!"),
  email: Yup.string().email("invalid email format").required("required!"),
  password: Yup.string().required("required!"),
  comment: Yup.string().required("required!"),
  bodySize: Yup.string().required("required!"),
  skillSet: Yup.array().min(1, "required"),
  lang: Yup.string().required("required!"),
  date: Yup.string().required("required!"),
  chooseFile: Yup.string().required("required!"),
});

const onSubmit = (values) => {
  console.log(values);
};

// using only formik and formik component without any ui-lib
function FormikContainerNF() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="normal-form">
          <FormikControlNF
            control="input"
            label="Name"
            name="name"
            type="text"
          />
          <FormikControlNF
            control="input"
            label="Email"
            name="email"
            type="email"
          />
          <FormikControlNF
            control="input"
            label="Password"
            name="password"
            type="password"
          />

          <FormikControlNF
            control="select"
            options={bodySizeOptions}
            label="Select size"
            name="bodySize"
          />

          <FormikControlNF
            control="checkbox"
            options={skillOptions}
            label="Mark your skills"
            name="skillSet"
          />

          <FormikControlNF
            control="radio"
            options={langOptions}
            label="Select Language"
            name="lang"
          />

          <FormikControlNF control="date" label="Select Date" name="date" />

          <FormikControlNF
            control="file"
            label="Select file"
            name="chooseFile"
          />

          <FormikControlNF control="textarea" label="Comment" name="comment" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainerNF;

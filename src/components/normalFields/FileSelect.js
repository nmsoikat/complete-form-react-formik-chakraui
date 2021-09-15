import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

function FileSelect({ label, name, ...rest }) {
  return (
    <div className="from-control">
      <label htmlFor={name}>{label}</label>
      <Field type="file" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default FileSelect;

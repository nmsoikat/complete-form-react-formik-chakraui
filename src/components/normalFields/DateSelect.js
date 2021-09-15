import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

function DateSelect({ label, name, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field type="date" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DateSelect;

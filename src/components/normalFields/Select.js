import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

function Select({ options, label, name, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.key}>
            {option.value}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;

import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../TextError";

function CheckboxGroup({ options, label, name, ...rest }) {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          //field: { name, value, onChange, onBlur }
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <input
                {...field}
                type="checkbox"
                id={option.key}
                value={option.key}
              />
              <label htmlFor={option.key}>{option.value}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckboxGroup;

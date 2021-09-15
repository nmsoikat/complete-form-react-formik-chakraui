import CheckboxGroup from "./CheckboxGroup";
import DateSelect from "./DateSelect";
import FileSelect from "./FileSelect";
import Input from "./Input";
import RadioBtnGroup from "./RadioBtnGroup";
import Select from "./Select";
import Textarea from "./Textarea";

function FormControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "radio":
      return <RadioBtnGroup {...rest} />;
    case "date":
      return <DateSelect {...rest} />;
    case "file":
      return <FileSelect {...rest} />;
    default:
      return null;
  }
}

export default FormControl;

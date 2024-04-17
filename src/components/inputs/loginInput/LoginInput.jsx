import { useField } from "formik";
import "./style.css";

function LoginInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="input_wrap">
      <input
        type={props.type}
        name={field.name}
        placeholder={placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default LoginInput;

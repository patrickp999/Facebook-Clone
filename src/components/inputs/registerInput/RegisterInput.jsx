import { ErrorMessage, useField } from "formik";
import "./style.css";
import { useMediaQuery } from "react-responsive";

function RegisterInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);
  const isDesktopView = useMediaQuery({
    query: "(min-width: 850px)",
  });

  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div
          className={`input_error ${isDesktopView && "input_error_desktop"}`}
          style={{ transform: "translateY(4px)" }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={isDesktopView ? "error_arrow_left" : "error_arrow_top"}
            ></div>
          )}
        </div>
      )}
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        type={props.type}
        name={field.name}
        placeholder={placeholder}
        onChange={field.onChange}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && bottom && (
        <div
          className={`input_error ${isDesktopView && "input_error_desktop"}`}
          style={{ transform: "translateY(4px)" }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={
                isDesktopView ? "error_arrow_left" : "error_arrow_bottom"
              }
            ></div>
          )}
        </div>
      )}
      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{ top: `${!bottom && !isDesktopView ? "63%" : "15px"}` }}
        ></i>
      )}
    </div>
  );
}

export default RegisterInput;

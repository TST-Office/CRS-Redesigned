export type Children = {
  children: React.ReactNode;
};

export type InputProps = {
  name?: string;
  value?: string;
  placeHolder?: string;
  label?: boolean;
  labelValue?: string
  desc?: boolean;
  descValue?: string
  error?: boolean;
  errorValue?: string
  classNameContainer?: string;
  classNameLabel?: string;
  classNameInput?: string;
  classNameDesc?: string;
  classNameError?: string;
  // for input value
  inputChangeHandler?: () => void;
  // for onfocus handler
  onFocusHandler?: () => void;
  // for onblur handler
  onBlurHandler?: () => void;
  //for onSubmit handler
  onSubmitHandler?: () => void;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
};

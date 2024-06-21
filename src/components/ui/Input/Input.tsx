import { InputProps } from "@/utility/types";

const Input = ({
  name,
  value,
  placeHolder,
  label,
  labelValue,
  desc,
  descValue,
  error,
  errorValue,
  classNameContainer,
  classNameLabel,
  classNameInput,
  classNameDesc,
  classNameError,
  inputChangeHandler,
  onFocusHandler,
  onBlurHandler,
  onSubmitHandler,
  type,
}: InputProps): JSX.Element => {
  return (
    <div className={`${classNameContainer} flex flex-col w-full bg-inherit`}>
      {label && (
        <label className={`${classNameLabel} my-1 text-white`}>
          {labelValue}
        </label>
      )}
      <input
        placeholder={placeHolder}
        className={`${classNameInput} outline-none text-white border-2 rounded h-10 bg-dominant-variant `}
      />
      {desc && (
        <span className={`${classNameDesc} my-0 text-text-shade-white`}>
          {descValue}
        </span>
      )}

      {error && (
        <span className={`${classNameError} my-0 text-red`}>{errorValue}</span>
      )}
    </div>
  );
};

export default Input;

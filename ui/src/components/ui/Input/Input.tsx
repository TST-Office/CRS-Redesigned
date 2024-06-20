import { InputProps } from "@/utility/types";

const Input = ({name, type, label, error}: InputProps): JSX.Element => {
  return (
    <div>
      {label && <label>Field Label</label>}
      <input />
      {error && <span>Error</span>}
    </div>
  );
}

export default Input;
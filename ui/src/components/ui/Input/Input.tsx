import { InputProps } from "@/utility/types";
import React, { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...otherProps }, ref) => {
    return (
      <div >
        {label && <label>Field Label</label>}
        <input ref={ref} {...otherProps}/>
        {error && <span>Error</span>}
      </div>
    );
  }
);

// const Input = ({label, error}: InputProps): JSX.Element => {
//   return (
//     <div ref={itemRef}>
//       {label && <label>Field Label</label>}
//       <input />
//       {error && <span>Error</span>}
//     </div>
//   );
// }

export default Input;

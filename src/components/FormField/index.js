import React from "react";

import { Wrapper } from "./styles";

function FormField({ name, value, onChange, placeholder, label, type, rows }) {
  return (
    <Wrapper>
      <label htmlFor="">
        {label}:{" "}
        {type === "textarea" ? (
          <textarea
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
          />
        ) : (
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </label>
    </Wrapper>
  );
}

export default FormField;

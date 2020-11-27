import React from "react"
import "./Input.scss"

const Input = (props) => {
  const {
    id,
    onChangeFn,
    onBlurFn,
    value,
    touched,
    errors,
    label,
    textarea,
    placeholder,
  } = props
  return (
    <div className="inputItem">
      <input
        type="text"
        // @ts-ignore
        as={textarea ? "textarea" : "input"}
        rows="6"
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChangeFn}
        onBlur={onBlurFn}
        value={value}
        invalid={Boolean(touched && errors)}
        valid={Boolean(touched && !errors)}
      />
      <label htmlFor={id}>{(errors && touched && errors) || label}</label>
    </div>
  )
}

export default Input

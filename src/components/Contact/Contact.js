import React from "react"
import "./Contact.scss"
import FormSchema from "./FormSchema/FormSchema"
const Contact = () => {
  return (
    <section className="contact">
      <h3 className="heading-third">Napisz do mnie</h3>
      <div className="contact__container">
        <FormSchema />
      </div>
    </section>
  )
}
export default Contact

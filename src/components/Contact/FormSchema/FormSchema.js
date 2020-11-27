import React, { useState, useEffect } from "react"
import "./FormSchema.scss"
import Input from "../../UI/Input/Input"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import Recaptcha from "react-recaptcha"
import LazyLoad from "react-lazyload"
import axios from "axios"
import { SITE_RECAPTCHA_KEY, GET_FORM_KEY } from "../../../env"

const FormSchema = () => {
  const [token, setToken] = useState("")
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Musisz podać swoje imię!"),
    email: Yup.string()
      .email("Email, jest niepoprawny!")
      .required("Podaj swój Email!"),
    message: Yup.string()
      .min(6, "Wiadomość jest za krótka!")
      .required("Te pole nie może pozostać puste!"),
  })

  const initialValues = {
    name: "",
    email: "",
    message: "",
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (token) {
          const sendMessage = async () => {
            try {
              await axios({
                url: `https://getform.io/f/${GET_FORM_KEY}`,
                method: "POST",
                data: values,
              })
              setSubmitting(false)
              resetForm()
            } catch (err) {
              setSubmitting(false)
            }
          }
          sendMessage()
        } else {
          setSubmitting(false)
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />
          <Input
            id="name"
            label="imie"
            placeholder="twoje imie i nazwisko"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.name}
            touched={touched.name}
            errors={errors.name}
            name="name"
          />
          <Input
            id="email"
            label="email"
            placeholder="twój@mail.com"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.email}
            touched={touched.email}
            errors={errors.email}
            name="email"
          />
          <Input
            textarea
            id="message"
            label="wiadomość"
            placeholder="wpisz swoją wiadomość tutaj"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.message}
            touched={touched.message}
            errors={errors.message}
            name="message"
          />

          <LazyLoad height={70} offset={280}>
            <Recaptcha
              sitekey={SITE_RECAPTCHA_KEY}
              render="explicit"
              theme="dark"
              verifyCallback={(response) => {
                setToken(response)
              }}
            />
          </LazyLoad>
          <div className="button-container">
            <button disabled={isSubmitting} type="submit">
              Wyślij
              {!isSubmitting}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
export default FormSchema

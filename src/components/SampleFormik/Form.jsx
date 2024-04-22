import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import * as Yup from "yup";

export const SampleForm = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const validateschema = Yup.object({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    dob: Yup.date().required("Dob is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    loginid: Yup.string().required("Login ID is required"),
    password: Yup.string().required("Password is required"),
    confirmpassword: Yup.string().required(
      "Confirm Password should br same as password"
    ),
    captcha: Yup.string().required("Captcha is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      dob: "",
      email: "",
      loginIdSameAsEmail: "",
      loginid: "",
      password: "",
      confirmpasswordVerify: "",
      captcha: "",
    },
    validationSchema: validateschema,

    onSubmit: (values) => {
      let user_captcha_value = values.captcha;
      if (validateCaptcha(user_captcha_value)) {
        console.log(values);
      } else {
        console.log("Captcha Does Not Match");
        alert("Captcha does not Match");
      }
    },
  });

  console.log(formik.errors);

  return (
    <>
      <div className="App">
        <Box component="section">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <TextField
              id="name"
              type="text"
              name="name"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            {!formik.values.name ? formik.errors.name : null}
            <br />
            <label htmlFor="surname">Surname:</label>

            <TextField
              id="surname"
              type="text"
              name="surname"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
            {!formik.values.surname ? formik.errors.surname : null}
            <br />
            <label htmlFor="dob">Date of Birth:</label>
            <TextField
              id="dob"
              type="date"
              name="dob"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.dob}
            />
            {!formik.values.dob ? formik.errors.dob : null}
            <br />
            <label htmlFor="email">Email:</label>

            <TextField
              id="email"
              type="email"
              name="email"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {!formik.values.email ? formik.errors.email : null}
            <br />
            <div className="radio-in-form">
              <label>
                Do you want your Login Id <br />
                to be same as E-mail Id?:
              </label>
              <RadioGroup
                row
                name="loginIdSameAsEmail"
                value={formik.values.loginIdSameAsEmail}
                onChange={formik.handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </div>
            <br />
            <label htmlFor="loginid">Login ID:</label>
            <TextField
              id="loginid"
              type="email"
              name="loginid"
              size="small"
              onChange={formik.handleChange}
              value={
                formik.values.loginIdSameAsEmail === "yes"
                  ? (formik.values.loginid = formik.values.email)
                  : (formik.values.loginid = "")
              }
            />

            {!formik.values.loginid ? formik.errors.loginid : null}
            <br />
            <label htmlFor="password">Password:</label>
            <TextField
              id="password"
              type="password"
              name="password"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            {!formik.values.password ? formik.errors.password : null}
            <br />
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <TextField
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />

            {!formik.values.confirmpassword
              ? formik.errors.confirmpassword
              : null}
            <br />
            <label htmlFor="captcha">Captcha:</label>
            <LoadCanvasTemplate />
            <TextField
              id="captcha"
              type="text"
              name="captcha"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.captcha}
            />

            <br />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
};

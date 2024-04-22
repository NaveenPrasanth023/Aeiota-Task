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
  const onSubmit = (values) => {
    console.log(values);
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // useEffect(() => {
  //   doSubmit = () => {
  //     let user_captcha_value = captcha;

  //     if (validateCaptcha(user_captcha_value)) {
  //       alert("Captcha Matched");
  //     } else {
  //       alert("Captcha Does Not Match");
  //     }
  //   };
  // }, [captcha]);

  const validateschema = Yup.object({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    dob: Yup.date().required("Dob is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    loginid: Yup.string().required("Login ID is required"),
    password: Yup.string().required("Password is required"),
    confirmpassword: Yup.string().required("Confirm Password is required"),
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
      confirmpassword: "",
      captcha: "",
    },
    validationSchema: validateschema,
    // validate: (values) => {
    //   const error = {};
    //   if (!values.name) {
    //     error.name = "Required";
    //   }
    //   return error;
    // },
    onSubmit: (values) => {
      console.log(values);
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
            {/* <input
              id="name"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            /> */}
            {!formik.values.name ? formik.errors.name : null}
            <br />
            <label htmlFor="surname">Surname:</label>
            {/* <input
              id="surname"
              type="text"
              name="surname"
              onChange={formik.handleChange}
            /> */}
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
            {/* <input
              id="dob"
              type="date"
              name="dob"
              onChange={formik.handleChange}
            /> */}
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
            {/* <input
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            /> */}
            {/* <FormLabel htmlFor="email">Email</FormLabel> */}
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
              {/* <label>
              <input
                type="radio"
                name="loginIdSameAsEmail"
                // checked={() => {
                // formik.values.loginIdSameAsEmail = "yes";
                // console.log("ndjdjd");
                // }}
                // onClick={() => {
                //   console.log("clickesd");
                //   formik.values.loginIdSameAsEmail === "yes"
                //     ? (formik.values.loginid = formik.values.email)
                //     : null;
                // }}
                // onChange={(e) => {
                //   console.log(e.target.value);
                // }}
                value="yes"
                onChange={formik.handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="loginIdSameAsEmail"
                value="no"
                // checked={formik.values.loginIdSameAsEmail === false}
                // onChange={formik.handleChange}
              />
              No
            </label> */}
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
            {/* <input
              id="loginid"
              type="email"
              name="loginid"
              value={
                formik.values.loginIdSameAsEmail === "yes"
                  ? // ? console.log("hi")
                    (formik.values.loginid = formik.values.email)
                  : (formik.values.loginid = "")
              }
              onChange={formik.handleChange}
            />{" "} */}
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
            {/* <input
              id="password"
              type="password"
              name="password"
              onChange={formik.handleChange}
            />{" "} */}
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
            {/* <input
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              onChange={formik.handleChange}
            />{" "} */}
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
            {/* <input
              id="captcha"
              type="text"
              name="captcha"
              onChange={formik.handleChange}
            /> */}
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
//sample

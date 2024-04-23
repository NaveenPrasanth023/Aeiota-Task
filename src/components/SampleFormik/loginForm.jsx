import { Box, Button, TextField, Typography } from "@mui/material";
import { Form, useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      loginID: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const storedLoginData = JSON.parse(localStorage.getItem("loginData"));

      values.loginID === storedLoginData.id
        ? values.password === storedLoginData.password
          ? navigate("/home")
          : navigate("/")
        : alert("no users");
    },
  });

  return (
    <>
      <Box component="section">
        <Typography variant="h5">Login Form</Typography>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="loginID">Login ID:</label>
          <TextField
            id="loginID"
            type="email"
            name="loginID"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.loginId}
          />

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
          <br />

          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/signup"
            style={{ textDecoration: "none" }}
          >
            Signup
          </Button>
        </form>
      </Box>
    </>
  );
};
export default LoginForm;

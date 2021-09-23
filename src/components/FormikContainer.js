import { Grid, TextField, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "block",
    border: "1px solid #ddd",
    borderRadius: "15px",
    padding: "15px",

    "& .MuiFormControl-root": {
      width: "100%",
      margin: "8px",
    },
  },
}));

function FormikContainer() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" minHeight="100vh">
      <Grid item container md={6}>
        <img src="img/login-bg.jpg" alt="login" width="100%" />
      </Grid>
      <Grid item container md={6}>
        <form className={classes.formContainer}>
          <Box sx={{ display: "flex" }}>
            <TextField label="First Name" name="fname" />
            <TextField label="Last Name" name="lname" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField type="email" label="Email" />
          </Box>
        </form>
      </Grid>
    </Grid>
  );
}

export default FormikContainer;

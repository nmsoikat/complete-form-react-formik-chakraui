import { Box, Grid } from '@mui/material';
import { borderRadius } from '@mui/system';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

function FormikContainer() {
	return (
		<Grid container spacing={4} alignItems="center" minHeight="100vh">
			<Grid item container md={8}>
				<img src="img/login-bg.jpg" alt="login" width="100%" />
			</Grid>
			<Grid item container md={4}>
				<form>
					<input type="text" />
				</form>
			</Grid>
		</Grid>
	);
}

export default FormikContainer;

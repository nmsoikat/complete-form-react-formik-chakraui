import './App.css';
import FormikContainerNF from './components/normalFields/FormikContainerNF';
import Container from '@mui/material/Container';
import FormikContainer from './components/FormikContainer';

function App() {
	return (
		<main>
			<Container sm="sm">
				<FormikContainer />
			</Container>
			{/* <FormikContainerNF /> */}
		</main>
	);
}

export default App;

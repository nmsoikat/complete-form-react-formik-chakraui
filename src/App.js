import "./App.css";
import FormikContainerNF from "./components/normalFields/FormikContainerNF";
import Container from "@mui/material/Container";
import FormikContainer from "./components/FormikContainer";
import { ThemeProvider } from "@mui/styles";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <main>
      <Container sm="sm">
        <FormikContainer />
      </Container>
      {/* <FormikContainerNF /> */}
      <CssBaseline />
    </main>
  );
}

export default App;

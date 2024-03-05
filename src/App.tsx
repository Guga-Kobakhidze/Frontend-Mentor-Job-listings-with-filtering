import { Box } from "@mui/material";
import Header from "./components/Header";
import CardList from "./pages/CardList";

function App() {
  return (
    <Box className="container">
      <Header />
      <CardList />
    </Box>
  );
}

export default App;

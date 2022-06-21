import Container from "react-bootstrap/Container";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import { OrderPhasesProvider } from "./contexts/OrderPhases";
import Main from "./pages/Main";

function App() {
  return (
    <Container className="App">
      <OrderDetailsProvider>
        <OrderPhasesProvider>
          <Main />
        </OrderPhasesProvider>
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;

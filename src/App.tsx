import { Provider } from "./contexts";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
}

import { AppRouter } from "@/app/router/AppRouter";
import AppProviders from "@/app/providers/AppProviders"; // <-- Đã bỏ dấu { } ở đây

function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
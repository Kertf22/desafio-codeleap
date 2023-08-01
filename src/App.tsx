import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/createStore";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="h-screen bg-bg flex justify-center items-center">
        <RouterProvider router={router} />
      </div>
    
    </ReduxProvider>
  );
}

export default App;

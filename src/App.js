import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Cart from "./components/routes/Cart";
import Home from "./components/routes/Home";
import LogIn from "./components/routes/LogIn";
import PageNotFound from "./components/shared/PageNotFound";
import RouteLayout from "./components/shared/hoc/RootLayout";




function App() {
  const routeDefinition = createRoutesFromElements(
    <Route path="/" exact element={<RouteLayout />} errorElement={<PageNotFound />}>
      <Route path="" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />

    </Route>
  );
  const router = createBrowserRouter(routeDefinition);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

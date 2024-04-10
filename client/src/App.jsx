// Import necessary modules
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load the components
const Home = lazy(() => import("./pages/home.page"));
const About = lazy(() => import("./pages/about.page"));
const Dashboard = lazy(() => import("./pages/dashboard.page"));
const Login = lazy(() => import("./pages/login.page"));
const Register = lazy(() => import("./pages/register.page"));
const Projects = lazy(() => import("./pages/projects.page"));

//Load the Root component
const Root = lazy(() => import("./routes/root.route"));

// Create a router using the createBrowserRouter function from react-router-dom
// and define the routes for the application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:projectId", element: <Projects /> },
    ],
  },
]);

// Define the App component, which wraps the RouterProvider component with the
// created router and a Suspense component to handle lazy loading
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

// Export the App component as the default export
export default App;

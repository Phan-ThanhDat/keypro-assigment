import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  redirect,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Toaster } from "@components";

import AppProvider from "./providers/AppProviders";

function Root() {
  return (
    <AppProvider>
      <Outlet />
      <Toaster />
    </AppProvider>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        path="/app"
        lazy={async () => {
          const { Dashboard } = await import("@layouts/Dashboard");
          return { Component: Dashboard };
        }}
      >
        <Route
          index
          lazy={async () => {
            const { HomePage } = await import("@pages/Home");
            return { Component: HomePage };
          }}
        />
      </Route>
      <Route
        index
        loader={async () => {
          return redirect("/app");
        }}
      />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

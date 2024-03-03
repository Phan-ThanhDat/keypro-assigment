import { Outlet } from "react-router-dom";

import { AppHeader } from "@components";

export function Dashboard() {
  return (
    <div className="flex h-screen flex-col">
      <AppHeader />
      <Outlet />
    </div>
  );
}

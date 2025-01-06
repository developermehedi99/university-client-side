import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
];

export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "create-admin",
    path: "/admin/create-admin",
    element: <CreateAdmin />,
  },
  {
    name: "create-faculty",
    path: "/admin/create-faculty",
    element: <CreateFaculty />,
  },
  {
    name: "create-admin",
    path: "/admin/create-student",
    element: <CreateStudent />,
  },
];

import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    name: "dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

//programitical way

// export const adminSidebarItems = adminPaths.reduce((acc: TSidebar[], item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//     });
//   }

//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: <NavLink to={`/admin//${child.path}`}>{child.name}</NavLink>,
//       })),
//     });
//   }

//   return acc;
// }, []);

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// export const adminPaths2 = [
//   {
//     name: "Dashboard",
//     path: "/admin/dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     name: "create-admin",
//     path: "/admin/create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     name: "create-faculty",
//     path: "/admin/create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     name: "create-admin",
//     path: "/admin/create-student",
//     element: <CreateStudent />,
//   },
// ];

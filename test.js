import { Children } from "react";

export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "<AdminDashboard />",
  },
  {
    name: "user management",
    Children: [
      {
        name: "create-admin",
        path: "/admin/create-admin",
        element: "<CreateAdmin />",
      },
      {
        name: "create-faculty",
        path: "/admin/create-faculty",
        element: "<CreateFaculty />",
      },
      {
        name: "create-admin",
        path: "/admin/create-student",
        element: "<CreateStudent />",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.Children) {
    item.Children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);
console.log(newArray);

console.log(11);

import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferdCourse from "../pages/faculty/OfferdCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offer Course",
    path: "offer-course",
    element: <OfferdCourse />,
  },
];

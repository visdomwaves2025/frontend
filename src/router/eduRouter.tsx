// eduRouter.tsx
import { type RouteObject } from 'react-router-dom';
import EducationLandingPage from '@/views/education/eduLanding';
import Navbar from '@/views/education/Services/Home/Navbar.jsx';

import Home from '@/views/education/Services/Home/Home.jsx';
import Parent from '@/views/education/Services/Parent';
import Patent from '@/views/education/Services/Patent';
import Students from '@/views/education/Services/Student';
import Contact from '@/views/education/Services/Contact';
import Login from '@/views/education/Authentication/Login';
import SignUp from '@/views/education/Authentication/SignUp';

// ✅ Helper wrapper to include Navbar
const withNavbar = (Component: React.FC | JSX.Element) => {
  // Return a JSX element directly
  return (
    <>
      <Navbar />
      {typeof Component === "function" ? <Component /> : Component}
    </>
  );
};

export const eduRoutes: RouteObject[] = [
  { path: '/edu', element: <EducationLandingPage /> }, // optional, no navbar here

  // All pages wrapped with Navbar
  { path: '/home', element: withNavbar(Home) },
  { path: '/parent', element: withNavbar(Parent) },
  { path: '/patent', element: withNavbar(Patent) },
  { path: '/student', element: withNavbar(Students) },
  { path: '/contact', element: withNavbar(Contact) },
  { path: '/loginpage', element: withNavbar(Login) },
  { path: '/signuppage', element: withNavbar(SignUp) },
];

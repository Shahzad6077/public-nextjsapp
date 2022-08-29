import Navbar from "../NavBar";
import Footer from "../Footer";
import clsx from "clsx";

const Layout = ({ children, className }) => {
  return (
    <main className={clsx("", className)}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;

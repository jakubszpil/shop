import { withRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Layout);

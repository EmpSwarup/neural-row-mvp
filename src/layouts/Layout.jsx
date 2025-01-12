import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};
export default layout;

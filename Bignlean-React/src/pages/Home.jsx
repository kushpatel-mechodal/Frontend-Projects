import Header from "../components/Header.jsx";
import ProductPath from "../components/ProductPath.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Home = () => {
  return (
    <>
      <Header />

      <main className="container">
        <ProductPath />
        <div className="page_layout">
          <Sidebar />
        </div>
      </main>
    </>
  );
};

export default Home;

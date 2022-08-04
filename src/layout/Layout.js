import Header from "../components/Header/header";
import SideBar from "../components/Sidebar/SideBar";

const LayOut = ({ children }) => {
  return (
    <main>
      <SideBar />
      <section className="content">
        <Header />
        {children}
      </section>
    </main>
  );
};

export default LayOut;

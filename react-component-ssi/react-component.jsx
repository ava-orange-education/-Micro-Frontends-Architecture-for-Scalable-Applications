import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <h2>Welcome to My Website</h2>
        <p>This is the main content area.</p>
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;

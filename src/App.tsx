import BookTrip from "./sections/BookTrip";
import Comments from "./sections/Comments";
import Companies from "./sections/Companies";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./components/Nav";
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";
import TopDestination from "./sections/TopDestination";

const App = () => {
  return (
    <main className="max-container relative">
      <Nav />
      <Hero />
      <Services />
      <TopDestination />
      <BookTrip />
      <Comments />
      <Companies />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default App;

import "../Home/Home.css";
import SearchForm from "../SearchForm/SearchForm";

function Home() {
  return (
    <main className="home">
      <h1 className="home__title">What's going on in the world?</h1>
      <h2 className="home__subtitle">
        Find the latest news on any topic and save them in your personal account
      </h2>
      <SearchForm />
    </main>
  );
}

export default Home;

import css from './Home.module.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook app</title>
      </Helmet>
      <section className="section">
        <div className={css.welcome}>
          <h2 className="title">Welcome in Phonebook app</h2>
          <p className={css.paragraph}>
            Please log in or register to use the phonebook.
          </p>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;

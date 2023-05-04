import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <main>
      <section className="section">
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>
            Username
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Z\u0400-\u04FF]+(([' -]|[a-zA-Z\u0400-\u04FF ])?[a-zA-Z\u0400-\u04FF]*)*$v"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={css.label}>
            E-mail
            <input className={css.input} type="email" name="email" required />
          </label>
          <label className={css.label}>
            Password
            <input
              className={css.input}
              type="password"
              name="password"
              required
            />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
        </form>
      </section>
    </main>
  );
};

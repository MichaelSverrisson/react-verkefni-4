import { Link } from "react-router-dom";

export function Layout({ title, children, footer, loggedIn }) {
    return (
        <div className={s.Layout}>
            <header className={s.Layout__header}>
                <Link to='/'>{title}</Link>
                {loggedIn ? <Link to="/logout">Útskráning</Link> : <Link to="/login">Innskráning</Link>}
            </header>
            <main className={s.layout__main}>
                {children}
            </main>
            <footer className={s.layout__footer}>{footer}</footer>
        </div>
    );
}
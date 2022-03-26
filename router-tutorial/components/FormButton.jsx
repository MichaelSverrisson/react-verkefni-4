export const formButton = (props) => {
    return (
        <button type="submit" className={s.login__button}>
            {props.text}
        </button>
    );
};
import style from "./errorMessage.module.css";
export default function ErrorMessage({ children }) {
  return (
    <>
      <label className={style.errorMessage}> {children}</label>
    </>
  );
}

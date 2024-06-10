export default function Input({ id, error, ...props }) {
  return (
    <div className={error ? "invalid" : ""}>
      <input id={id} {...props} />
      <div className="error-text">{error && <div>{error}</div>}</div>
    </div>
  );
}

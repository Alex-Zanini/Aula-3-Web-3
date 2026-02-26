export function Footer({ children }) {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "white",
        textAlign: "center",
        padding: "15px",
        fontSize: "14px",
      }}
    >
      {children}
    </footer>
  );
}
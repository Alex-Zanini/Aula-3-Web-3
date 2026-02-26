export function Main({ children }) {
  return (
    <main
      style={{
        minHeight: "70vh",
        padding: "20px",
        backgroundColor: "#000000",
      }}
    >
      {children}
    </main>
  );
}
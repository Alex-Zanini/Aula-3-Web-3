export default function Banner() {
  function handleClick() {
    alert("Botão do banner clicado!");
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        maxWidth: 420,
      }}
    >
      <h2 style={{ margin: 0 }}>Banner</h2>

      <p style={{ marginTop: 8 }}>
        Este card é um componente reutilizável. Você pode usar quantas vezes
        quiser.
      </p>

      <button onClick={handleClick} style={{ padding: "8px 12px" }}>
        Clique aqui
      </button>
    </div>
  );
}

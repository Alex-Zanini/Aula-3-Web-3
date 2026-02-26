function Card({ titulo, texto, botaoTexto}){
    return (
        <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12 }}>
            <h3>{titulo}</h3>
            <p>{texto}</p>
            <button>{botaoTexto}</button>
        </div>
    )
}

export default Card;
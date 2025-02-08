export const cards = [
    {
        id: 1,
        style: { backgroundColor: "#fff", border: "2px solid #333", padding: "10px", borderRadius: "8px" },
        code: (
            <div style={{ backgroundColor: "#fff", border: "2px solid #333", padding: "10px", borderRadius: "8px" }}>
                <h1>Card Simple</h1>
            </div>
        ),
        codeText: {
            codeHTML: `<div class="card">
    <h1>Card Simple</h1>
</div>`,
            codeCSS: `.card {
    background-color: #fff;
    border: 2px solid #333;
    padding: 10px;
    border-radius: 8px;
}`
        }
    },
    {
        id: 2,
        style: { backgroundColor: "#fff", padding: "15px", borderRadius: "5px" },
        code: (
            <div style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "5px" }}>
                <h2>Título</h2>
                <p>Descripción corta de la tarjeta.</p>
            </div>
        ),
        codeText: {
            codeHTML: `<div class="card">
    <h2>Título</h2>
    <p>Descripción corta de la tarjeta.</p>
</div>`,
            codeCSS: `.card {
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
}`
        }
    },
    {
        id: 3,
        style: { backgroundColor: "#fff", textAlign: "center", padding: "10px", border: "1px solid #ddd" },
        code: (
            <div style={{ backgroundColor: "#fff", textAlign: "center", padding: "10px", border: "1px solid #ddd" }}>
                <img src="assets/images/hero-cards.png" alt="Imagen" />
                <h3>Card con Imagen</h3>
                <p>Esta tarjeta tiene una imagen en la parte superior.</p>
            </div>
        ),
        codeText: {
            codeHTML: `<div class="card">
    <img src="https://via.placeholder.com/150" alt="Imagen" />
    <h3>Card con Imagen</h3>
    <p>Esta tarjeta tiene una imagen en la parte superior.</p>
</div>`,
            codeCSS: `.card {
    background-color: #fff;
    text-align: center;
    padding: 10px;
    border: 1px solid #ddd;
}`
        }
    },
    {
        id: 4,
        style: { backgroundColor: "#fff", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", padding: "15px", borderRadius: "5px" },
        code: (
            <div style={{ backgroundColor: "#fff", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", padding: "15px", borderRadius: "5px" }}>
                <h3>Card con Botón</h3>
                <p>Incluye un botón de acción.</p>
                <button style={{ padding: "5px 10px", borderRadius: "3px", background: "#007bff", color: "#fff" }}>
                    Click Aquí
                </button>
            </div>
        ),
        codeText: {
            codeHTML: `<div class="card">
    <h3>Card con Botón</h3>
    <p>Incluye un botón de acción.</p>
    <button class="button">Click Aquí</button>
</div>`,
            codeCSS: `.card {
    background-color: #fff;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
    padding: 15px;
    border-radius: 5px;
}
.button {
    padding: 5px 10px;
    border-radius: 3px;
    background: #007bff;
    color: #fff;
}`
        }
    },
    {
        id: 5,
        style: { backgroundColor: "#fff", display: "flex", alignItems: "center", gap: "10px", padding: "10px", border: "1px solid #ccc" },
        code: (
            <div style={{ backgroundColor: "#fff", display: "flex", alignItems: "center", gap: "10px", padding: "10px", border: "1px solid #ccc" }}>
                <span>🔥</span>
                <div>
                    <h3>Card con Ícono</h3>
                    <p>Esta tarjeta tiene un ícono decorativo.</p>
                </div>
            </div>
        ),
        codeText: {
            codeHTML: `<div class="card">
    <span>🔥</span>
    <div>
        <h3>Card con Ícono</h3>
        <p>Esta tarjeta tiene un ícono decorativo.</p>
    </div>
</div>`,
            codeCSS: `.card {
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
}`
        }
    },
    {
        id: 6,
        style: { backgroundColor: "#fff", padding: "10px", borderRadius: "5px" },
        code: (
            <div style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "5px" }}>
                <h3>Card con Footer</h3>
                <p>Contenido principal aquí.</p>
                <footer style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>Pie de página</footer>
            </div>
        ),
        codeText: {
            codeHTML: `<div class="card">
    <h3>Card con Footer</h3>
    <p>Contenido principal aquí.</p>
    <footer>Pie de página</footer>
</div>`,
            codeCSS: `.card {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
}
footer {
    margin-top: 10px;
    font-size: 12px;
    color: #666;
}`
        }
    }
];

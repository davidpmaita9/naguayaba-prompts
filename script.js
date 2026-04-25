// 🔥 GUARDAR PRODUCTOS (Radar)
let productos = [];

function agregarProducto() {
  const nombre = prompt("Nombre del producto:");
  if (!nombre) return;

  const beneficio = prompt("Beneficio principal:");
  
  const producto = {
    nombre,
    beneficio
  };

  productos.push(producto);
  mostrarProductos();
}

// Mostrar productos
function mostrarProductos() {
  let html = "";
  productos.forEach((p, i) => {
    html += `
      <div style="border:1px solid #333; padding:10px; margin:10px 0;">
        <b>${p.nombre}</b><br>
        ${p.beneficio}
      </div>
    `;
  });

  document.getElementById("listaProductos").innerHTML = html;
}

// 🔥 GENERAR GUIÓN VIRAL
function generarGuion() {
  const producto = document.getElementById("producto").value;
  const beneficio = document.getElementById("beneficio").value;

  const guion = `
🎬 ESCENA 1 (0-8s)
"Ná guayaba… você precisa ver isso agora!"

🎬 ESCENA 2 (8-16s)
"Esse produto está chamando atenção porque ${beneficio}"

🎬 ESCENA 3 (16-24s)
"Todo mundo está testando… e os resultados estão surpreendendo"

🎬 ESCENA 4 (24-30s)
"Clica no carrinho laranja que aparece aqui embaixo"
  `;

  document.getElementById("resultado").innerText = guion;
};

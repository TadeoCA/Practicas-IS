const personajes = [
  {
    nombre: "Shrek",
    apellido: "",
    edad: 30,
    profesion: "Ogro",
    direccion: { calle: "Pantano", ciudad: "Reino Muy Muy Lejano", estado: "" },
    hobbies: ["Asustar", "Cocinar ratas", "Vivir tranquilo en su pantano"],
    foto: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"
  },
  {
    nombre: "Fiona",
    apellido: "",
    edad: 28,
    profesion: "Princesa",
    direccion: { calle: "Castillo", ciudad: "Reino Muy Muy Lejano", estado: "" },
    hobbies: ["Artes marciales", "Cantar con aves", "Defender a su familia"],
    foto: "https://static.wikia.nocookie.net/shrek/images/4/49/Shrek-the-third-cameron-diaz-as-princess-fiona-1.jpg/revision/latest?cb=20150809180938&path-prefix=es"
  },
  {
    nombre: "Burro",
    apellido: "",
    edad: 25,
    profesion: "Compañero parlanchín",
    direccion: { calle: "Con Shrek", ciudad: "Pantano", estado: "" },
    hobbies: ["Hablar sin parar", "Cantar", "Molestar a Shrek"],
    foto: "https://i.pinimg.com/736x/6b/68/f8/6b68f84c63c4bcd8d4e600ed593650cb.jpg"
  },
  {
    nombre: "Gato",
    apellido: "con Botas",
    edad: 20,
    profesion: "Espadachín",
    direccion: { calle: "Tabernas", ciudad: "Tierras Lejanas", estado: "" },
    hobbies: ["Pelear con espada", "Tomar leche", "Hacer ojos tiernos"],
    foto: "https://static.wikia.nocookie.net/shrek/images/5/5c/Gato_con_botas_001.png/revision/latest/scale-to-width-down/250?cb=20200330161129&path-prefix=es"
  },
  {
    nombre: "Lord",
    apellido: "Farquaad",
    edad: 35,
    profesion: "Gobernante",
    direccion: { calle: "Castillo Duloc", ciudad: "Duloc", estado: "" },
    hobbies: ["Dar órdenes", "Mandar caballeros", "Ser bajito con estilo"],
    foto: "https://preview.redd.it/how-the-hell-do-i-avoid-looking-like-lord-farquaad-in-the-v0-oqsyirs1bwqc1.jpeg?width=640&crop=smart&auto=webp&s=d7655e0b2735b2faf06e6266e471cdd5bd0c752e"
  }
];

const columna = document.querySelector(".container .row:nth-of-type(2) .col-12");

columna.innerHTML = `
  <div class="row g-4">
    ${personajes.map(p => `
      <div class="col-sm-6 col-md-4">
        <div class="card shadow h-100">
          <img
            src="${p.foto || ''}"
            alt="${p.nombre} ${p.apellido}"
            class="d-block mx-auto my-3"
            style="
              width:170px;
              height:210px;
              object-fit:cover;
              object-position:50% 12%;
              border-radius:12px;
            "
          >
          <div class="card-body">
            <h5 class="card-title">${p.nombre} ${p.apellido}</h5>
            <p>Edad: ${p.edad} años</p>
            <p>Profesión: ${p.profesion}</p>
            <p>Dirección: ${p.direccion.calle}, ${p.direccion.ciudad} ${p.direccion.estado}</p>
            <p>Hobbies:</p>
            <ul>
              ${p.hobbies.map(h => `<li>${h}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `).join("")}
  </div>
`;

import { Link } from "react-router-dom";

export default function Citas() {
  const citas = [
    { id: 1, paciente: "Juan Pérez" },
    { id: 2, paciente: "María López" }
  ];

  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              Cita con {cita.paciente}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

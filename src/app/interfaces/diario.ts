import { Medicion } from "./medicion";

export interface Entrada {
  id: number;
  fecha: string;
  contenido: string;
  idPaciente: number;
  pacienteNombre: string;
  mediciones: Medicion[];
}


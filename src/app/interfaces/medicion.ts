import { Emocion } from "./emocion";


export interface Medicion {
  id: number;
  nivel: number;
  idEmocion: number;
  idEntrada: number;
  emocion: Emocion;
  entrada: string;
}

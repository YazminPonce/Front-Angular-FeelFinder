export class UpdatePacienteDto {
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  telefono: string = '';
  fechaNacimiento: Date | null = null;
  sexo: string = '';
  email: string = '';
  foto: string = '';
  estadoCivil: string = '';
  ocupacion: string = '';
  domicilios?: string[]; // Cambia el tipo si es necesario
}

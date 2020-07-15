import { DatosBasicos } from './datosBasicos';
import { DatosFinancieros } from './datosFinancieros';
import { OtrosDatos } from './otrosDatos';

export interface ContactoCentrales {
    DatosBasicos: DatosBasicos;
    DatosFinancieros: DatosFinancieros;
    OtrosDatos: OtrosDatos;
}
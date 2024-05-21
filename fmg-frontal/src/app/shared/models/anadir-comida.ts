import { IngredienteCantidad } from "./ingrediente-cantidad";

export interface AnadirComida {
    nombre: string;
    ingredientes: IngredienteCantidad[];
}


export class AnadirComidaHelper {

    static toApi(nombreComida: string, listaIngredientes: IngredienteCantidad[]) : AnadirComida {
        return {
            nombre: nombreComida,
            ingredientes: listaIngredientes
        }
    }
}
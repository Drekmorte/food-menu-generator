import { ListaIngredientesComida } from "./lista-ingredientes-comida";
import { Macros } from "./macros";

export interface ListarComida {
    id: string;
    nombre: string;
    ingredientes: ListaIngredientesComida[];
    macros: Macros
}


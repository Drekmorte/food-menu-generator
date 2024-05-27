import { ListaIngredientesComida } from "./lista-comida-ingredientes";
import { Macros } from "./macros";

export interface Comida {
    id: string;
    nombre: string;
    ingredientes: ListaIngredientesComida[];
    macros: Macros
}


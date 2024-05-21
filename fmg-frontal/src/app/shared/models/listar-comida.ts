import { ListaIngredientesComida } from "./lista-ingredientes-comida";
import { Macros } from "./macros";

export interface ListarComida {
    id: number;
    nombre: string;
    ingredientes: ListaIngredientesComida[];
    macros: Macros[]
}


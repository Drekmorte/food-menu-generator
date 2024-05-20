import { FormGroup } from "@angular/forms";

export interface AnadirIngrediente {
    nombre: string;
    tipoingrediente: number;
    calorías: number;
    proteinas: number;
    hidratos: number;
    grasas: number;
    fibra: number;
    sal: number;
    gramos: number;
}

export class AnadirIngredienteHelper {

    // static default() : Anadiringrediente 
    // {
    //     return {
    //         nombre: '',
    //         tipoingrediente: 0,
    //         calorías: 0,
    //         proteinas: 0,
    //         hidratos: 0,
    //         grasas: 0,
    //         fibra: 0,
    //         sal: 0,
    //         gramos: 0,
    //     }
    // }

    static toApi(form: FormGroup) : AnadirIngrediente {
        return {
            nombre: form.value.nombre,
            tipoingrediente: form.value.tipoingrediente,
            calorías: form.value.calorias,
            proteinas: form.value.proteinas,
            hidratos: form.value.hidratos,
            grasas: form.value.grasas,
            fibra: form.value.fibra,
            sal: form.value.sal,
            gramos: form.value.gramos,
        }
    }
}
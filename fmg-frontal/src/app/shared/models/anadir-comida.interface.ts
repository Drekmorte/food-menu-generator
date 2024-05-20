import { FormGroup } from "@angular/forms";

export interface AnadirComida {
    nombre: string;
    ingredientes: Array<number>;
}


// TODO
export class AnadirComidaHelper {

    static toApi(form: FormGroup) : AnadirComida {
        return {
            nombre: form.value.nombre,
            ingredientes: form.value,
        }
    }
}
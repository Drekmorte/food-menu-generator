import { Injectable } from "@angular/core";
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from "rxjs";
import { Ingrediente } from "../models/ingrediente";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  bsModalRef?: BsModalRef;

  constructor(private bsModalService: BsModalService) { }

  show(component: any, title: string, ingrediente: Ingrediente): Observable<string> {
    const modalInfo: any = this.bsModalRef;

    const initialState: ModalOptions = {
      initialState: {
        title,
        ingrediente: ingrediente,
        modalInfo, // Probablemente no sirva para nada y haya que eliminarlo,

      }
    };

    this.bsModalRef = this.bsModalService.show(component, initialState);

    this.bsModalRef.setClass('modal-test');

    return new Observable<string>(this.getAlertaSubscriber());
  }

  private getAlertaSubscriber() {
    return (observer: any) => {
      const subscription = this.bsModalService.onHidden.subscribe((reason: string) => {
        observer.complete();
      });

      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      }
    }
  }
}

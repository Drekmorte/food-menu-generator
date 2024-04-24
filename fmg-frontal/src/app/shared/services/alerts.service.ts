import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {


  constructor(private toastr: ToastrService) { }

  showSuccess(text: string, title: string = '') {
    this.toastr.success(text, title);
  }

  showError(text: string, title: string = '') {
    this.toastr.error(text, title);
  }

}

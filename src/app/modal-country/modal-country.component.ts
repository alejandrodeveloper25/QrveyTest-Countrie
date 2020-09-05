import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modalCountry',
  templateUrl: './modal-country.component.html',
  styleUrls: ['./modal-country.component.css']
})
export class ModalCountryComponent {

  @Input() countrySelected : any;
  @Input() activeModal = false;
  @Output() closeModal = new EventEmitter();
  @Output() activeFavorite = new EventEmitter();

  /**
   * Emisor de evento de cierre de
   * modal
   */
  close() {
    this.closeModal.emit({});
  }

  /**
   * Emisor de evento del click de
   * favoritos
   * @param action 
   */
  actionFavorite(action){
    this.activeFavorite.emit({action});
  }


}

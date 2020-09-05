import { Component, OnInit } from '@angular/core';
import { CountriesService } from './country.service';



@Component({
  selector: 'countrys',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

 

  arrayCountries: any;

  countriesAfrica  = [];
  countriesAmerica = [] ;
  countriesAsia    = [];
  countriesEurope  = [];
  countriesOceania = [];

  filterText : any;

  activeModal = false;

  selectCountry :any;
  
  constructor(public countriesService: CountriesService) {}

  /**
   * Al iniciar buscaremos todos los paises y
   * despues los dividiremos por la region
   */
  ngOnInit() {
    this.countriesService.getAllCountrys().subscribe(data => {

      this.arrayCountries = data;

      for (let i = 0; i < this.arrayCountries.length; i++) {
        if(this.arrayCountries[i]['region'] =='Africa'){
          this.countriesAfrica.push(this.arrayCountries[i]);
        }else if(this.arrayCountries[i]['region'] =='Americas'){
          this.countriesAmerica.push(this.arrayCountries[i]);
        }else if(this.arrayCountries[i]['region'] =='Asia'){
          this.countriesAsia.push(this.arrayCountries[i]);
        }else if(this.arrayCountries[i]['region'] =='Europe'){
          this.countriesEurope.push(this.arrayCountries[i]);
        }else if(this.arrayCountries[i]['region'] =='Oceania'){
          this.countriesOceania.push(this.arrayCountries[i]);
        }
      }
    });
  }

  /**
   * Metodo que filtra los array de los paises
   *  por medio de un string
   */
  filterCountries(){
    
  }

  /**
   * Metodo encargado de abrir
   * el modal y cosntruir la información
   * del pais seleccionado
   * @param data objeto seleccionado 
   */
  selectedCountry(data){
    this.activeModal = true;
    this.selectCountry = data;

    if(this.selectCountry.fav == undefined || this.selectCountry.fav == null || this.selectCountry.fav ==""){
      this.selectCountry.fav = false;
    }

    this.selectCountry.population = this.getPopulationString(this.selectCountry.population);

    this.selectCountry.borders = this.getBorderCountries(this.selectCountry.borders);
   
  }

  /**
   * Metodo encargado de cerrar
   * el modal
   */
  closeM(){
    this.activeModal = false;
  }

  /**
   * Función que retorna un string con la
   * población redondeada
   * @param populationNumber 
   */
  getPopulationString(populationNumber){
    var population = Math.round(populationNumber / 1000000);

    if(population > 0){
      return population +" M";
    }else{
      population = Math.round(populationNumber / 1000)
      if(population >0){
        return population +" m";
      }else{
        return populationNumber;
      }
    }
  }

  /**
   * Función que retorna una cadena de string
   * conteniendo los nombre de los paises dependiendo
   * de un array con los codigos alpha3Code de estos
   * @param arrayCodeCountries 
   */
  getBorderCountries(arrayCodeCountries){
    
    var nameCountries = "";

    for (let i = 0; i < arrayCodeCountries.length; i++) {
      for (let j = 0; j < this.arrayCountries.length; j++) {
        if( arrayCodeCountries[i] == this.arrayCountries[j]['alpha3Code']){
          if(i < arrayCodeCountries.length-1){
            nameCountries += this.arrayCountries[j]['name']+", ";   
          }else{
            nameCountries += this.arrayCountries[j]['name']+"."; 
          }
        }
      }
    }
    return nameCountries;
  }

  /**
   * Metodo para asignar a un pais
   * como favorito
   * @param e evento
   */
  selectFavoriteCountry(e){
    this.selectCountry.fav = e.action;
  }
  
}

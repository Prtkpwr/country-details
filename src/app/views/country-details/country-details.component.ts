import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: 'country-details.component.html'
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  private Subscription:Subscription;
  private CountryValue;
  public country = {
    name:"",
    capital:"",
    region:"",
    subregion:"",
    population:"",
    area:"",
    alpha3Code:""
  };
  constructor(private HttpService:HttpService) {
  }
  ngOnInit() {
    this.subscriberFunction();
    this.CountryValue = this.HttpService.changedValue;
    if(this.CountryValue){
      this.getCountryDetails(this.CountryValue)
    }
  }
  subscriberFunction(){
   this.Subscription =  this.HttpService.listen().subscribe((res)=>{
      this.getCountryDetails(res)
    },(err)=>{
      console.log(err)
    })
  }
  getCountryDetails(alpha3code){
      this.HttpService.getSingleCountryDetails(alpha3code).subscribe((res:any)=>{
        this.country = res;
      },(err)=>{
        console.log(err)
      })
  }
  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }
}

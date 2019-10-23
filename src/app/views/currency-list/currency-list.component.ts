import { Component,OnInit,OnDestroy } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: 'currency-list.component.html'
})
export class CurrencyListComponent implements OnInit, OnDestroy {
  private Subscription:Subscription;
  private CountryValue;
  public currencies: any;

  constructor(private HttpService:HttpService) {}
  ngOnInit() {
    this.subscriberFunction();
    this.CountryValue = this.HttpService.changedValue;
    if(this.CountryValue){
      this.getCountryCurrency(this.CountryValue)
    }
  }
  subscriberFunction(){
   this.Subscription = this.HttpService.listen().subscribe((res)=>{
      console.log(res)
      this.getCountryCurrency(res)
    },(err)=>{
      console.log(err)
    })
  }
  getCountryCurrency(alpha3code){
    this.HttpService.getSingleCountryDetails(alpha3code).subscribe((res:any)=>{
      // this.country = res;
      this.currencies = res.currencies;
    },(err)=>{
      console.log(err)
    })
}
  ngOnDestroy(){
    // Unsubscribe to avoid memory leak
    this.Subscription.unsubscribe()
  }

}

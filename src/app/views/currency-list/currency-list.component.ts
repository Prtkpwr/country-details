import { Component,OnInit,OnDestroy } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: 'currency-list.component.html'
})
export class CurrencyListComponent implements OnInit, OnDestroy {
  private Subscription:Subscription;
  private CountryValue;
  constructor(private HttpService:HttpService) {}
  ngOnInit() {
    this.sample();
    this.CountryValue = this.HttpService.getCountryValue();
  }
  sample(){
   this.Subscription = this.HttpService.listen().subscribe((res)=>{
      console.log(res)
    },(err)=>{
      console.log(err)
    })
  }
  ngOnDestroy(){
    this.Subscription.unsubscribe()
  }

}

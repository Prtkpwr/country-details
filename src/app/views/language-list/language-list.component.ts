import { Component,OnInit,OnDestroy, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: 'language-list.component.html'
})
export class LanguageListComponent implements OnInit, OnDestroy {
  private Subscription:Subscription;
  constructor(private HttpService:HttpService) {}
  private CountryValue;
  public languages:any;
  ngOnInit() {
    this.subscriberFunction()
    this.CountryValue = this.HttpService.changedValue;
    if(this.CountryValue){
      this.getCountryLanguages(this.CountryValue)
    }
  }
  subscriberFunction(){
    this.Subscription = this.HttpService.listen().subscribe((res)=>{
      this.getCountryLanguages(res);
    },(err)=>{
      console.log(err)
    })
  }
  getCountryLanguages(alpha3code){
    this.HttpService.getSingleCountryDetails(alpha3code).subscribe((res:any)=>{
      this.languages = res.languages;
    },(err)=>{
      console.log(err)
    })
}
  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }
}

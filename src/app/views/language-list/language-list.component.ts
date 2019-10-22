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
  ngOnInit() {
    this.sample()
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
    this.Subscription.unsubscribe();
  }
}

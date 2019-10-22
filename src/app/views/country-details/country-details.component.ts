import { Component, OnInit,OnDestroy } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: 'country-details.component.html'
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  private Subscription:Subscription;
  private CountryValue;
  private country = {};
  constructor(private HttpService:HttpService) {
  }
  ngOnInit() {
    this.sample();
    // this.CountryValue = this.getCountryName().then((value)=>{
    //   this.getCountryDetails(value)
    // })
  }
  sample(){
   this.Subscription =  this.HttpService.listen().subscribe((res)=>{
      this.getCountryDetails(res)
    },(err)=>{
      console.log(err)
    })
  }
  getCountryName(){
    return new Promise(resolve => {
      resolve(this.HttpService.getCountryValue())
    });
  }
  getCountryDetails(alpha3code){
      this.HttpService.getSingleCountryDetails(alpha3code).subscribe((res)=>{
        console.log(res)
        this.country = res;
      },(err)=>{
        console.log(err)
      })
  }
  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }
}

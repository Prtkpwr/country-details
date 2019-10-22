import { Component, OnDestroy,OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { HttpService } from '../../services/http.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  public country_list;
  public selectedCountry;
  constructor(private HttpService:HttpService,@Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  ngOnInit(){
    this.HttpService.getCountryList().subscribe((res)=>{
      console.log(res)
      this.country_list = res;
      this.selectedCountry = this.country_list[0].alpha3Code;
      this.selectedCountryChanged();
    },(err)=>{
      console.log(err)
    });
  }
  selectedCountryChanged(){
    this.HttpService.changeValue(this.selectedCountry)
  }
  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}

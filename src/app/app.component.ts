import { Component,HostListener } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openFinancialTech';

  header_variable = false;

  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
  this.header_variable = true;
    }
    else{
      this.header_variable = false;
    }
  }
}

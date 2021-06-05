import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 300000;
  min = 100000;
  maxExp = 300000;
  minExp = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  valueExp = 0;
  vertical = false;
  tickInterval = 1;

  countries: any = [
    {
      full: "6 Months",
      short: "GB"
    },
    {
      full: "4 Months",
      short: "US"
    },
    {
      full: "2 Months",
      short: "CA"
    }
  ];

  selectedCountry: string = "GB";
  

  constructor() { }

 

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  ngOnInit(): void {
  }

}

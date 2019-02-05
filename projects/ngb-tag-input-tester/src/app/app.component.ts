import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disabled = false;
  selectedStrings1 = [];
  selectedStrings2 = [];
  selectedObjects1 = [];
  selectedObjects2 = [];

  states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  stateObjects = [
    {name: 'Alabama'}, {name: 'Alaska'}, {name: 'American Samoa'}, {name: 'Arizona'}, {name: 'Arkansas'}, {name: 'California'},
    {name: 'Colorado'}, {name: 'Connecticut'}, {name: 'Delaware'}, {name: 'District Of Columbia'}, {name: 'Federated States Of Micronesia'},
    {name: 'Florida'}, {name: 'Georgia'}, {name: 'Guam'}, {name: 'Hawaii'}, {name: 'Idaho'}, {name: 'Illinois'}, {name: 'Indiana'},
    {name: 'Iowa'}, {name: 'Kansas'}, {name: 'Kentucky'}, {name: 'Louisiana'}, {name: 'Maine'}, {name: 'Marshall Islands'},
    {name: 'Maryland'}, {name: 'Massachusetts'}, {name: 'Michigan'}, {name: 'Minnesota'}, {name: 'Mississippi'}, {name: 'Missouri'},
    {name: 'Montana'}, {name: 'Nebraska'}, {name: 'Nevada'}, {name: 'New Hampshire'}, {name: 'New Jersey'}, {name: 'New Mexico'},
    {name: 'New York'}, {name: 'North Carolina'}, {name: 'North Dakota'}, {name: 'Northern Mariana Islands'}, {name: 'Ohio'},
    {name: 'Oklahoma'}, {name: 'Oregon'}, {name: 'Palau'}, {name: 'Pennsylvania'}, {name: 'Puerto Rico'}, {name: 'Rhode Island'},
    {name: 'South Carolina'}, {name: 'South Dakota'}, {name: 'Tennessee'}, {name: 'Texas'}, {name: 'Utah'}, {name: 'Vermont'},
    {name: 'Virgin Islands'}, {name: 'Virginia'}, {name: 'Washington'}, {name: 'West Virginia'}, {name: 'Wisconsin'}, {name: 'Wyoming'}
  ];

  selectionChanges(values: string[]) {
    console.log('Selection changed', values);
  }
  toggleDisabled () {
    this.disabled = !this.disabled;
  }

  mySearchFunc = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => {
      return this.stateObjects.map(o => o.name).filter(s => s.toLowerCase().startsWith(term.toLowerCase()));
    })
  )
}

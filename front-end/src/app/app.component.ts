import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public selectedIndex = 0;

  private events = new Subscription();

  dataSource = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
  ];

  columns = [
    { dataField: 'id', caption: 'ID' },
    { dataField: 'name', caption: 'Name' },
    { dataField: 'age', caption: 'Age' }
  ];

  constructor() {}


  public onTabChanged(e: any) {
    this.selectedIndex = e.component.option('selectedIndex')
  }

  ngOnDestroy(): void {
    this.events.unsubscribe()
  }

  ngOnInit(): void {
  }


}

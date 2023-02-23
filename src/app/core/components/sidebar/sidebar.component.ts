import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private breakpointObservable: BreakpointObserver,
  ) { }
  isHandset$: Observable<boolean> = this.breakpointObservable.observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay());

  isHandsetW$: Observable<boolean> = this.breakpointObservable.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
    .pipe(
      map((result) => result.matches),
      shareReplay());

  buttonClick: boolean = false;
  buttonMenu() {
    this.buttonClick = !this.buttonClick;
  }


  ngOnInit(): void {
  }

}

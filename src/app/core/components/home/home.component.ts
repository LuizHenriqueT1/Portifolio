import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private breakpointObservable: BreakpointObserver,
  ) { }
  windowScrolled: boolean = false;


  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isHandset$: Observable<boolean> = this.breakpointObservable.observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay());

  isHandsetW$: Observable<boolean> = this.breakpointObservable.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
    .pipe(
      map((result) => result.matches),
      shareReplay());


  ngOnInit(): void {
  }

}

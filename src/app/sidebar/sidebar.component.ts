import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    console.log(router.events);
    router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((bla: NavigationEnd) => {
        this.currentUrl = bla.url;
        console.log(bla, bla.url);
      });
    /*
    [].map(())
    .subscribe((bla: NavigationEnd) => {
        this.currentUrl = bla.url;
        console.log(bla, bla.url);
      });
      */
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsEventsService } from '../google-analytics-events.service';

declare let ga: Function;

@Component({
  selector: 'app-code-philosophy',
  templateUrl: './code-philosophy.component.html',
  styleUrls: ['./code-philosophy.component.scss']
})
export class CodePhilosophyComponent implements OnInit {

  constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
  }

}

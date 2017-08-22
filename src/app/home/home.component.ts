import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsEventsService } from '../google-analytics-events.service';

declare let ga: Function;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects = [
    {name: 'Insight RNOC Mobile (iOS and Android)', image: 'InsightRnocMobile.png'},
    {name: 'Ultimate Prospector Mobile (iOS and Android)', image: 'UltimateProspectorMobile.png'},
    {name: 'Exclusive Clicks', image: 'ExclusiveClicks.png'},
    {name: 'Ultimate Prospector', image: 'UltimateProspector1.png'},
    {name: 'Real Time Leads', image: 'RealTimeLeads.png'},
  ];

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

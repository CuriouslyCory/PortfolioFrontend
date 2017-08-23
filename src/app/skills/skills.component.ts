import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsEventsService } from '../google-analytics-events.service';

declare let ga: any;

const SKILLS = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'PHP' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Javascript' },
      { name: 'ES6/ES2015' },
      { name: 'Python' }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL' },
      { name: 'SQL Server' },
      { name: 'MongoDB' },
    ]
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'ZendFramework 1 & 2' },
      { name: 'Laravel' },
      { name: 'CodeIgniter 3' },
      { name: 'AngularJS' },
      { name: 'Angular (2)' },
      { name: 'jQuery' },
      { name: 'Tensorflow' }
    ]
  },
  {
    category: 'Project Utilities',
    skills: [
      { name: 'Grunt' },
      { name: 'Laravel' },
      { name: 'Angular CLI' },
      { name: 'Composer' },
      { name: 'npm' },
    ]
  },
  {
    category: 'Unit testing',
    skills: [
      { name: 'Karma' },
      { name: 'Jasmine' },
      { name: 'PHPUnit' },
    ]
  },
  {
    category: 'Web Servers',
    skills: [
      { name: 'Apache Web Server' },
      { name: 'NGINX' },
      { name: 'ExpressJS' }
    ]
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'GIT' },
      { name: 'Subversion' },
      { name: 'CVS' },
    ]
  },
  {
    category: 'APIs',
    skills: [
      { name: 'Facebook' },
      { name: 'Google' },
      { name: 'Twitter' },
      { name: 'Tropo' },
      { name: 'Twillio' },
    ]
  },
  {
    category: 'Host Environments',
    skills: [
      { name: 'AWS CloudFront, EC2' },
      { name: 'Azure App Deployment' },
      { name: 'Centos' },
      { name: 'RHEL' },
      { name: 'Ubuntu' },
      { name: 'Fedora' }
    ]
  },
  {
    category: 'Important Concepts',
    skills: [
      { name: 'Service Oriented Architecture' },
      { name: 'Microservices' },
      { name: 'Continuious Integration' },
      { name: 'OOP' },
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Query Optomization' },
      { name: 'Data Architecture' },
      { name: 'ORM' }
    ]
  },
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsList   = SKILLS;

  constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService ) {
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

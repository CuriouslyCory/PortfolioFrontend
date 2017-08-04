import { Component, OnInit } from '@angular/core';

const SKILLS = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'PHP' },
      { name: 'SQL' },
      { name: 'HTML' },
      { name: 'Javascript' },
      { name: 'Python' }
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
      { name: 'jQuery' }
    ]
  },
  {
    category: 'Server Technology',
    skills: [
      { name: 'Apache 2' },
      { name: 'NGINX' },
      { name: 'Meteor' },
      { name: 'ExpressJS' },
      { name: 'Centos' },
      { name: 'RHEL' }
    ]
  },
  {
    category: 'Web Servers',
    skills: [
      { name: 'Apache 2' },
      { name: 'NGINX' },
      { name: 'Meteor' },
      { name: 'ExpressJS' }
    ]
  },
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsList = SKILLS;

  constructor() { }

  ngOnInit() {
  }

}

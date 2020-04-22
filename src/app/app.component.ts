import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

const NAVELEMENTS = [
  { name: 'Home', icon: 'home', route: '/home' },
  { name: 'Experience', icon: 'work', route: '/experience' },
  { name: 'Portfolio', icon: 'perm_media', route: '/portfolio' },
  { name: 'Skills', icon: 'build', route: '/skills' },
  { name: 'Hobbies', icon: 'landscape', route: '/hobbies' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Cory Sougstad - Web Application Engineer';
  public navElements = NAVELEMENTS;
  public pageTitle: string;

  constructor( private router: Router, private activatedRoute: ActivatedRoute ) {
    router.events.subscribe( ( url: any ) => {
      if (url.url !== '/') {
        this.pageTitle = this.navElements.filter( ( element: any ) => element.route === url.url )[0].name;
      }
    });
  }
}

import { NgClass } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private routerSubscription!: Subscription;
  route: string = '';

  constructor(private router: Router) {
    console.log(this.router.url)
  }


    ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Route changed:', event.url);
        this.route = event.url;
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe(); // Prevent memory leaks
  }
}
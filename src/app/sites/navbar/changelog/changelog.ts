import { Component } from '@angular/core';
import { CustomTitle } from "../../../components/custom-title/custom-title";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-changelog',
  imports: [CustomTitle, RouterLink],
  templateUrl: './changelog.html',
  styleUrl: './changelog.css',
})
export class Changelog {

}

import { TuiButtonModule, TuiRootModule } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTreeComponent } from "./nav-tree/nav-tree.component";
import { NavService } from "./nav.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TuiRootModule, NavTreeComponent, TuiButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tree-examples';

  constructor (readonly nav: NavService) {
  }
}

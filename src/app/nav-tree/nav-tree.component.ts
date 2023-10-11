import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTreeModule } from "@taiga-ui/kit";
import { TuiSvgModule } from "@taiga-ui/core";
import { NavService } from "../nav.service";
import { EMPTY_ARRAY, TuiHandler } from "@taiga-ui/cdk";

@Component({
  selector: 'nav-tree',
  standalone: true,
  imports: [CommonModule, TuiTreeModule, TuiSvgModule],
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.scss']
})
export class NavTreeComponent {
  constructor (readonly nav: NavService) {
  }
  readonly handler: TuiHandler<any, readonly any[]> = item =>
    item.children || EMPTY_ARRAY;
}

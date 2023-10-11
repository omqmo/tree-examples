import { Injectable, signal } from "@angular/core";
import { NavNode } from "./NavNode";

@Injectable({
  providedIn: `root`
})
export class NavService {
  tree = signal<NavNode>( {
    id: `root`,
    isToggle: true,
    name: `навигация`,
    children: [
      {
        id: crypto.randomUUID(),
        isToggle: true,
        name: `Child`,
        children: [],
      }
    ],
  } );

  toggles = new Map<NavNode, boolean>();

  constructor () {
    this.toggles.set( this.tree(), true );
    this.toggles.set( this.tree().children[0], true );
  }
  addChild (  ) {
    this.tree.mutate((tree)=>{
      const node: NavNode = {
        id: crypto.randomUUID(),
        isToggle: true,
        name: `Child`,
        children: [],
      };
      this.toggles.set( node, true );
      tree.children[ 0 ].children.push( node );
    })
  }
}

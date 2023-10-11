export interface NavNode {
  id: string;
  isToggle: boolean;
  name: string;
  children: NavNode[];
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Planet } from "@workspace/api-interfaces";

@Component({
  selector: 'workspace-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetListComponent {
  @Input() planets: Planet[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() planetViewed = new EventEmitter();
}

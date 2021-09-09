import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Planets';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'planets', icon: 'view_list', title: 'Planets'}
  ]
}

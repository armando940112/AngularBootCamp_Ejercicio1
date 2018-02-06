import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'My Application';
	author = 'Armando Londoño';
	count = 0;
	imgSource = './favicon.ico';
	enabled = false;
}

import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app';

  constructor(private appService: AppServiceService) { }

  getDetails(): void {
    this.appService.getDetails().subscribe(result => {
      console.log('Result : ' + result);
    }, error => {
      console.log('Error Details : ' + error);
    });
  }
}

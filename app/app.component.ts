import { Component } from '@angular/core';
import {MovieService} from './services/movies.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [MovieService]
})
export class AppComponent  {  }

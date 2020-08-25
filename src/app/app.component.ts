import { SharedService } from './services/shared.service';
import { Component, EventEmitter } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showTemplate = false;
  public shared: SharedService;

  constructor(private userService: UserService){
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.shared.showTemplate.subscribe(
      show => this.showTemplate = show
    );
  }
}

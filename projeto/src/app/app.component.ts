import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';

  counterProgress:number = 0;
  totalCountdown:number = 15;

  constructor(){}

  updateProgress($event:any){
    this.counterProgress = (this.totalCountdown - $event)/this.totalCountdown*100;
  }

  countdownFinished(){
    console.log('countdownFinished');
  }
}

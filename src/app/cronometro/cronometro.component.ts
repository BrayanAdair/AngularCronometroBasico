import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  segundo =0;
  @Input() inicio:number=0;
  @Output() multiplo50 = new EventEmitter();
  @Output() multiplo10 = new EventEmitter();
  constructor(){}
  ngOnInit(): void {
      this.segundo = this.inicio;
      setInterval(() =>{
        this.segundo++;
      if(this.segundo % 10 == 0)
            this.multiplo10.emit(this.segundo);
      }, 1000);


      setInterval(() =>{
        this.segundo++;
      if(this.segundo % 100 == 0)
            this.multiplo50.emit(this.segundo);
      }, 1000);
      
  }
}

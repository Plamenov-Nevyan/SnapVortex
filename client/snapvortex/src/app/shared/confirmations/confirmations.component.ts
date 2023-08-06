import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmations',
  templateUrl: './confirmations.component.html',
  styleUrls: ['./confirmations.component.css']
})
export class ConfirmationsComponent implements OnInit {
  @Input() action: string = ''
  confirmationType:string = ''

  constructor(){

  }
  ngOnInit(): void {
      this.confirmationType = this.action.split('-')[0]
  }
}

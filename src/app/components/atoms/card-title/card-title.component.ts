import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent implements OnInit {

  @Input() text?: string;

  constructor() { }

  ngOnInit(): void {
  }

}

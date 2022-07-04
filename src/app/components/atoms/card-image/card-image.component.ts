import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {

  @Input() img?: string;
  @Input() description?: string;

  constructor() { }

  ngOnInit(): void {
  }

}

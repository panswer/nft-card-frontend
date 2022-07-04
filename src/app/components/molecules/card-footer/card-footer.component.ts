import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent implements OnInit {

  @Input() avatar?: string;
  @Input() name?: string;

  constructor() { }

  ngOnInit(): void {
  }

}

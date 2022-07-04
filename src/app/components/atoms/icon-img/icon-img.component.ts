import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-img',
  templateUrl: './icon-img.component.html',
  styleUrls: ['./icon-img.component.css']
})
export class IconImgComponent implements OnInit {

  @Input() img?: string;

  constructor() { }

  ngOnInit(): void {
  }

}

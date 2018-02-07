import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  template: `
  <div class="card p-3">
  <div class="card-block">
      <h4 class="card-title">{{title}}</h4>
      <p class="card-text">{{text}}</p>
  </div>
</div>
  `,
  styles: []
})
export class ContentCardComponent implements OnInit {

  @Input()
  title;

  @Input("content")
  text;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-result-item',
  imports: [],
  templateUrl: './result-item.html',
  styleUrl: './result-item.css',
})
export class ResultItem {
  public result = input.required<string>();
  public title = input.required<string>();
  public icon = input.required<string>();
  public color = input.required<string>();

  
}

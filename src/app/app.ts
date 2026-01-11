import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResultItem } from './result-item/result-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResultItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('resuls-summary-component');
}

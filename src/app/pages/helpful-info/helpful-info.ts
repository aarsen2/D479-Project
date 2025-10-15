import { Component } from '@angular/core';

@Component({
  selector: 'app-helpful-info',
  imports: [],
  templateUrl: './helpful-info.html',
  styleUrl: './helpful-info.css'
})
export class HelpfulInfo {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

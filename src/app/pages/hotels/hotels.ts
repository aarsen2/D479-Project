import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  imports: [],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css'
})
export class Hotels {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

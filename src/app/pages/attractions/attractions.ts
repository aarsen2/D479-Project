import { Component } from '@angular/core';

@Component({
  selector: 'app-attractions',
  imports: [],
  templateUrl: './attractions.html',
  styleUrl: './attractions.css'
})
export class Attractions {
ngOnInit(): void {
    window.scrollTo({ top: 0, behavior:  "instant" });
  } 
}

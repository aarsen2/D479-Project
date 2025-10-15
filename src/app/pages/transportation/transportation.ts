import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-transportation',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './transportation.html',
  styleUrl: './transportation.css'
})
export class Transportation {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

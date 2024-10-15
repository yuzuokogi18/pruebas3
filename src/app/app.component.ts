import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerCardsComponent } from "./components/container-cards/container-cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebas3';
}

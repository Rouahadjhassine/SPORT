import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Ajout de RouterModule ici ✅

@Component({
  selector: 'app-root',
  standalone: true,  // Angular 15+ nécessite cela pour standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule] // Ajoute RouterModule ici ✅
})
export class AppComponent { }

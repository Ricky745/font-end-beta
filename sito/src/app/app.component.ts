import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AlbumComponent,HomeComponent,LoginComponent,RegistrazioneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sito';
}

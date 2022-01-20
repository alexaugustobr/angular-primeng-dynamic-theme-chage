import { Component, OnInit } from '@angular/core';
import { TemaService } from './tema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'algamoney-ui';

  temas = [
    {
      nome: 'Saga Blue',
      arquivo: 'saga-blue-theme.css'
    },
    {
      nome: 'Amber',
      arquivo: 'amber-theme.css'
    }
  ]

  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.temaService.carregarTema();
  }

  trocarTema(theme: string) {
    this.temaService.trocarTema(theme);
  }
}

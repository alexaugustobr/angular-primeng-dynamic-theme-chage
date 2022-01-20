import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class TemaService {

    constructor(@Inject(DOCUMENT) private document: Document) {}

    temaPadrao = 'saga-blue-theme.css';

    carregarTema() {
        let tema = localStorage.getItem("tema") || this.temaPadrao;
        this.trocarTema(tema);
    }

    trocarTema(tema: string) {
        let linkDoTema = this.document.getElementById('app-tema') as HTMLLinkElement;
            
        if (linkDoTema) {
            linkDoTema.href = tema;
            localStorage.setItem("tema", tema);
        }
    }

}
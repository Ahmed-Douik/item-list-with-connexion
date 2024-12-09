import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  articles = [
    { title: 'LapTop Asus', content: 'Contenu de l\'article 1' },
    { title: 'LapTop Gaming', content: 'Contenu de l\'article 2' },
    { title: 'LapTop HP', content: 'Contenu de l\'article 3' }
  ];

  nvTitre: string = '';
  nvContenu: string = '';

  ajArticle(){
    if(this.nvTitre && this.nvContenu){
      this.articles.push({ title: this.nvTitre, content: this.nvContenu });
      this.nvTitre = '';
      this.nvContenu = '';
    }
}
}

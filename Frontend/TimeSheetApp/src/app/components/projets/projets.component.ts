import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  projects = [
    {
      title: 'Projet 1',
      description: 'Description du projet 1.',
      technologies: 'Angular, TypeScript, HTML, CSS',
      githubLink: 'https://github.com/votre-projet-1'
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2.',
      technologies: 'React, JavaScript, CSS',
      githubLink: 'https://github.com/votre-projet-2'
    },
    {
      title: 'Projet 3',
      description: 'Description du projet 3.',
      technologies: 'Vue.js, JavaScript, HTML, CSS',
      githubLink: 'https://github.com/votre-projet-3'
    }
    // Ajoutez d'autres projets si nécessaire
  ];
}

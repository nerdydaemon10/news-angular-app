import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadableTime } from '../../shared/pipes/readable-time.pipe.js';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [ReadableTime],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  author: string = '';
  title: string = '';
  description: string = '';
  urlToImage: string = '';
  publishedAt: string = '';
  content: string = '';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }
}

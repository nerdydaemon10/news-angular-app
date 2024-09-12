import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TruncatePipe } from '../../pipes/truncate.pipe.js';
import { ReadableTime } from '../../pipes/readable-time.pipe.js';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, TruncatePipe, ReadableTime, NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() id: number = 0;
  @Input() author: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() urlToImage: string = '';
  @Input() publishedAt: string = '';
  @Input() content: string = '';

  @Input() placeholder: boolean = false;
}
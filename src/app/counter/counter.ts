import { Component, signal, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-counter',
  imports: [Button],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter implements OnInit {
  @Input() initial: number = 1;
  @Output() valueChange = new EventEmitter<number>();

  counter = signal(0);

  ngOnInit(): void {
    if (this.initial && this.initial > 1) {
      this.counter.set(this.initial);
    }
  }

  increment() {
    this.counter.update((n) => {
      const next = n + 1;
      this.valueChange.emit(next);
      return next;
    });
  }

  decrement() {
    this.counter.update((n) => {
      const next = Math.max(1, n - 1);
      this.valueChange.emit(next);
      return next;
    });
  }
}

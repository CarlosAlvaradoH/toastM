import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-toast-animation';

  i = 0;

  constructor(public toastService: ToastService) {}

  ngOnInit() {
    const items = [
      { title: `Toast ${this.i++}` },
      { title: `Toast ${this.i++}` },
      { title: `Toast ${this.i++}` },
      { title: `Toast ${this.i++}` },
      { title: `Toast ${this.i++}` },
    ];
    this.toastService.items$ = of(items);
  }

  addToast(types: string) {
    this.toastService.items$.subscribe((item) => {
      item.push({ 
        title: `Toast ${this.i++}`,
        body: `Esta seria la descripcion` ,
        type: types
      });
    });
  }
}

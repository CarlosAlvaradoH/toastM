import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Toast } from './toast';
import { ToastService } from './toast.service';

@Component({
  selector: 'labs-toast-item',
  templateUrl: 'toast-item.component.html',
  styleUrls: ['toast-item.component.scss'],
})
export class ToastItemComponent {
  @Input() toast: Toast;
  @Input() index: number;

  constructor(private toastService: ToastService) {}

  closeToast() {
    console.log(this.toast);
    this.toastService.items$.subscribe((arrToast) => {
      arrToast.splice(this.index, 1);
    });
  }

  classType(type: string) {
    switch (type) {
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      case 'wait':
        return 'wait';
      case 'warning':
        return 'warning';
      case 'datausage':
        return 'datausage';
      default:
        return 'success';
    }

    return 'success';
  }
}

export enum ToasterType {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WAIT = 'wait',
  WARNING = 'warning',
  DATAUSE = 'datause',
}

export class Toast {
  type?: string;
  title: string;
  body?: string;
  timeOut?: number;
  timeout?: number;
}

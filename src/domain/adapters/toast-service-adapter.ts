export type ToastOptions = {
  duration?: number;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
};

export interface ToastService {
  notify(message: string, options?: ToastOptions): string;
  success(message: string, options?: ToastOptions): string;
  error(message: string, options?: ToastOptions): string;
  loading(message: string, options?: ToastOptions): string;
  dismiss(toastId: string): void;
}

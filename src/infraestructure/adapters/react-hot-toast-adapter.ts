import toast from 'react-hot-toast';
import { ToastOptions, ToastService } from '@/domain/adapters/toast-service-adapter';

export class ReactHotToastAdapter implements ToastService {
  notify(message: string, options: ToastOptions = {}): string {
    return toast(message, options);
  }

  success(message: string, options: ToastOptions = {}): string {
    return toast.success(message, options);
  }

  error(message: string, options: ToastOptions = {}): string {
    return toast.error(message, options);
  }

  loading(message: string, options: ToastOptions = {}): string {
    return toast.loading(message, options);
  }

  dismiss(toastId: string) {
    toast.dismiss(toastId);
  }
}

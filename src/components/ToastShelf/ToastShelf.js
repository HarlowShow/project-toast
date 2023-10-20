import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';


function ToastShelf() {
  const { toasts, deleteToast } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      { toasts.map(({variant, message, id}) => (
        <li key={id} className={styles.toastWrapper}>
        <Toast type={variant} deleteToast={() => deleteToast(id)}>
          {message}
        </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts, deleteToast } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      { toasts.map(({variant, message, id}, index) => (
        <li key={id} className={styles.toastWrapper}>
        <Toast type={variant} deleteToast={() => deleteToast(index)}>
          {message}
        </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

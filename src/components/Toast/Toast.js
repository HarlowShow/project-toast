import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import Icon from '../Icon'

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({type, deleteToast, children}) {
  const activeIcon = ICONS_BY_VARIANT[type] || Info;
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
        <Icon icon={activeIcon} />
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton} onClick={deleteToast}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;

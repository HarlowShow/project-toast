import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const {
    message,
    setMessage,
    variant,
    setVariant,
    toasts,
    addToast,
    resetToasts,
  } = React.useContext(ToastContext);


  React.useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        resetToasts()
        console.log('effect rendered')
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [resetToasts]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {toasts.length > 0 && <ToastShelf />}
      <form onSubmit={addToast}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((type) => (
                <label
                  key={`variant-${type}`}
                  id={`variant-${type}`}
                  htmlFor="variant-notice"
                >
                  <input
                    checked={type === variant}
                    type="radio"
                    name="variant"
                    value={type}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {type}
                </label>
              ))}

              {/* TODO Other Variant radio buttons here */}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

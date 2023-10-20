import React from "react";
export const ToastContext = React.createContext();
// const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);

  const addToast = (event) => {
    event.preventDefault();
    const newId = crypto.randomUUID();
    const nextToast = { variant, message, id: newId };
    setToasts([...toasts, nextToast]);
    setVariant("notice");
    setMessage("");
  };

  const deleteToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id)
    // nextToasts.splice(index);
    setToasts([...nextToasts]);
  };

  const resetToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        variant,
        setVariant,
        toasts,
        addToast,
        deleteToast,
        resetToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

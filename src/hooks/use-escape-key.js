import React from 'react'
// import { ToastContext } from '../components/ToastProvider';

const useEscapeKey = ((callback) => {
    // const { resetToasts } = React.useContext(ToastContext)
    React.useEffect(() => {
        const handleKeydown = (e) => {
          if (e.code === "Escape" && callback) {
            callback()
            console.log('effect rendered')
          }
        };
    
        window.addEventListener("keydown", handleKeydown);
    
        return () => {
          window.removeEventListener("keydown", handleKeydown);
        };
      });
})

export default useEscapeKey
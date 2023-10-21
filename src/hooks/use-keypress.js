import React from 'react'
// import { ToastContext } from '../components/ToastProvider';

const useKeyPress = ((key, callback) => {
    // const { resetToasts } = React.useContext(ToastContext)

        React.useEffect(() => {
            const handleKeydown = (e) => {
              if (e.code === key && callback) {
                callback()
                console.log('effect rendered')
              }
            };
        
            window.addEventListener("keydown", handleKeydown);
        
            return () => {
              window.removeEventListener("keydown", handleKeydown);
            };
          });
    }
)

export default useKeyPress
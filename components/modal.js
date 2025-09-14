import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import IconButton from "./iconbutton/iconbutton";
import Button from "./button/button";

export default function Modal({ children, onClose }) {
  const modalRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  // Use state to manage whether the component is mounted on the client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // This runs only on the client
    
    // Once mounted, set up the focus trap and event listeners
    previouslyFocusedElement.current = document.activeElement;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab") {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

const timer = setTimeout(() => {
  if (modalRef.current) {
    modalRef.current.focus();
  }
}, 10);

    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [onClose]);

  // If we are not on the client, return null
  if (!mounted) {
    return null;
  }

  // Now that we are on the client, render the portal
  return createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      ref={modalRef}
      tabIndex="-1"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close-button">
          <IconButton onClick={onClose} icon="close">
            Close
          </IconButton>
        </div>
        <div className="modal-body">
          <div className="modal-body-content">
            {children}
          </div>
          <Button
            link="https://drive.google.com/file/d/1_nsprB3PGrtYcXfJrhbidR1VktYhjVvz/view"
            newWindow
          >
            Download resume
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
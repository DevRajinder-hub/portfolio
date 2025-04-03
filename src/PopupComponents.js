import React, { useState, useEffect } from 'react';

// Notification Component
export const Notification = ({ title, message, onClose, autoClose = true, actions = [] }) => {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  return (
    <div className="notification">
      <div className="notification-header">
        <div className="notification-title">{title}</div>
        <button className="notification-close" onClick={onClose}>✕</button>
      </div>
      <div className="notification-body">
        <p className="notification-message">{message}</p>
        {actions.length > 0 && (
          <div className="notification-actions">
            {actions.map((action, index) => (
              <button 
                key={index}
                className={`notification-btn ${action.secondary ? 'secondary' : ''}`}
                onClick={() => {
                  action.onClick();
                  onClose();
                }}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Modal Component
export const Modal = ({ title, children, isOpen, onClose, actions = [] }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {actions.length > 0 && (
          <div className="modal-footer">
            {actions.map((action, index) => (
              <button 
                key={index} 
                className={`modal-btn ${action.secondary ? 'secondary' : ''}`}
                onClick={() => {
                  action.onClick();
                  if (action.closeOnClick !== false) {
                    onClose();
                  }
                }}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Custom hook for managing notifications
export const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = (notification) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { ...notification, id }]);
    return id;
  };

  const closeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return {
    notifications,
    showNotification,
    closeNotification,
    NotificationContainer: () => (
      <>
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            title={notification.title}
            message={notification.message}
            actions={notification.actions}
            autoClose={notification.autoClose}
            onClose={() => closeNotification(notification.id)}
          />
        ))}
      </>
    ),
  };
};

// Custom hook for managing modals
export const useModal = () => {
  const [modals, setModals] = useState({});

  const openModal = (id, props = {}) => {
    setModals(prev => ({ ...prev, [id]: { isOpen: true, props } }));
  };

  const closeModal = (id) => {
    setModals(prev => ({ ...prev, [id]: { ...prev[id], isOpen: false } }));
  };

  const getModalProps = (id) => {
    return modals[id] || { isOpen: false, props: {} };
  };

  return {
    openModal,
    closeModal,
    getModalProps,
  };
};
// src/unique/components/NotificationComponent.js
import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const NotificationComponent = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      ) : (
        <p>No notifications available.</p>
      )}
    </div>
  );
};

export default NotificationComponent;

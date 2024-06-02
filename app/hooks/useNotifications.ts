"use client"

/** 
* Use this hook send desktop notification 
* @returns notification object
* @returns {object} object.hasPermission() - get if browser has notification permissions
* @returns {object} object.activateNotifications(notifySuccess: boolean = false) - request notification permissions
* @returns {object} object.notify() - send notification using native notification params
*/
export const useNotifications = () => {
  const granted = 'granted';

  const hasPermission = () => typeof Notification === 'undefined' ? false : Notification.permission === granted

  async function activateNotifications(notifySuccess: boolean = false): Promise<boolean> {
    if (!hasPermission()) {
      const permission = await Notification.requestPermission();
      const allowed = permission === granted;
      if (allowed && notifySuccess) {
        notify('Notifications are now allowed');
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  // eslint-disable-next-line no-undef
  async function notify(title: string, options: NotificationOptions = {}): Promise<Notification | null> {
    if (hasPermission()) {
      return new Notification(title, options);
    }
    const permission = await activateNotifications();
    if (permission) {
      return new Notification(title, options);
    }
    return null;
  }

  return {
    hasPermission: hasPermission(),
    activateNotifications,
    notify
  }
} 

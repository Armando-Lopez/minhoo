
class EventBus {
  constructor() {
    // initialize event list
    this.eventObject = {};
    // id of the callback function list
    this.callbackId = 0;
  }
  // publish event
  publish(eventName, ...args) {
    // Get all the callback functions of the current event
    const callbackObject = this.eventObject[eventName];

    if (!callbackObject) return console.warn(eventName + " not found!");

    // execute each callback function
    for (let id in callbackObject) {
      // pass parameters when executing
      callbackObject[id](...args);
    }
  }
  // Subscribe to events
  subscribe(eventName, callback) {
    // initialize this event
    if (!this.eventObject[eventName]) {
      // Use object storage to improve the efficiency of deletion when logging out the callback function
      this.eventObject[eventName] = {};
    }

    const id = this.callbackId++;

    // store the callback function of the subscriber
    // callbackId needs to be incremented after use for the next callback function
    this.eventObject[eventName][id] = callback;

    // Every time you subscribe to an event, a unique unsubscribe function is generated
    return () => {
      // clear the callback function of this subscriber
      delete this.eventObject[eventName][id];

      // If this event has no subscribers, also clear the entire event object
      if (Object.keys(this.eventObject[eventName]).length === 0) {
        delete this.eventObject[eventName];
      }
    };

  }
}

const eventBus = new EventBus()
export default eventBus
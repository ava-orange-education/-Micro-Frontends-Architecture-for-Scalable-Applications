const EventBus = (() => {
  const events = {};

  return {
    subscribe(namespace, eventName, callback) {
      if (!events[namespace]) {
        events[namespace] = {};
      }
      if (!events[namespace][eventName]) {
        events[namespace][eventName] = [];
      }
      events[namespace][eventName].push(callback);
    },

    publish(namespace, eventName, data) {
      if (!events[namespace] || !events[namespace][eventName]) return;
      events[namespace][eventName].forEach((callback) => callback(data));
    },

    unsubscribe(namespace, eventName, callback) {
      if (!events[namespace] || !events[namespace][eventName]) return;
      events[namespace][eventName] = events[namespace][eventName].filter(
        (cb) => cb !== callback
      );
    },
  };
})();

export default EventBus;

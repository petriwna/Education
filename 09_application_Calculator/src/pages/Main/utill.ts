export function addListener(id, eventType, callback) {
  const node = document.getElementById(id);
  if (node) {
    node.addEventListener(eventType, callback);
  }
}

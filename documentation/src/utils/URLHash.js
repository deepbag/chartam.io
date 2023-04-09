export function changeHashValue(newHashValue) {
  const newUrl = new URL(window.location.href);
  newUrl.hash = newHashValue;
  window.history.pushState(null, "", newUrl);
}

export function getHashValue() {
  return window.location.hash;
}

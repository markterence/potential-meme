const reserved = ['www']
export const getSubdomain = () => {
  let hostname = window.location.hostname.toLowerCase();
  hostname = hostname.replace("-staging", "");
  const hostnameSections = hostname.split(".");
  const first = hostnameSections[0];
  if (reserved.includes(first)) {
    return hostnameSections[1];
  } else {
    return first;
  }
};
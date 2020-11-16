export const days = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const mounths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const getDate = new Date().getDate();
export const getDay = days[new Date().getDay()];
export const getMonth = mounths[new Date().getMonth()];

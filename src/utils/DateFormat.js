const months = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo',
];

// Add 0 to day
function dayDigit(string) {
  return `0${string}`.slice(-2);
}

// Format month
export const monthFormat = date => {
  if (!date) {
    return undefined;
  }
  const monthName = months[date.getMonth()];
  return monthName;
};

// Format Day Label
export const dayLabelFormat = date => {
  if (!date) {
    return undefined;
  }
  const dayName = days[date.getDay() - 1];
  return dayName;
};

// Format Day
export const dayFormat = date => {
  if (!date) {
    return undefined;
  }
  const dayNumber = dayDigit(date.getDate());
  return dayNumber;
};
// Format Date
export const formatDate = date => {
  if (!date) {
    return undefined;
  }
  return `${date.getFullYear()}-${dayDigit(date.getMonth() + 1)}-${dayDigit(
    date.getDate(),
  )} ${dayDigit(date.getHours())}:${dayDigit(date.getMinutes())}:${dayDigit(
    date.getSeconds(),
  )}`;
};

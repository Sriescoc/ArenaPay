export const validateRut = (rut: string) => {
  if (!/^[0-9]+-[0-9kK]{1}$/.test(rut)) return false;
  const [num, dv] = rut.split('-');
  let total = 0;
  let factor = 2;
  for (let i = num.length - 1; i >= 0; i--) {
    total += parseInt(num[i]) * factor;
    factor = factor === 7 ? 2 : factor + 1;
  }
  const waitDV = 11 - (total % 11);
  let realDV = waitDV === 11 ? '0' : waitDV === 10 ? 'k' : waitDV.toString();
  return realDV.toLowerCase() === dv.toLowerCase();
};

export const formatRut = (value: string) => {
  const clean = value.replace(/[^0-9kK]/g, '');
  if (clean.length <= 1) return clean;
  const dv = clean.slice(-1);
  const num = clean.slice(0, -1);
  return `${num.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}-${dv}`;
};

function checkRut(rut: string): boolean {
  try {
    if (!rut || rut.length !== 12) {
      return false;
    }

    const digitC = Number.parseInt(rut.substr(11, 1));
    const rest = rut.substr(0, 11);

    let total = 0;
    let factor = 2;

    for (let i = 10; i >= 0; i--) {
      const n = Number.parseInt(rest.substr(i, 1));
      total += factor * n;
      if (factor === 9) {
        factor = 2;
      } else {
        factor++;
      }
    }

    let digitV = 11 - (total % 11);
    if (digitV === 11) {
      digitV = 0;
    } else if (digitV === 10) {
      digitV = 1;
    }

    return digitV === digitC;
  } catch {
    return false;
  }
}
export default checkRut;

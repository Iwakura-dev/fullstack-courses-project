function generateId() {
  return Math.abs(
    Math.floor(Math.random() * 9999) / Math.ceil(Math.random() * 2222),
  );
}

export const randomId = generateId();

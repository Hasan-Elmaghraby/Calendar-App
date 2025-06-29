export const getBeforeAndAfter = (arr: number[]) => {
  const firstOneIndex = arr.indexOf(1);

  // Find all indices of 30
  const all30Indices = arr.reduce((acc, val, i) => {
    if (val === 30) acc.push(i);
    return acc;
  }, []);

  // Get index of second 30 (if it exists)
  const second30Index = all30Indices[1];

  // Slice before first 1
  const beforeFirst1 = arr.slice(0, firstOneIndex);

  // Slice after second 30 (if it exists)
  const afterSecond30 =
    second30Index !== undefined ? arr.slice(second30Index + 1) : [];

  const result = [...beforeFirst1, ...afterSecond30];

  return result;
};

export function attemts_Number(result) {
  return result.filter((r) => r !== undefined).length;
}
export function flagResult(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 < earnPoints;
}
export function earnPoints_Number(result, answers, point) {
  return result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map((i) => point)
    .reduce((x, y) => x + y, 0);
}

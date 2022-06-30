export const saveSolution = (solution) => {
  localStorage.setItem("solution", JSON.stringify(solution));
};

export const getSolution = (_) => {
  const solution = localStorage.getItem("solution");

  return solution ? JSON.parse(solution) : null;
};

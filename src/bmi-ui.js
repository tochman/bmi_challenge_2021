const button = document.getElementById('calculate')
const resultsNode = document.getElementById('results')

button.addEventListener('click', () => {
  const weight = document.body.children.weigth.value
  const height = document.body.children.height.value
  const assessment = bmiCalculator.calculate(weight, height)
  resultsNode.innerHTML = `Your BMI value is ${assessment.value}. You are considered ${assessment.message}`
})
const button = document.getElementById('calculate')
const resultsNode = document.getElementById('results')

button.addEventListener('click', () => {
  const weight = document.body.children.weigth.value
  const height = document.body.children.height.value
  const bmiValue = bmiCalculator.calculate(weight, height)
  resultsNode.innerHTML = `Your BMI value is ${bmiValue}`
})
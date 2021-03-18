

const bmiCalculator = {
  calculate(weight, height) {
    // debugger
    let bmiValue = weight / (height / 100 * height / 100)
    return bmiValue.toFixed(2)
  }
}
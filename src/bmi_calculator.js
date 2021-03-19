

const bmiCalculator = {
  calculate(weight, height) {
    let bmiValue = weight / (height / 100 * height / 100)
    let message = this.checkClassification(bmiValue)
    return { value: bmiValue.toFixed(2), message: message }
  },

  checkClassification(bmiValue) {
    if (bmiValue <= 18.5) {
      return 'Underweight'
    } else if (bmiValue > 18.5 && bmiValue <= 24.9) {
      return 'Normal'
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return 'Overweight'
    } else {
      return 'Obese'
    }
  }
}
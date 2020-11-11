const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const divideButton = document.querySelector('#divide')
const multiplyButton = document.querySelector('#multiply')
const clearButton = document.querySelector('#clear')
const resultButton = document.querySelector('#resultButton')

let input = document.querySelector('#input')
let result = document.querySelector('#result')
let temp = []
let operator = []

plusButton.addEventListener('click', () => {
  if (input.value) {
    temp = Number(input.value)
    operator = '+'
    input.value = null
    result.value = null
  }
})

minusButton.addEventListener('click', () => {
  if (input.value) {
    temp = Number(input.value)
    operator = '-'
    input.value = null
    result.value = null
  }
})

divideButton.addEventListener('click', () => {
  if (input.value) {
    temp = Number(input.value)
    operator = '/'
    input.value = null
    result.value = null
  }
})

multiplyButton.addEventListener('click', () => {
  if (input.value) {
    temp = Number(input.value)
    operator = '*'
    input.value = null
    result.value = null
  }
})

clearButton.addEventListener('click', () => {
  input.value = null
  temp = null
  operator = null
  result.value = null
})

resultButton.addEventListener('click', () => {
  console.log(temp, operator, input.value)

  if (operator) {
    if (temp) {
      if (operator === '+') {
        result.value = temp + Number(input.value)
      } else if (operator === '-') {
        result.value = temp - Number(input.value)
      } else if (operator === '/') {
        result.value = temp / Number(input.value)
      } else if (operator === '*') {
        result.value = temp * Number(input.value)
      }
    }
    input.value = null
    operator = null
    temp = Number(result.value)
  } else {
    if (input.value) {
      result.value = input.value
      input.value = null
    }
  }
})
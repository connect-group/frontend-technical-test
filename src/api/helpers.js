// function sumOfThreeElements(...elements) {
//   return new Promise ((resolve, reject) => {
//     if (elements.length > 3) {
//       reject ('Only three elements of fewer are allowed')
//     } else {
//       const sum = elements.reduce((acc, current) => acc + current, 0)
//       resolve(`Sum has been calculated ${sum}`)
//     }
//   })}

// async function calculate() {
//   const result = await sumOfThreeElements(2,4,4)
//   console.log(result)
// }

// calculate()

// sumOfThreeElements(1,2,5)
// .then((result) => {
//   console.log(`Success: ${result}`)
// })
// .catch((error) => {
//   console.log(`Error: ${error}`)
// })

function sumOfThreeElements(...elements) {
  return new Promise ((resolve, reject) => {
    if (elements.length > 4) {
      reject ('Only three elements or fewer are allowed')
    } else {
      const sum = elements.reduce((acc, current) => acc + current, 0)
      resolve(`Sum has been calculated ${sum}`)
    }
  })
}

async function calculate() {
  try {
    const result = await sumOfThreeElements(1,2,4,4)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

calculate()



function countPrimeNumbers() {
    let countPrime = 0
    for(let number = 2; number <= 100; number++){
        let isPrime = true
        for(let i = 2; i <= Math.sqrt(number); i++) {
            if(number % i === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            countPrime++
        }
    }
    return countPrime
}

const start = performance.now()
const countPrime = countPrimeNumbers()
const end = performance.now()

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`)
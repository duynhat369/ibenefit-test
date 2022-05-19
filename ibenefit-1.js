// Hãy viết hàm sắp xếp mãng số bên dưới để ra được số lớn nhất.

// VD: [1, 10, 11] => Số lớn nhất 11110.

// • [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12] => 9 99 91 8 79 32 22 12 1 10 0 (999918793222121100)

// • [99, 19, 29, 919, 392, 0, 1] => 99 919 392 29 19 1 0 (99919392291910)

const currentArray1 = [1, 10, 11]
const currentArray2 = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12]
const currentArray3 = [99, 19, 29, 919, 392, 0, 1]

const arrayToLargestNumber = (arrayNeededConvert) => {
    arrayNeededConvert.sort((first, second) => {
        var firstSecond = '' + first + second;
        var secondFirst = '' + second + first;
        return firstSecond > secondFirst ? -1 : 1;
    })
    console.log("arrayNeededConvert after sort", arrayNeededConvert)
    const LargestNumber = arrayNeededConvert.join('')
    return LargestNumber
}

const result = arrayToLargestNumber(currentArray3)
console.log("result", result)







































// // swap array elements
// const swapArrayElements = (a, x, y) => {
//     if (a.length === 1) return a;
//     a.splice(y, 1, a.splice(x, 1, a[y])[0]);
//     return a;
// }

// // convert array to max number
// const arrayToMaxNumber = (arrayNeededConvert) => {
//     if (!arrayNeededConvert) {
//         console.log("array not available")
//         return
//     }

//     console.log("current arrayNeededConvert", arrayNeededConvert);
//     arrayNeededConvert.sort();
//     arrayNeededConvert.reverse();
//     console.log("reverse arrayNeededConvert", arrayNeededConvert);

//     const lengthArrayNeededConvert = arrayNeededConvert.length
//     //     let currentNumber

//     // [8,9] [7,8,9]
//     for (let i = 0; i < lengthArrayNeededConvert - 1; i++) {
//         for (let j = i + 1; j < lengthArrayNeededConvert; j++) {
//             var digits1 = arrayNeededConvert[i].toString().split('');
//             var realDigits1 = digits1.map(Number)
//             var digits2 = arrayNeededConvert[j].toString().split('');
//             var realDigits2 = digits2.map(Number)

//             if (realDigits1.length > realDigits2.length) {
//                 for (let k = 0; k < realDigits1.length; k++) {
//                     if (realDigits1[k] < realDigits2[k]) {
//                         swapArrayElements(arrayNeededConvert, i, j)
//                         break
//                     }
//                 }
//             } else {
//                 for (let k = 0; k < realDigits2.length; k++) {
//                     if (realDigits1[k] < realDigits2[k]) {
//                         swapArrayElements(arrayNeededConvert, i, j)
//                         break
//                     }
//                 }
//             }
//         }

//         // if (currentArray1[i] || currentArray1[i]) {

//         // }
//     }
//     console.log("swap arrayNeededConvert", arrayNeededConvert)

//     //     // arrayNeededConvert.reduce((preValue, currentValue) => {

//     //     // }, 0)

//     //     return currentNumber
// }

// arrayToMaxNumber(currentArray1)
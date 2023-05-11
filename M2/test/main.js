// function findEvenNumbers(positiveNumbers){
//     return positiveNumbers.filter(e => e % 2 ==0)
// }
// console.log(findEvenNumbers([5,2,11,29,40,21,72]))

// function findDivideByNumber(positiveNumbers,divider){
//     return positiveNumbers.filter(e => e % divider === 0)
// }
// console.log(findDivideByNumber([10,100,5,2,11,29,40,21,72],5))

// function findDivideByNumber(positiveNumbers,dividers){
//     if(positiveNumbers === undefined || positiveNumbers === null || positiveNumbers.length === 0) return []
//     let result = positiveNumbers
//     dividers.forEach((divider) => {
//         result = result.filter(e => e % divider === 0)
//     })
//     return result
// }
// console.log(findDivideByNumber([6,5,2,11,29,40,21,72], [2,3]))

// function findDevideByObjects(positiveNumbers,dividers){
//     if (findDevideByObjects === null || findDevideByObjects === undefined || findDevideByObjects.length === 0)return {}
//     if (dividers === null || dividers === undefined || dividers.length === 0){return []}
//     let result = []
//     let ps1 = []
//     dividers.forEach((dividers) => {
//         result = positiveNumbers.filter(e => e % dividers === 0)
//         let p = {positiveNumbers: result, dividers: dividers}
//         ps1.push(p)
//     });
//     return ps1
//     }
    // console.log(findDevideByObjects([6,12,15,45,21,33,36],[3,5,10]))
    // console.log(findDevideByObjects([2,5,87,100],[]))
    // console.log(findDevideByObjects([],[2,5]))
    // console.log(findDevideByObjects([],[]))


    // function findDevideByObjects(positiveNumbers,dividers){
    //         if(positiveNumbers === undefined || positiveNumbers === null || positiveNumbers.length === 0) return []
    //         if(dividers === null || dividers === undefined || dividers.length === 0) return []
    //         let result = []
    //         let ps = []
    //         dividers.forEach((dividers) => {
    //             result = positiveNumbers.filter(e => e % dividers === 0)  
    //             let p = {positiveNumbers: result,dividers: dividers}
    //             ps.push(p)
    //         })
    //         return ps
    //     }
    //     console.log(findDevideByObjects([6,12,15,45,21,33,36],[3,5,10]))
    //     console.log(findDevideByObjects([2,5,87,100],[]))






    // ---------------------------------------- w2 ------------------------------------------
// function countTotalVowels(sentence){
//     if(sentence === null || sentence === undefined)return undefined
//     let aeiou = 0
//     for (const sara of sentence.toLowerCase()) {
//         switch(sara){
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//             aeiou++
//         }
//     }
//     return aeiou
// }

// function countTotalVowels(sentence){
//     if(sentence === null || sentence === undefined)return undefined
//     let a = 0
//     let e = 0
//     let i = 0
//     let o = 0
//     let u = 0
//     for (const sara of sentence.toLowerCase()) {
//         switch(sara){
//             case 'a':
//             a++
//             break;

//             case 'e':
//             e++
//             break;

//             case 'i':
//             i++
//             break;

//             case 'o':
//             o++
//             break;

//             case 'u':
//             u++
//             break;
//         }
//     }
//     return {a: a,e: e,i: i,o: o,u: u}
// }

// console.log(countTotalVowels('xyz'));
// console.log(countTotalVowels('aeiou'));
// console.log(countTotalVowels('Ant, Octopus, Uakari, and Elephant is a kind of animal'));
// console.log(countTotalVowels(undefined));
// console.log(countTotalVowels(null));

// function countVowels(sentence){
//     if(sentence === null || sentence === undefined)return undefined
//     let a = 0
//     let e = 0
//     let i = 0
//     let o = 0
//     let u = 0
//     let notthing = {}
//     for (const sara of sentence.toLowerCase()) {
//         switch(sara){
//             case 'a':
//             a++
//             break;

//             case 'e':
//             e++
//             break;

//             case 'i':
//             i++
//             break;

//             case 'o':
//             o++
//             break;

//             case 'u':
//             u++
//             break;
//         }
//     }
//     if(a>0) 
//     notthing['a']=a
//     if(e>0)
//     notthing['e']=e
//     if(i>0)
//     notthing['i']=i
//     if(o>0)
//     notthing['o']=o
//     if(u>0)
//     notthing['u']=u
//     return notthing

    
// }

// console.log(countVowels('xyz'));
// console.log(countVowels('aeiou'));
// console.log(countVowels('love'));
// console.log(countVowels('Ant, Octopus, Uakari, and Elephant is a kind of animal'));
// console.log(countVowels(undefined));
// console.log(countVowels(null));

function countVowelsInArray(sentences){
    if(sentences === null || sentences === undefined)return undefined
    let a = 0
    let e = 0
    let i = 0
    let o = 0
    let u = 0
    let notthing = {}
    sentences.forEach(item => {
    for (const sara of item.toLowerCase()) {
        switch(sara){
            case 'a':
            a++
            break;

            case 'e':
            e++
            break;

            case 'i':
            i++
            break;

            case 'o':
            o++
            break;

            case 'u':
            u++
            break;
        }
    } 
})
if(a>0) 
    notthing['a']=a
    if(e>0)
    notthing['e']=e
    if(i>0)
    notthing['i']=i
    if(o>0)
    notthing['o']=o
    if(u>0)
    notthing['u']=u
    return notthing
}


console.log(countVowelsInArray (['xyz', 'love', 'ant'])) //return { a: 1, e: 1, o: 1 }
console.log(countVowelsInArray(['aeiou'])) //return { a: 1, e: 1, i: 1, o: 1, u: 1 } 
console.log(countVowelsInArray(['bb', 'cc', 'dd', 'ff'])) //return {} 
console.log(countVowelsInArray(['Ant', 'Octopus', 'Uakari', 'kind', 'of']))// return { a: 3, i: 2, o: 3, u: 2 }
console.log(countVowelsInArray(undefined)) // return undefined
console.log(countVowelsInArray(null))
export function oneMissingCalculator({evaluations, targetGrade, configGrade}) {
    let totalWeight = 0

    let evalIncognita =null
    const otherEvals= new Array()
    for (const evaluation of evaluations){
        // formatear bien lo porcentajes para el calculo
        const evaluationFormated = {
            ...evaluation,
            weight:evaluation.weight*0.01
        }
        //sacar total de los porcentajes
        totalWeight += evaluationFormated.weight
        if (evaluation.grade === null) evalIncognita = evaluationFormated
        else otherEvals.push(evaluationFormated)
        
    }
    console.log(evalIncognita)
    console.log('---------------')
    console.log(otherEvals)
    let numerador=4
    for (const evaluation of otherEvals){
        numerador = numerador-(evaluation.grade*evaluation.weight/totalWeight)
    }
    const result=numerador/((evalIncognita.weight)/(totalWeight))
    console.log(result)

}



//oneMissingCalculator({ 
//    evaluations:[
//        {name:"hola", grade:1, weight:20},
//        {name:"hola", grade:null, weight:20},
//
//        
//    ]
//})

//oneMissingCalculator({ 
//    evaluations:[
//        {name:"hola", grade:1, weight:20},
//        {name:"hola2", grade:7, weight:30},
//        {name:"hola3", grade:null, weight:50},    
//    ]
//})
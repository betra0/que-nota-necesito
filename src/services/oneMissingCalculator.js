export function oneMissingCalculator({evaluations, targetGrade, configGrade}) {
    const totalWeight = evaluations.reduce(
      (sum, evaluation) => sum + evaluation.weight,
      0
    );

    let evalIncognita =null
    const otherEvals= new Array()
    for (const evaluation of evaluations){
        if (evaluation.grade === null) evalIncognita = evaluation
        else otherEvals.push(evaluation)

    }
    console.log(evalIncognita)
    console.log('papopepos')
    console.log(otherEvals)
    let numerador=4
    for (const evaluation of otherEvals){
        numerador = numerador-(evaluation.grade*(evaluation.weight*0.01)/(totalWeight*0.01))
    }
    const result=numerador/((evalIncognita.weight*0.01)/(totalWeight*0.01))
    console.log(result)

}



//oneMissingCalculator({ 
//    evaluations:[
//        {name:"hola", grade:1, weight:30},
//        {name:"hola", grade:7, weight:20},
//
//        {name:"hola2", grade:null, weight:10}
//    ]
//})
import { oneMissingCalculator } from "../services/oneMissingCalculator";
import EvaluationList from "./EvaluationList"
import ModeSelector from "./ModeSelector"
import ResultCard from "./ResultCard"
import TargetGrade from "./TargetGrade"
import { useState, useEffect, useMemo } from "react";



function HomeCard() {

  const [evaluations, setEvaluations]= useState([
    { name: '', grade: '', weight: '' },
    { name: '', grade: '', weight: '' },

  ]);
  const [configGrade, setConfigGrade] = useState({'gradeMin': 1.0, 'gradeMax': 7.0});
  const [targetGrade, setTargetGrade] = useState('4');
  const [result, setResult] =useState(null)

  const validate = (evaluations, configGrade, targetGrade) => {
    // Validar que solo alla solo una evaluación sin nota, esten todas las ponderaciones, y este la nota objetivo y los config de nota minima y maxima
    const evaluationsWithoutGrade = evaluations.filter(evaluation => evaluation.grade === '');
    const allWeightsPresent = evaluations.every(evaluation => evaluation.weight !== '');
    const targetGradePresent = targetGrade !== '';
    const configGradeValid = configGrade.gradeMin !== '' && configGrade.gradeMax !== '';

    return({
      grade: (evaluationsWithoutGrade.length === 1 && evaluations.length > 1),
      weight: allWeightsPresent,
      target: targetGradePresent,
      config: configGradeValid
    })

  }
  const targetGradeHandler = (value)=>{
    if (value !== '' && isNaN(value)){
      return
    }
    setTargetGrade(value)
  }

  const validationResults = useMemo(() => validate(evaluations, configGrade, targetGrade), [evaluations, configGrade, targetGrade]);


  const addEvaluation =() => {
    setEvaluations([...evaluations, { name: '', grade: '', weight: '' }]);
  }
  const removeEvaluation = (index) => {
    const newEvaluations = [...evaluations];
    newEvaluations.splice(index, 1);
    setEvaluations(newEvaluations);
  }
  const updateEvaluation = (index, field, value) => {
    setEvaluations(prev =>
      prev.map((evaluation, i) =>
        i === index
          ? { ...evaluation, [field]: value }
          : evaluation
      )
    );
  };

  const summitHandler = (e) => {
    e.preventDefault();
    console.log('Evaluations:', evaluations);
    console.log('Target Grade:', targetGrade);
    console.log('Config Grade:', configGrade);
    if (!validationResults.grade || !validationResults.weight || !validationResults.target || !validationResults.config) {
      console.log('Validation failed. Cannot submit.');
      return;
    }
    const evaluationsFormatted = evaluations.map(evaluation => ({
      ...evaluation,
      grade: evaluation.grade === '' ? null : parseFloat(evaluation.grade),
      weight: evaluation.weight === '' ? null : parseFloat(evaluation.weight),
    }));
    const {gradeMissing, evaluation} = oneMissingCalculator({evaluations: evaluationsFormatted, targetGrade, configGrade})   
    setResult({gradeMissing, evaluation}) 


  };


  //useEffect(() => {
  //}, [evaluations, targetGrade, configGrade]);

  const allValid = validationResults.grade && validationResults.weight && validationResults.target && validationResults.config;
  const colorSumitButton = allValid ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-600 cursor-not-allowed';




  
  return (
    <>   

      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          ¿Qué nota necesito?
        </h1>
        <p className="mt-3 text-gray-400">
          Calcula la nota mínima necesaria para pasar un ramo.
        </p>
        <p className="mt-3 text-gray-500 text-sm">
          coloca tus notas y ponderaciones de cada evaluación y la nota final que quieres obtener, y te diremos la nota mínima que necesitas en la o las evaluaciones que te falten para alcanzar tu objetivo.
  
        </p>
      </header>

      {/* Card Principal */}
      <section className="rounded-3xl border border-gray-700 bg-gray-800 p-6 shadow-2xl">

        
        {/* Modos */}
        <ModeSelector/>


        {/* Separador */}
        <div className="my-3 mb-5 h-px bg-gray-700" />

        {/* Evaluaciones */}
        <EvaluationList 
          evaluations={evaluations}
          addEvaluation={addEvaluation}
          removeEvaluation={removeEvaluation}
          updateEvaluation={updateEvaluation}
          configGrade={configGrade}
        />
        
        {/* Separador */}
        <div className="my-4 h-px bg-gray-700" />

        
        <TargetGrade handlerInput={targetGradeHandler} targetGrade={targetGrade} />


        {/* Botón */}
        <button className={`mt-8 w-full rounded-xl py-2 text-lg font-semibold transition ${colorSumitButton}`}
        type="submit"
        onClick={summitHandler}


        >
          Calcular
        </button>
        {result? <ResultCard result={result}/>:null}

      </section>
    
    </>

  )
}

export default HomeCard
import { oneMissingCalculator } from "../services/oneMissingCalculator";
import ConfigCard from "./ConfigCard";
import EvaluationList from "./EvaluationList"
import ModeSelector from "./ModeSelector"
import ResultCard from "./ResultCard"
import TargetGrade from "./TargetGrade"
import { useState, useEffect, useMemo, useRef } from "react";
import { IconHelpCircle } from '@tabler/icons-react';



function HomeCard() {

  const [evaluations, setEvaluations]= useState([
    { name: '', grade: '', weight: '' },
    { name: '', grade: '', weight: '' },

  ]);
  const [configGrade, setConfigGrade] = useState({'gradeMin': '1.0', 'gradeMax': '7.0'});
  const [targetGrade, setTargetGrade] = useState('4.0');
  const [result, setResult] =useState(null)
  //referencia para ejecutar scroll a el resultado
  const resultRef = useRef(null);

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
  const configGradeHandler = (field, value) => {
  setConfigGrade(prev => ({
    ...prev,
    [field]: value
  }));
};

  const sumWeight = () => {
   return evaluations.reduce((sum, evaluation) => sum + (evaluation.weight===''?0:parseFloat(evaluation.weight)),0)
  }
  const validationResults = useMemo(() => validate(evaluations, configGrade, targetGrade), [evaluations, configGrade, targetGrade]);
  const totalWeight = useMemo(() => sumWeight(), [evaluations]);


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


  useEffect(() => {
    setResult(null)
  }, [evaluations, targetGrade, configGrade]);

  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [result]);

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
          Calcula la nota mínima que necesitas para aprobar tu asignatura.
        </p>
        <p className="mt-3 text-gray-500 text-sm">
          Ingresa las notas que ya tienes y sus ponderaciones. Deja vacía la nota que te falta y te diremos cuánto necesitas sacar para alcanzar tu objetivo.
        </p>
      </header>

      {/* Card Principal */}
      <section className="rounded-3xl bg-gray-800/70
 border border-gray-700/50
 backdrop-blur-sm p-6 shadow-2xl">

        
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

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Nota objetivo
          </h2>
          <button className="text-sm text-blue-400 hover:text-blue-300">
            <IconHelpCircle/>
          </button>
        </div>
        <TargetGrade handlerInput={targetGradeHandler} totalWeight={totalWeight} targetGrade={targetGrade} />
        <ConfigCard configGrade={configGrade} updateConfig={configGradeHandler} />


        {/* Botón */}
        <button className={`mt-8 w-full rounded-xl py-2 text-lg font-semibold transition ${colorSumitButton}`}
        type="submit"
        onClick={summitHandler}


        >
          Calcular
        </button>
        {result ? (
          <div ref={resultRef}>
            <ResultCard
              configGrade={configGrade}
              result={result}
            />
          </div>
        ) : null}

      </section>
    
    </>

  )
}

export default HomeCard
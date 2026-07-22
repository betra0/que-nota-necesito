import EvaluationList from "./EvaluationList"
import ModeSelector from "./ModeSelector"
import ResultCard from "./ResultCard"
import TargetGrade from "./TargetGrade"





function HomeCard() {

  
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
        <div className="my-3 mb-5 h-px bg-gray-700" />        {/* Resultado */}
        <div className="mt-8 rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center">
          <p className="text-gray-400">
            Resultado
          </p>
          <h3 className="mt-4 text-5xl font-bold text-blue-400">
            3.48
          </h3>
          <p className="mt-3 text-gray-300">
            Necesitas al menos un <strong>3.48</strong> para alcanzar tu objetivo.
          </p>
        </div>

        {/* Evaluaciones */}
        <EvaluationList />
        
        {/* Separador */}
        <div className="my-4 h-px bg-gray-700" />

        
        <TargetGrade />


        {/* Botón */}
        <button className="mt-8 w-full rounded-xl bg-blue-600 py-2 text-lg font-semibold transition hover:bg-blue-500">
          Calcular
        </button>
        <ResultCard/>

      </section>
    
    </>

  )
}

export default HomeCard
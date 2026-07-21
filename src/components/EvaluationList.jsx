import { useState } from "react";

function EvaluationList() {
  
  const [evaluations, setEvaluations]= useState([
    { name: '', grade: null, weight: null },

  ]);

  const addHandler =() => {
    setEvaluations([...evaluations, { name: '', grade: null, weight: null }]);
  }
  const removeHandler = (index) => {
    const newEvaluations = [...evaluations];
    newEvaluations.splice(index, 1);
    setEvaluations(newEvaluations);
  }

  
  return (
    <>   


      
        {/* Evaluaciones */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Evaluaciones
            </h2>
            <button className="text-sm text-blue-400 hover:text-blue-300">
              + Agregar
            </button>
          </div>
          <div className="mb-2 grid grid-cols-4 gap-3 text-xs uppercase tracking-wider text-gray-500">
            <span className="col-span-2">Nombre</span>
            <span>Nota</span>
            <span>Ponderación</span>
          </div>

          <div className="space-y-3">

            {evaluations.map((evaluation, index) => (
              <EvaluationRow
                key={`evaluation-${index}`}
                name={evaluation.name}
                grade={evaluation.grade}
                weight={evaluation.weight}
                index={index}
                evaluations={evaluations}
                setEvaluations={setEvaluations}
                removeFunction={() => removeHandler(index)}
              />
            ))}

            
          </div>

          <section className="space-y-3 flex items-center justify-center mt-3">
            <button 
            className="text-xl text-white bg-blue-600 rounded-xl px-5 py-2 " onClick={addHandler}>
              +
            </button>
          </section>

        </div>




    </>

  )
}






function EvaluationRow({ name, grade, weight, index, evaluations, setEvaluations }) {
  const removeHandler = (index) => {
    const newEvaluations = [...evaluations];
    newEvaluations.splice(index, 1);
    setEvaluations(newEvaluations);
  }
  const setName = (index, value) => {
    const newEvaluations = [...evaluations];
    newEvaluations[index].name = value;
    setEvaluations(newEvaluations);
  }
  const setGrade = (index, value) => {
    if (value !== '' && (isNaN(value) || value < 0 || value > 7)) {
      return;
    }
    const newEvaluations = [...evaluations];
    newEvaluations[index].grade = value;
    setEvaluations(newEvaluations);
  }
  const setWeight = (index, value) => {
    if (value !== '' && (isNaN(value) || value < 0 || value > 100)) {
      return;
    }
    const newEvaluations = [...evaluations];
    newEvaluations[index].weight = value;
    setEvaluations(newEvaluations);
  }

  
  return (
    <div className="grid grid-cols-14 gap-2">
              <button className="col-span-1 " onClick={() => removeHandler(index)}>
                x
              </button>
              <input
                placeholder="Ej: Prueba o Taller"
                className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-3 outline-none transition focus:border-blue-500
                col-span-6
                "
                onChange={(e) => setName(index, e.target.value)}
                value={name}
              />
              <input
                placeholder="?"
                className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-3 text-center outline-none transition focus:border-blue-500
                min-w-0 col-span-4"
                onChange={(e) => setGrade(index, e.target.value)}
                value={grade !== null ? grade : ''}
              />


              <div className="rounded-lg bg-gray-900 border border-gray-700
                flex min-w-0
                col-span-3
              ">
                <input
                placeholder="%"
                className="flex-1 w-full h-full m-0 px-3 py-3 rounded-lg border border-gray-700/0 text-center outline-none transition focus:border-blue-500
                min-w-0
                "
                onChange={(e) => setWeight(index, e.target.value)}
                value={weight !== null ? weight : ''}
              />
              <span className="bg-gray-700 text-center flex justify-center items-center px-2 rounded-lg">
                %
              </span>
              </div>


    </div>
  )
}
export default EvaluationList
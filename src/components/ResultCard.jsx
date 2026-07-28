import { useState } from "react";

function ResultCard({
  configGrade,
  result,
  targetGrade,
}) {

  let text1 = 'Necesitas al menos un'
  let text2 = 'para pasar el ramo o asignatura'
 if(result.gradeMissing>configGrade.gradeMax){

 }

const nota = Math.round(result.gradeMissing * 100) / 100;

const notaTexto = Number.isInteger(nota)
  ? nota.toFixed(1)
  : nota.toString();


  
  return (
    <>   
        {/* Resultado */}
        <div className="mt-4 rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center">
          <p className="text-gray-400">
            Resultado
          </p>
          <h3 className="mt-4 text-5xl font-bold text-blue-400">
            {notaTexto}
          </h3>
          <p className="mt-3 text-gray-300">
            Necesitas al menos un <strong>{notaTexto}</strong> para alcanzar tu objetivo.
          </p>
        </div>
    </>

  )}
  export default ResultCard
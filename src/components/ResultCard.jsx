import { useState } from "react";

function ResultCard({
  result
}) {
  


  
  return (
    <>   
        {/* Resultado */}
        <div className="mt-4 rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center">
          <p className="text-gray-400">
            Resultado
          </p>
          <h3 className="mt-4 text-5xl font-bold text-blue-400">
            {result.gradeMissing}
          </h3>
          <p className="mt-3 text-gray-300">
            Necesitas al menos un <strong>{result.gradeMissing}</strong> para alcanzar tu objetivo.
          </p>
        </div>
    </>

  )}
  export default ResultCard
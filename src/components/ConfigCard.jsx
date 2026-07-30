import { useState } from "react";
import { IconHelpCircle, IconPlus } from '@tabler/icons-react';

function ConfigCard({ configGrade, updateConfig}) {
  
	
	
	const setGradeMinMAx = (field, value) => {
		if (value !== '' && isNaN(value)){
      return
    }
    updateConfig(field, value);
  }

  
  return (
    <>   


      
        {/* Evaluaciones */}
        <div className="mt-1">

          <div className="mb-1 grid grid-cols-2 gap-3 text-xs uppercase tracking-wider text-gray-500">

            <span className="col-span-1">Nota minima</span>
            <span className="col-span-1">Nota maxima</span>

          </div>

          

        	<div className="grid grid-cols-2 gap-2">
		
        	      <input
        	        placeholder=""
        	        className="rounded-lg border border-gray-700 bg-gray-900 px-2 py-2 text-center outline-none transition focus:border-blue-500
        	        col-span-1
					
        	        "
									value={configGrade.gradeMin}
									onChange={(e)=>{setGradeMinMAx('gradeMin', e.target.value)}}
        	      />
        	      <input
        	        placeholder="?"
        	        className="rounded-lg border border-gray-700 bg-gray-900 px-2 py-2 text-center outline-none transition focus:border-blue-500
        	        min-w-0 col-span-1"
									value={configGrade.gradeMax}
									onChange={(e)=>{setGradeMinMAx('gradeMax', e.target.value)}}

        	      />
            
          </div>



        </div>




    </>

  )
}






export default ConfigCard
import { useState } from "react";

function TargetGrade({
  handlerInput,
  targetGrade,
  totalWeight,
}) {


  
  return (
    <>   
        {/* Objetivo */}

            <section className="grid grid-cols-16 gap-3">
              <input
              type="number"
              className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-center text-lg outline-none transition focus:border-blue-500
                col-span-12
              "
              value={targetGrade}
              onChange={(e)=>{handlerInput(e.target.value)}}
              />
              <span
                translate="no"
                className="
                  notranslate
                  col-span-4 w-full rounded-xl border border-gray-700 bg-gray-800
                  flex items-center justify-center
                  text-md font-semibold text-gray-400
                ">
                {totalWeight} %
              </span>
            </section>

    </>

  )}
  export default TargetGrade
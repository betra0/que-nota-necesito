import { useState } from "react";

function TargetGrade() {
  


  
  return (
    <>   
        {/* Objetivo */}
        <div>
          <label className="mb-3 block font-semibold">
            Nota objetivo
          </label>
            <section className="grid grid-cols-14 gap-3">
              <input
              defaultValue="4.0"
              className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-center text-lg outline-none transition focus:border-blue-500
                col-span-11
              "
              />
              <span className="col-span-3 w-full rounded-xl border border-gray-700 bg-gray-800 flex items-center justify-center
                text-md font-semibold text-gray-400
              "  >
                100 %
                </span>
            </section>
        </div>
    </>

  )}
  export default TargetGrade
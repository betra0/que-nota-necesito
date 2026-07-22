import { useState } from "react";

function ModeSelector() {
  const modosStyles = "w-full rounded-xl border px-4 py-2 text-left"


  
  return (
    <>   
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
            Modo
          </h2>
          <div className="space-y-2">
            <button className={`${modosStyles}  border-blue-500 bg-blue-500/10 transition hover:bg-blue-500/20`}>
              <div className="font-semibold">
                Me falta una nota
              </div>
              <p className="mt-1 text-sm text-gray-400">
                Calcula una única nota pendiente.
              </p>
            </button>
            <button
              disabled
              className={`${modosStyles} cursor-not-allowed border-gray-700 bg-gray-900 opacity-60`}
            >
              <div className="font-semibold">
                 Me faltan dos notas
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Disponible próximamente.
              </p>
            </button>
            <button
              disabled
              className={`${modosStyles} cursor-not-allowed border-gray-700 bg-gray-900 opacity-60`}
            >
              <div className="font-semibold">
                 Me faltan varias notas
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Disponible próximamente.
              </p>
            </button>
          </div>
        </div>
    </>

  )}
  export default ModeSelector
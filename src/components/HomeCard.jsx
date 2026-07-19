function HomeCard() {

  const modosStyles = "w-full rounded-xl border px-4 py-2 text-left"
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
        {/* Separador */}
        <div className="my-3 mb-5 h-px bg-gray-700" />
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
          <div className="mb-2 grid grid-cols-3 gap-3 text-xs uppercase tracking-wider text-gray-500">
            <span>Nombre</span>
            <span>Nota</span>
            <span>Ponderación</span>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <input
                placeholder="Ej: Certamen"
                className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-3 outline-none transition focus:border-blue-500"
              />
              <input
                placeholder="?"
                className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-3 text-center outline-none transition focus:border-blue-500"
              />
              <input
                placeholder="%"
                className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-3 text-center outline-none transition focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        {/* Separador */}
        <div className="my-8 h-px bg-gray-700" />
        {/* Objetivo */}
        <div>
          <label className="mb-3 block font-semibold">
            Nota objetivo
          </label>
          <input
            defaultValue="4.0"
            className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-center text-lg outline-none transition focus:border-blue-500"
          />
        </div>
        {/* Botón */}
        <button className="mt-8 w-full rounded-xl bg-blue-600 py-2 text-lg font-semibold transition hover:bg-blue-500">
          Calcular
        </button>
        {/* Resultado */}
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
      </section>
    
    </>

  )
}

export default HomeCard
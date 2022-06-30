const Modal = ({ isShow, handleClose }) => {
  const content = {
    title: isShow.type === "stats" ? "Estadísticas" : "Cómo jugar",
    body:
      isShow.type !== "stats" ? (
        <>
          <p className="my-4 text-xs leading-relaxed dark:text-white">
            Adivina la palabra oculta en cinco intentos.
            <p>Cada intento debe ser una palabra válida de 5 letras.</p>
            <p>
              Despues de cada intento el color de las letras cambia para mostrar
              qué tan cerca estás de acertar la palabra.
            </p>
          </p>

          <p className="text-xs font-bold pb-4 dark:text-white">Ejemplos</p>
          <div className="flex flex-grow justify-start mb-1">
            {["G", "A", "T", "O", "S"].map((item, i) => (
              <div
                key={i}
                className={`w-12 h-12 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded dark:text-white ${
                  item === "G" ? "bg-green-500 dark:bg-green-500" : "bg-white"
                } dark:bg-slate-900 border-slate-200 dark:border-slate-600`}
              >
                <div className="letter-container">{item}</div>
              </div>
            ))}
          </div>
          <p className="text-xs py-4 dark:text-white">
            La letra <span className="font-bold dark:text-white">G</span> está
            en la palabra y en la posición correcta.{" "}
          </p>
          <div className="flex justify-start mb-1">
            {["V", "O", "C", "A", "L"].map((item, i) => (
              <div
                key={i}
                className={`w-12 h-12 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded dark:text-white ${
                  item === "C" ? "bg-yellow-500 dark:bg-yellow-500" : "bg-white"
                } dark:bg-slate-900 border-slate-200 dark:border-slate-600`}
              >
                <div className="letter-container"></div>
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs py-4 dark:text-white">
            La letra <span className="font-bold dark:text-white">C</span> está
            en la palabra pero en la posición incorrecta.{" "}
          </p>
          <div className="flex justify-start mb-1">
            {["C", "A", "N", "T", "O"].map((item, i) => (
              <div
                key={i}
                className={`w-12 h-12 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded dark:text-white ${
                  item === "O" ? "bg-slate-400 dark:bg-slate-400 " : "bg-white"
                } dark:bg-slate-900 border-slate-200 dark:border-slate-600`}
              >
                <div className="letter-container"></div>
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs py-4 dark:text-white">
            La letra <span className="font-bold dark:text-white">O</span> no
            está en la palabra{" "}
          </p>
          <p className="text-xs py-2 dark:text-white">
            Puede haber letras repetidas. Las pistas son independientes para
            cada letra.{" "}
          </p>
          <p className="text-xs py-2 text-center dark:text-white">
            ¡Una palabra nueva cada 5 minutos!
          </p>
        </>
      ) : (
        <>
          <div class="flex justify-between">
            <div className="items-center text-center justify-center m-1 w-1/4 dark:text-white">
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs">Jugadas</div>
            </div>
            <div className="items-center justify-center text-center m-1 w-1/4 dark:text-white">
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs">Victorias</div>
            </div>{" "}
          </div>
          <div className="text-center mt-10 w-full dark:text-white">
            Siguiente palabra
          </div>
          <div className="text-3xl text-center font-bold dark:text-white">
            0
          </div>
        </>
      ),
  };

  return isShow.show ? (
    <>
      {" "}
      <div className="justify-center modal-wrapper-flex sm:flex  flex transition ease-in-out delay-150 overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          className="align-bottom bg-slate-100 rounded-lg px-4 pt-5 text-left overflow-hidden shadow-xl transform transition-all m-auto max-w-md sm:align-middle border border-slate-700 sm:w-full sm:p-6 dark:bg-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-center p-5">
            <h3 className="text-3xl font-semibold dark:text-white">
              {content.title}
            </h3>
          </div>

          <div className="">{content.body}</div>
          <div className="items-center justify-center text-center dark:text-white pt-6">
            <button
              onClick={(_) => handleClose(false)}
              type="button"
              className="focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {isShow.type === "stats" ? "Aceptar" : "¡JUGAR!"}
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-50 dark:opacity-75 fixed inset-0 z-40 bg-black transition ease-in-out delay-150"></div>
    </>
  ) : null;
};

export default Modal;

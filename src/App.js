import "./App.css";

function App() {
  function printpage() {
    // let newstr = document.getElementById("app").innerHTML;
    // let oldstr = document.body.innerHTML;
    // document.body.innerHTML = newstr;
    // document.body.innerHTML = oldstr;
    window.print();
    return false;
  }

  return (
    <div id="app" className="App">
      <div id="impresion" className="reporte">
        <h1>Información de la muestra tomada</h1>
        <div className="reporte_header">
          <div>
            <p>
              <b>Núm. de lote: </b>
            </p>
            <p>XX1234</p>
          </div>
          <div>
            <p>
              <b>Fecha y hora de la muestra: </b>
            </p>
            <p>23/09/2021</p>
          </div>
          <div>
            <p>
              <b>Usuario que tomó la muestra: </b>
            </p>
            <p>XXXXXXX</p>
          </div>
        </div>
        <div className="reporte_imagenes">
          <p>
            <b>Imagen de la muestra:</b>
          </p>
          <div>
            <img
              width="200"
              src="https://i.ibb.co/BHhBQq1/foto-capsula.png"
              alt="foto-capsula"
            />
          </div>
          <p>
            <b>Dimensiones de los espesores mínimo y máximo: </b>
          </p>
          <div className="reporte_imagenes_diametros">
            <div>
              <div>
                <img
                  width="200"
                  src="https://i.ibb.co/wyVRMqm/diametro-interior-capsula.png"
                  alt="diametro-interior-capsula"
                />
              </div>
              <span>
                <b>mínimo = </b>
              </span>
              <span>123px</span>
            </div>
            <div>
              <div>
                <img
                  width="200"
                  src="https://i.ibb.co/dQMhvr4/diametro-exterior-capsula.png.png"
                  alt="diametro-exterior-capsula"
                />
              </div>
              <span>
                <b>máximo = </b>
              </span>
              <span>234px</span>
            </div>
          </div>
        </div>
        <div className="reporte_resultado">
          <div>
            <p>
              <b>Razón entre el espesor mínimo y máximo: </b>
            </p>
            <p>r = 123</p>
          </div>
          <div>
            <p>
              <b>
                Diferencia porcentual de r con respecto a los criterios
                establecidos como estándar:{" "}
              </b>
            </p>
            <p>Δr = 12%</p>
          </div>
        </div>
        <div className="reporte_graficas">
          <div>
            <p>
              <b>Gráfica de control sobre las muestras</b>
            </p>
            <img
              src="https://i.ibb.co/42CrL5q/grafica-limites-inferior-superior.png"
              alt="grafica-limites-inferior-superior"
            />
          </div>
          <div>
            <p>
              <b>
                Histograma donde se observe la cantidad de muestras que cayeron
                dentro de un rango de medida especifico y la desviación que
                presentan respecto al valor establecido como criterio correcto
              </b>
            </p>
            <img
              src="https://i.ibb.co/pPWph8F/histograma.png"
              alt="grafica-limites-inferior-superior"
            />
          </div>
        </div>
      </div>

      <div className="imprimir">
        <button onClick={() => printpage()}>Imprimir reporte</button>
      </div>
    </div>
  );
}

export default App;

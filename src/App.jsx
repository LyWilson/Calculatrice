import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [resultat, setResultat] = useState("0");

  const handleClick = (e) => {
    const valeur = e.target.name;
    if (valeur === '+/-') {
        setResultat((previous) => (parseFloat(previous) * -1).toString());
    } else if (valeur === '%') {
        setResultat((previous) => (parseFloat(previous) / 100).toString());
    } else {
        if (resultat === '0') {
            setResultat(valeur);
        } else {
            setResultat(resultat + valeur);
        }
    }
  };

  const clear = () => {
    setResultat("");
  };

  const calculate = () => {
    try {
      setResultat(evaluate(resultat).toString());
    } catch (err) {
      setResultat("Error");
    }
  };

  const toggleSign = () => {
    setResultat((preResultat) => {
      const num = parseFloat(preResultat);
      if (isNaN(num)) {
        return preResultat;
      }
      return String(num * -1);
    });
  };

  // Styles generer par chatGPT pour ressembler a la calculatrice de l'iphone
  const buttonStyle = "bg-gray-500 text-white text-lg p-4 rounded-full";
  const operateur1Style =
    "bg-gray-300 text-black font-bold text-2xl rounded-full h-16";
  const operateur2Style = "bg-yellow-500 font-extrabold rounded-full text-white";
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-800">

        <div className="grid grid-cols-4 gap-2 rounded-xl border bg-black p-6 shadow-md shadow-gray-400 lg:w-2/12">
          <input
            type="text"
            value={resultat}
            readOnly
            className="col-span-4 text-right text-4xl font-bold text-white rounded-xl p-4 bg-black"
          />
          <button
            name="clear"
            onClick={clear}
            className={(buttonStyle, operateur1Style)}
          >
            AC
          </button>
          <button
            name="toggleSign"
            onClick={toggleSign}
            className={(buttonStyle, operateur1Style)}
          >
            +/-
          </button>
          <button
            name="%"
            onClick={handleClick}
            className={(buttonStyle, operateur1Style)}
          >
            %
          </button>
          <button
            name="/"
            onClick={handleClick}
            className={(buttonStyle, operateur2Style)}
          >
            /
          </button>
          <button name="7" onClick={handleClick} className={buttonStyle}>
            7
          </button>
          <button name="8" onClick={handleClick} className={buttonStyle}>
            8
          </button>
          <button name="9" onClick={handleClick} className={buttonStyle}>
            9
          </button>
          <button
            name="*"
            onClick={handleClick}
            className={(buttonStyle, operateur2Style)}
          >
            ×
          </button>
          <button name="4" onClick={handleClick} className={buttonStyle}>
            4
          </button>
          <button name="5" onClick={handleClick} className={buttonStyle}>
            5
          </button>
          <button name="6" onClick={handleClick} className={buttonStyle}>
            6
          </button>
          <button
            name="-"
            onClick={handleClick}
            className={(buttonStyle, operateur2Style)}
          >
            -
          </button>
          <button name="1" onClick={handleClick} className={buttonStyle}>
            1
          </button>
          <button name="2" onClick={handleClick} className={buttonStyle}>
            2
          </button>
          <button name="3" onClick={handleClick} className={buttonStyle}>
            3
          </button>
          <button
            name="+"
            onClick={handleClick}
            className={(buttonStyle, operateur2Style)}
          >
            +
          </button>
          <button name="0" onClick={handleClick} className={`${buttonStyle} col-span-2 font-extrabold`}>
            0
          </button>
          <button name="." onClick={handleClick} className={buttonStyle}>
            .
          </button>

          <button
            id="resultat"
            onClick={calculate}
            className={(buttonStyle, operateur2Style)}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
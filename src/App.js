import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const [alias, setAlias] = useState(0);

  function HandlePrev() {
    if (step > 1) setStep(step - 1);
    // setAlias((nama) => (nama > 0 ? nama - 1 : nama));
    setAlias((nama) => (nama > 0 ? nama - 1 : nama));
  }

  function HandleNext() {
    if (step < 4) setStep(step + 1);
    setAlias((nama) => (nama < data.length - 1 ? nama + 1 : nama));
    //
  }

  const data = [
    {
      name: "Kang Oriza",
    },
    {
      name: "Kang Fakhry",
    },
    {
      name: "kak Levi",
    },

    {
      name: "Mas Hadyan",
    },
  ];

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
          </div>
          <p className="message">Mentor Kesayangan kita: {data[alias].name}</p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#526D82", color: "#ffff" }}
              onClick={HandlePrev}
            >
              Prev
            </button>
            <button
              style={{ backgroundColor: "#526D82", color: "#ffff" }}
              onClick={HandleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

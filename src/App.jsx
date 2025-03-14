import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => step > 0 && setStep(step - 1);
  const handleNext = () => step < 3 && setStep(step + 1);

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step === 3 && "active"}>3</div>
          </div>
          <p className="message">{messages[step - 1] || "Start"}</p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              disabled={step === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              disabled={step === 3}
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

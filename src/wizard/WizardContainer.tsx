import React, { ReactElement, ChangeEvent, useState } from "react";
import { useWizardContext } from "./WizardProvider";
import { Wizard } from "./Wizard";
import { WizardSummary } from "./WizardSummary";

export const WizardContainer = (): ReactElement => {
  const { questions, currentQuiz, answers, moveToNext, moveToPrev, setNewAnswer } = useWizardContext();
  const [showResult, setShowResult] = useState(false);

  const handleSetNewAnswer = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNewAnswer(currentQuiz, e.currentTarget.value);
  }
  const handleNextClick = (): void => {
    if (currentQuiz === questions.length - 1) {
      setShowResult(true);
    } else {
      moveToNext();
    }
  }

  return (
    <div className="wizard-container">
      {showResult ? (
        <WizardSummary />
      ) : (
        <div className="wizard-block">
          <Wizard
            onChange={handleSetNewAnswer}
            question={questions[currentQuiz]}
            answer={answers[currentQuiz] || ''}
          />
          <div className="button-block">
            <button onClick={moveToPrev}>move to Prev</button>
            <button onClick={handleNextClick}>move to Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

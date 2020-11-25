import React, { ReactElement, ChangeEvent } from "react";
import {useWizardContext} from "./WizardProvider";

export const WizardSummary = (): ReactElement => {
  const { questions, answers } = useWizardContext();

  return (
    <div>
      <h2>Your summary</h2>
      <ul className="wizard-summary">
        {questions.map((question, i) => (
          <li>
            <b>{question}: </b>
            <i>{answers[i] || ' - '}</i>
          </li>
        ))}
      </ul>
    </div>
  )
}

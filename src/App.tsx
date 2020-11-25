import * as React from "react";
import { WizardProvider } from "./wizard/WizardProvider";
import { WizardContainer } from "./wizard/WizardContainer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <WizardProvider questions={['Question1', 'Question2', 'Question3']}>
        <WizardContainer />
      </WizardProvider>
    </div>
  );
}

import React, { ReactElement, useState, createContext, useContext, ReactNode } from "react";

type WizardContextProps = {
  questions: Array<string>;
  answers: {[key: number]: string};
  setNewAnswer: (id: number, answer: string) => void;
  currentQuiz: number;
  moveToPrev: () => void;
  moveToNext: () => void;

};

type WizardProviderProps = {
  children: NonNullable<ReactNode>;
  questions: Array<string>;
};

const defaultWizardContext = {
  questions: [],
  currentQuiz: 0,
  answers: {},
  setNewAnswer: () => {},
  moveToNext: () => {},
  moveToPrev: () => {},
};

const WizardContext = createContext<WizardContextProps>(defaultWizardContext);

export const WizardProvider = ({ questions, children }: WizardProviderProps): ReactElement => {
  const [answers, setAnswer] = useState({});
  const [currentQuiz, setCurrentQuiz] = useState(0);

  const setNewAnswer = (id: number, answer: string): void => {
    setAnswer({ ...answers, [id]: answer });
  };

  const moveToPrev = (): void => {
    if (currentQuiz > 0) {
      setCurrentQuiz( currentQuiz - 1);
    }
  }

  const moveToNext = (): void => {
    if (currentQuiz < questions?.length - 1) {
      setCurrentQuiz( currentQuiz + 1);
    }
  }

  return (
    <WizardContext.Provider value={{ questions, answers, setNewAnswer, currentQuiz, moveToPrev, moveToNext }}>
      {children}
    </WizardContext.Provider>
  );
};

export const useWizardContext = (): WizardContextProps => {
  const context = useContext(WizardContext);

  if (context === undefined) {
    throw new Error('useWizardContext must be used within a WizardProvider');
  }

  return context;
}

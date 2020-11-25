import React, { ChangeEvent, ReactElement, useRef, RefObject, useEffect } from "react";

type WizardProps = {
  answer: string;
  question: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Wizard = ({ question, answer, onChange = () => {} }: WizardProps): ReactElement => {
  const inputRef: RefObject<HTMLTextAreaElement> = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log('%c useEffect', 'color: yellow; font-size: 20px', inputRef.current);
    }
  }, [inputRef.current, question]);

  return (
    <div>
      <h3>{question}</h3>
      <textarea ref={inputRef} onChange={onChange} value={answer} placeholder="Type your answer here" />
    </div>
  )
}

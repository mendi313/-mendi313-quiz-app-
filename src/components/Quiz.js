import React, { useEffect, useState } from 'react';
import Questions from './Questions';
import { useDispatch, useSelector } from 'react-redux';
import { IncreaseTrace, DecreaseTrace } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';

export default function Quiz() {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.result);
  const { questions } = useSelector((state) => state);
  const { trace } = useSelector((state) => state.questions);
  const [checked, setChecked] = useState(undefined);
  let queueLength = questions.queue.length;
  useEffect(() => {
    
  });

  const onNext = () => {
    dispatch(IncreaseTrace());
    if (result.length <= trace) {
      dispatch(PushAnswer(checked));
    }
    setChecked(undefined);
  };
  const onPrev = () => {
    dispatch(DecreaseTrace());
  };
  const onChecked = (check) => {
    setChecked(check);
  };
  if (result.length && result.length >= queueLength) {
    return <Navigate to={'/result'} replace={'true'}></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions onChecked={onChecked} />

      <div className="grid">
        {trace > 0 && (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        )}

        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

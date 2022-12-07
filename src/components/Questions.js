import React, { useEffect, useState } from 'react';
import { useFetchQuestions } from '../hooks/FetchQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateResult } from '../hooks/setResult';

export default function Questions({ onChecked }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, serverError }] = useFetchQuestions();
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);

  const question = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  useEffect(() => {
    dispatch(UpdateResult({ trace, checked }));
  }, [checked]);

  const onSelect = (i) => {
    onChecked(i);
    setChecked(i);
    dispatch(UpdateResult({ trace, checked }));
  };

  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || 'Unknown Error'}</h3>;
  return (
    <div className="questions">
      <h2 className="text-light">{question?.question}</h2>
      <ul key={question?.id}>
        {question?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

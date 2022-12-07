import React, { useEffect } from 'react';
import '../styles/Result.css';
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { ResetExsam } from '../hooks/FetchQuestions';
import { PushQuizResult, ResetAnswer } from '../hooks/setResult';
import {
  attemts_Number,
  earnPoints_Number,
  flagResult,
} from '../helper/helper';

export default function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 10;
  const attemts = attemts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  const setResult = () => {
    const newQuizResult = {
      name: userId,
      attemps: attemts,
      earnPoints: earnPoints,
      result: flag ? 'Passed' : 'Failed',
    };
    dispatch(PushQuizResult(newQuizResult));
  };
  useEffect(() => {
    setResult();
  }, [flag]);

  const onRestart = () => {
    dispatch(ResetAnswer());
    dispatch(ResetExsam());
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">{userId}</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points : </span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attemps : </span>
          <span className="bold">{attemts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span
            style={{ color: `${flag ? '#2aff95' : '#ff2a66'}` }}
            className="bold"
          >
            {flag ? 'Passed' : 'Failed'}
          </span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={'/'} onClick={onRestart}>
          Restart
        </Link>
      </div>
      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
}

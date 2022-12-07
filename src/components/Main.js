import React, { useRef, useState } from 'react';
import '../styles/Main.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';
export default function Main() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [clicked, setclicked] = useState(false);
  const inputRef = useRef(null);
  const inputHandler = ({ target }) => {
    setUserName(target.value);
    dispatch(setUserId(target.value));
  };
  const sumbitHandler = () => {
    setclicked(true);
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for a correct answer.</li>
        <li>Each question has 3 options. You can only choose one of them.</li>
        <li>You can review and change the answers before the quiz ends.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>
      <form id="form">
        <input
          required="required"
          className="userid"
          ref={inputRef}
          type="text"
          placeholder="Username*"
          onChange={inputHandler}
        />
      </form>
      {!userName && clicked && (
        <span style={{ fontSize: '20px', margin: '21%', color: 'red' }}>
          Username Required
        </span>
      )}
      <div className="start">
        <Link
          onClick={sumbitHandler}
          className="btn"
          to={userName ? 'quiz' : '/'}
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

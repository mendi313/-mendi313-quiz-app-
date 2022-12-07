import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import data, { answers } from '../database/data';
import * as Action from '../redux/question_reducer';

export const useFetchQuestions = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  useEffect(() => {
    setGetData((prev) => ({
      ...prev,
      isLoading: true,
    }));
    (async () => {
      try {
        let questions = await data;
        if (questions.length > 0) {
          setGetData((prev) => ({
            ...prev,
            isLoading: false,
            apiData: {questions, answers},
          }));
          dispatch(Action.startExamAction({questions, answers}));
        } else {
          throw new Error('NO Questions Availbale');
        }
      } catch (error) {
        setGetData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    })();
  }, [dispatch]);
  return [getData, setGetData];
};

export const IncreaseTrace = () => async (dispatch) => {
  try {
    dispatch(Action.increaseTrace());
  } catch (error) {}
};
export const DecreaseTrace = () => async (dispatch) => {
  try {
    dispatch(Action.decreaseTrace());
  } catch (error) {}
};
export const ResetExsam = () => async (dispatch) => {
  try {
    dispatch(Action.resetExsam());
  } catch (error) {}
};

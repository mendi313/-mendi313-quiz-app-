import * as Action from '../redux/result_reducer';

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};
export const PushQuizResult = (result) => async (dispatch) => {
  try {
    const newQuizResult = {
      name: result.name,
      attemps: result.attemps,
      earnPoints: result.earnPoints,
      result: result.result,
    };
    await dispatch(Action.pushResultTableAction(newQuizResult));
  } catch (error) {
    console.log(error);
  }
};
export const ResetAnswer = () => async (dispatch) => {
  try {
    await dispatch(Action.resetResultAction());
  } catch (error) {
    console.log(error);
  }
};
export const UpdateResult = (index) => async (dispatch) => {
  try {
    await dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

import * as request from "superagent";


export const FETCHED_ALL_QUIZZES = 'FETCHED_ALL_QUIZZES'
export const DELETE_QUIZ = 'DELETE_QUIZ'
export const FETCH_QUIZ = 'FETCH_QUIZ'
export const FETCH_RESULTS = 'FETCH_RESULTS'


const baseUrl = "http://localhost:4000";

export const fetchAllQuizzes = () => dispatch => {
  request
    .get(`${baseUrl}/quizzes`)
    .then(response =>
      dispatch({
        type: FETCHED_ALL_QUIZZES,
        payload: response.body.quizzes
      })
    )

    .catch(err => alert(err));
};


export const fetchQuiz = (quizId) => (dispatch) => {
  
    request
    .get(`${baseUrl}/quizzes/${quizId}`)
    .then(response => dispatch({
      type: FETCH_QUIZ,
      payload: response.body
    }))
    .catch(err => alert(err))
    }
    

export const deleteQuiz = (quizId) => (dispatch) => {
    request
      .delete(`${baseUrl}/quizzes/${quizId}`)
      .then(response => dispatch({
        type: DELETE_QUIZ,
        payload: quizId
      })
    );
};

export const fetchResults = (quizId) => (dispatch) => {
  
  request
  .get(`${baseUrl}/responses/${quizId}`)
  .then(response => dispatch({
    type: FETCH_RESULTS,
    payload: response.body.response
  }))
  .catch(err => alert(err))
  }

// const quizes =  [
//     {id : 1, title : 'quiz1'},
//     {id : 2, title : 'quiz2'},
//     {id : 3, title : 'quiz3'}
// ]

// export function fetchAllQuizes() {
//     return {
//         type: FETCHED_ALL_QUIZES,
//         payload: quizes
//     }
// }

// export function deleteQuiz(quizId) {
//     console.log('does it get here?', quizId)
//     return {
//         type: DELETE_QUIZ,
//         payload: quizId
//     }

// }

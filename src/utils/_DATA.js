import { players } from "./player-prospect-data";
import { picks } from "./picks-data";
import { mockdrafts } from "./mockdraft-data";
import { users } from "./user-data";
import { teams } from "./team-data";

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getMockDrafts () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...mockdrafts}), 1000)
  })
}

export function _getPicks () {
    return new Promise((res, rej) => {
        setTimeout(() => res({...picks}), 1000)
    })
}

export function _getPlayers () {
    return new Promise((res, rej) => {
        setTimeout(() => res({...players}), 1000)
    })
}

export function _getTeams () {
    return new Promise((res, rej) => {
        setTimeout(() => res({...teams}), 1000)
    })
}

function formatMockPick ({ id, pickNum, teamId, playerId, mockdraftId }) {
    return {
        id,
        pickNum,
        teamId,
        playerId,
        mockdraftId
    }
}

export function _saveMockPick (pick) {
  return new Promise((res, rej) => {
    const formattedPick = formatMockPick(pick);

    setTimeout(() => {

      picks = {
        ...picks,
          [formattedPick.id]: formattedPick
      };

      res(formattedPick)
    }, 1000)
  })
}

// export function _saveQuestionAnswer (ans) {
//   const { authedUser, qid, answer } = ans;
//
//   return new Promise((res, rej) => {
//     console.log();
//     setTimeout(() => {
//       users = {
//         ...users,
//         [authedUser]: {
//           ...users[authedUser],
//           answers: {
//             ...users[authedUser].answers,
//             [qid]: answer
//           }
//         }
//       };
//
//       questions = {
//         ...questions,
//         [qid]: {
//           ...questions[qid],
//           [answer]: {
//             ...questions[qid][answer],
//             votes: questions[qid][answer].votes.concat([authedUser])
//           }
//         }
//       };
//
//       res(ans)
//     }, 500)
//   })
// }

// function generateUID () {
//     return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
// }

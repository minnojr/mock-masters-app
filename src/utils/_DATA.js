let users = {
  "q34tdyah3": {
    id: 'q34tdyah3',
    mockdraftName : "My Dope Mock Draft",
    email: 'team@mockmasters.com',
    draftId : '100',
    admin : false,
    active: true,
    loginCount: 0
  },
    "9hden44ejdb34d": {
        id: '9hden44ejdb34d',
        mockdraftName : "Pretty Cool Mock Draft",
        email: 'OTHEREMAIL@mockmasters.com',
        draftId : '101',
        admin : false,
        active: true,
        loginCount: 0
    }
};

let mockdrafts = {
  '100': {
    id : '100',
    userId : 'q34tdyah3',
    picks : [
        '1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008', '1009', '1010',
        '1011', '1012', '1013', '1014', '1015', '1016', '1017', '1018', '1019', '1020',
        '1021', '1022', '1023', '1024', '1025', '1026', '1027', '1028', '1029', '1030',
        '1031', '1032'
    ]
  }
};

let picks = {
    '1001': {
      id: '1001',
      pickNum: '1',
      teamId: '25',
      playerId: '0',
      mockdraftId: '100'
    },
    '1002': {
      id: '1002',
      pickNum: '2',
      teamId: '49',
      playerId: '0',
      mockdraftId: '100'
    },
    '1003': {
        id: '1003',
        pickNum: '3',
        teamId: '25',
        playerId: '1',
        mockdraftId: '100'

    },
    '1004': {
        id: '1004',
        pickNum: '4',
        teamId: '32',
        playerId: '0',
        mockdraftId: '100'

    },
    '1005': {
        id: '1005',
        pickNum: '5',
        teamId: '25',
        playerId: '1',
        mockdraftId: '100'

    },
    '1006': {
        id: '1006',
        pickNum: '6',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1007': {
        id: '1007',
        pickNum: '7',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1008': {
        id: '1008',
        pickNum: '8',
        teamId: '25',
        playerId: '2',
        mockdraftId: '100'

    },
    '1009': {
        id: '1009',
        pickNum: '9',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1010': {
        id: '1010',
        pickNum: '10',
        teamId: '32',
        playerId: '1',
        mockdraftId: '100'

    },
    '1011': {
        id: '1011',
        pickNum: '11',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1012': {
        id: '1012',
        pickNum: '12',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1013': {
        id: '1013',
        pickNum: '13',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1014': {
        id: '1014',
        pickNum: '14',
        teamId: '49',
        playerId: '0',
        mockdraftId: '100'

    },
    '1015': {
        id: '1015',
        pickNum: '15',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1016': {
        id: '1016',
        pickNum: '16',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1017': {
        id: '1017',
        pickNum: '17',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1018': {
        id: '1018',
        pickNum: '18',
        teamId: '25',
        playerId: '1',
        mockdraftId: '100'

    },
    '1019': {
        id: '1019',
        pickNum: '19',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1020': {
        id: '1020',
        pickNum: '20',
        teamId: '49',
        playerId: '2',
        mockdraftId: '100'

    },
    '1021': {
        id: '1021',
        pickNum: '21',
        teamId: '32',
        playerId: '0',
        mockdraftId: '100'

    },
    '1022': {
        id: '1022',
        pickNum: '22',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1023': {
        id: '1023',
        pickNum: '23',
        teamId: '25',
        playerId: '2',
        mockdraftId: '100'

    },
    '1024': {
        id: '1024',
        pickNum: '24',
        teamId: '49',
        playerId: '1',
        mockdraftId: '100'

    },
    '1025': {
        id: '1025',
        pickNum: '25',
        teamId: '32',
        playerId: '0',
        mockdraftId: '100'

    },
    '1026': {
        id: '1026',
        pickNum: '26',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1027': {
        id: '1027',
        pickNum: '27',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1028': {
        id: '1028',
        pickNum: '28',
        teamId: '25',
        playerId: '2',
        mockdraftId: '100'

    },
    '1029': {
        id: '1029',
        pickNum: '29',
        teamId: '49',
        playerId: '0',
        mockdraftId: '100'

    },
    '1030': {
        id: '1030',
        pickNum: '30',
        teamId: '32',
        playerId: '1',
        mockdraftId: '100'

    },
    '1031': {
        id: '1031',
        pickNum: '31',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'

    },
    '1032': {
        id: '1032',
        pickNum: '32',
        teamId: '25',
        playerId: '0',
        mockdraftId: '100'
    }
};

let players = {
    "1": {
      id: "1",
      "name": "Sam Darnold",
      "position": "QB",
      "school": "USC",
      "conference": "Pac-12",
      "ofdOrDef": "offense",
    },
    "2": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold2": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley2": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold3": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley3": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold4": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley4": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold5": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley5": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold6": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley6": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold7": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley7": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold8": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley8": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold9": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley9": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold10": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley10": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold11": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley11": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold12": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley12": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold13": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley13": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold14": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley14": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold15": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley15": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "samDarnold16": {
        id: "1",
        "name": "Sam Darnold",
        "position": "QB",
        "school": "USC",
        "conference": "Pac-12",
        "ofdOrDef": "offense",
    },
    "saquonBarkley16": {
        id: "2",
        "name": "Saquon Barkley",
        "position": "RB",
        "school": "Penn State",
        "conference": "Big Ten",
        "ofdOrDef": "offense",
    },
    "0" : {
      id : 0,
      'name': "Empty Player",
      "position": "QB",
      "school": "Ball Univ",
      "conference": "Big Conf",
      "ofdOrDef": "offense",
    }
};

let teams = {
  '25': {
      id: '25',
      name: 'Steelers'
  },
  '49': {
      id: '49',
      name: '49ers'
  },
  '32': {
      id: '32',
      name: 'Browns'
  },
  'seahawks': {
      id: 'seahawks',
      name: 'Seahawks'
  },
    'steelers2': {
        id: 'steelers',
        name: 'Steelers'
    },
    '49ers2': {
        id: '49ers',
        name: '49ers'
    },
    'browns2': {
        id: 'browns',
        name: 'Browns'
    },
    'seahawks2': {
        id: 'seahawks',
        name: 'Seahawks'
    },
    'steelers3': {
        id: 'steelers',
        name: 'Steelers'
    },
    '49ers3': {
        id: '49ers',
        name: '49ers'
    },
    'browns3': {
        id: 'browns',
        name: 'Browns'
    },
    'seahawks3': {
        id: 'seahawks',
        name: 'Seahawks'
    },
    'steelers4': {
        id: 'steelers',
        name: 'Steelers'
    },
    '49ers4': {
        id: '49ers',
        name: '49ers'
    },
    'browns4': {
        id: 'browns',
        name: 'Browns'
    },
    'seahawks4': {
        id: 'seahawks',
        name: 'Seahawks'
    },
    'steelers5': {
        id: 'steelers',
        name: 'Steelers'
    },
    '49ers5': {
        id: '49ers',
        name: '49ers'
    },
    'browns5': {
        id: 'browns',
        name: 'Browns'
    },
    'seahawks5': {
        id: 'seahawks',
        name: 'Seahawks'
    },
    'steelers6': {
        id: 'steelers',
        name: 'Steelers'
    },
    '49ers6': {
        id: '49ers',
        name: '49ers'
    },
    'browns6': {
        id: 'browns',
        name: 'Browns'
    },
    'seahawks6': {
        id: 'seahawks',
        name: 'Seahawks'
    },
    'steelers7': {
        id: 'steelers',
        name: 'Steelers'
    },
    '49ers7': {
        id: '49ers',
        name: '49ers'
    },
    'browns7': {
        id: 'browns',
        name: 'Browns'
    },
    'seahawks7': {
        id: 'seahawks',
        name: 'Seahawks'
    },
    'steelers8': {
        id: 'steelers',
        name: 'Steelers'
    },
    '49ers8': {
        id: '49ers',
        name: '49ers'
    },
    'browns8': {
        id: 'browns',
        name: 'Browns'
    },
    'seahawks8': {
        id: 'seahawks',
        name: 'Seahawks'
    },

};

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

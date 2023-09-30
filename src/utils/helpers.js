let users = {
  alice: {
    id: "alice",
    name: "Alice",
    avatarURL: "/images/avatars/dog.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  bob: {
    id: "bob",
    name: "Bob",
    avatarURL: "/images/avatars/cat.png",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  carol: {
    id: "carol",
    name: "Carol",
    avatarURL: "/images/avatars/lion.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  david: {
    id: "david",
    name: "David",
    avatarURL: "/images/avatars/gorilla.png",
    answers: {},
    questions: [],
  },
  emily: {
    id: "emily",
    name: "Emily",
    avatarURL: "/images/avatars/koala.png",
    answers: {},
    questions: [],
  },
  frank: {
    id: "frank",
    name: "Frank",
    avatarURL: "/images/avatars/rabbit.png",
    answers: {},
    questions: [],
  },
  grace: {
    id: "grace",
    name: "Grace",
    avatarURL: "/images/avatars/tiger.png",
    answers: {},
    questions: [],
  },
  hank: {
    id: "hank",
    name: "Hank",
    avatarURL: "/images/avatars/fox.png",
    answers: {},
    questions: [],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "alice",
    timestamp: 1666524000,
    optionOne: {
      votes: ["alice", "bob"],
      text: "prefer coffee over tea",
    },
    optionTwo: {
      votes: ["carol"],
      text: "prefer tea over coffee",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "carol",
    timestamp: 1666624000,
    optionOne: {
      votes: ["david"],
      text: "travel to the beach",
    },
    optionTwo: {
      votes: ["carol", "alice", "bob"],
      text: "travel to the mountains",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "alice",
    timestamp: 1666724000,
    optionOne: {
      votes: ["emily"],
      text: "read science fiction",
    },
    optionTwo: {
      votes: ["alice"],
      text: "read fantasy novels",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "bob",
    timestamp: 1666824000,
    optionOne: {
      votes: ["frank"],
      text: "play soccer",
    },
    optionTwo: {
      votes: ["alice"],
      text: "play basketball",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "bob",
    timestamp: 1666924000,
    optionOne: {
      votes: ["bob"],
      text: "watch action movies",
    },
    optionTwo: {
      votes: ["carol", "david"],
      text: "watch romantic comedies",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "carol",
    timestamp: 1667024000,
    optionOne: {
      votes: ["carol"],
      text: "play chess",
    },
    optionTwo: {
      votes: ["bob"],
      text: "play checkers",
    },
  },
  xyz123456: {
    id: "xyz123456",
    author: "david",
    timestamp: 1667124000,
    optionOne: {
      votes: [],
      text: "learn a new programming language",
    },
    optionTwo: {
      votes: ["alice", "emily"],
      text: "build a web application from scratch",
    },
  },
  abc789012: {
    id: "abc789012",
    author: "emily",
    timestamp: 1667224000,
    optionOne: {
      votes: ["david"],
      text: "take a road trip",
    },
    optionTwo: {
      votes: ["alice", "carol"],
      text: "fly to a tropical island",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          questions: users[authUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          answers: {
            ...users[authUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authUser]),
          },
        },
      };

      res();
    }, 500);
  });
}

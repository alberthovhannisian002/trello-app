import {
  GET_LISTS,
  CREATE_LIST,
  UPDATE_LIST,
  DELETE_LIST,
  ADD_LIST_TASK,
  EDIT_LIST_TASK,
  DELETE_LIST_TASK,
  UPDATE_TASK_LIST,
} from "../actions/lists.actions";

const initialState = [
  {
    name: {
      listName: "To Do",
    },
    id: 1,
    tasks: [
      {
        id: 1,
        name: {
          ticketName: "[SR] - 006",
          ticketDescription: "Login layout",
        },
      },
    ],
  },
  {
    name: {
      listName: "Current",
    },
    id: 2,
    tasks: [],
  },
  {
    name: {
      listName: "In progress",
    },
    id: 3,
    tasks: [
      {
        id: 3,
        name: {
          ticketName: "[SR] - 004",
          ticketDescription: "Code refactoring",
        },
      },
    ],
  },
  {
    name: {
      listName: "Code Review",
    },
    id: 4,
    tasks: [
      {
        id: 4,
        name: {
          ticketName: "[SR] - 003",
          ticketDescription: "Apply now functionality",
        },
      },
    ],
  },
  {
    name: {
      listName: "Testing",
    },
    id: 5,
    tasks: [
      {
        id: 4,
        name: {
          ticketName: "[SR] - 002",
          ticketDescription: "Create new user",
        },
      },
    ],
  },
  {
    name: {
      listName: "Done",
    },
    id: 6,
    tasks: [
      {
        id: 6,
        name: {
          ticketName: "[SR] - 001",
          ticketDescription: "Initial setup",
        },
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return state;
    case CREATE_LIST:
      return [...state, action.payload];
    case UPDATE_LIST:
      return state.map((item) =>
        item.id === action.payload.id ? (item = action.payload) : item
      );
    case DELETE_LIST:
      return state.filter((item) => item.id !== action.payload.id);
    case ADD_LIST_TASK:
      return state.map((list) => {
        return list.id === action.payload.listId
          ? {
              ...list,
              tasks: list?.tasks?.length
                ? [...list.tasks, action.payload.task]
                : [action.payload.task],
            }
          : list;
      });
    case EDIT_LIST_TASK:
      return state.map((list) => {
        return {
          ...list,
          tasks: list?.tasks?.map((task) =>
            task.id === action.payload?.ticketId
              ? (task = {
                  id: task?.id,
                  name: {
                    ticketName: action.payload.ticketName,
                    ticketDescription: action.payload.ticketDescription,
                  },
                })
              : task
          ),
        };
      });
    case DELETE_LIST_TASK:
      return state.map((list) => {
        return {
          ...list,
          tasks: list?.tasks?.filter(
            (task) => task.id !== action.payload.taskId
          ),
        };
      });
    case UPDATE_TASK_LIST:
      return;
    default:
      return state;
  }
};

export default listsReducer;

import * as T from './types';

const initialState: T.NotifyState = {
  queue: [] as T.NotifyAction[],
  init: 'yea' as string,
};

// eslint-disable-next-line import/prefer-default-export
export const notify = (state = initialState, action: T.NotifyAction): T.NotifyState => {
  switch (action.type) {
    case T.NOTIFY_INFO:
      return {
        ...state,
        queue: [...state.queue, action],
      };
      return state;
    case T.NOTIFY_ERROR:
      state.queue.push(action);
      return state;
    default:
      return state;
  }
};

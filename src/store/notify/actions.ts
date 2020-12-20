import * as T from './types';

export const NewInfo = (msg:string):T.NotifyAction => ({
  type: T.NOTIFY_INFO,
  msg,
});

export const NewError = (msg:string):T.NotifyAction => ({
  type: T.NOTIFY_ERROR,
  isCritical: false,
  msg,
});

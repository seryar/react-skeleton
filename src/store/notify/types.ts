export const NOTIFY_ERROR = 'NOTIFY_ERROR';
export const NOTIFY_INFO = 'NOTIFY_INFO';

interface ErrorAction {
    type: typeof NOTIFY_ERROR
    msg: string
    isCritical:boolean
}

interface InfoAction {
    type: typeof NOTIFY_INFO
    msg: string
}

export interface NotifyState {
    queue: NotifyAction[]
    init: string
}

export type NotifyAction = InfoAction|ErrorAction

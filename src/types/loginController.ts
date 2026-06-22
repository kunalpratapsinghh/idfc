export interface CheckLoginOptions {
  eventName?: string;
  notifyParent?: boolean;
  showLogin?: boolean;
  showAddCard?: boolean;
  addCardTitle?: string;
  responseBack?: boolean;
  replace?: boolean;
  redirectBackOnCancel?: boolean;
  redirectPath?: string;
  optCardBasedOnPath?: {
    path: string;
    opt: boolean;
  };
  addCardMandatory?: boolean;
  isLoginRequired?: boolean;
}

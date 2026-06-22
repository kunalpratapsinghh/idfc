import { CheckLoginOptions } from "@/types/loginController";
import { loginController } from "@reward360-global-services-pvt-ltd/smartbuy-header";

export const useLoginController = () => {
  //internal function
  const loginControllerEvent = (
    callback: (res: any) => void,
    loginOptions: CheckLoginOptions
  ) => {
    const loginOpts: CheckLoginOptions = {
      notifyParent: false,
      eventName: "check-login",
      showLogin: true,
      showAddCard: true,
      responseBack: false,
      redirectPath: "",
      replace: true,
      redirectBackOnCancel: true,
      addCardMandatory: false,
      ...loginOptions
    };
    loginController.checkLogin(res => {
      callback(res);
    }, loginOpts);
  };

  //addCard function
  const showAddCardModalEvent = (callback: (res: any) => void) => {
    loginController.requestAddCard(
      (res: any) => {
        if (res) {
          callback(res.info);
        } else {
          callback(new Error("No card information returned"));
        }
      },
      { eventName: "show-add-card-with-session" }
    );
  };

  //return statement
  return { loginControllerEvent, showAddCardModalEvent };
};

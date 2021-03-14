import React from "react";
import { observer } from "mobx-react";

import LogIn from "../../organism/login/Login";
import Logo from "../../atoms/logo/Logo";
import Icon from "../../atoms/icon/Icon";

const LogInPage = ({ store }) => (
  <div className="page">
    <Logo />
    <LogIn form={store.form} onSubmit={store.onSubmit} />

    <p className="icons">
      <Icon facebook />
      <Icon google />
    </p>

    <p className="footer">
      Don't have account? <br />
      <a href="">Sign Up</a>
    </p>
  </div>
);

export default observer(LogInPage);

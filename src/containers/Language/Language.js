import React from "react";
import "./Language.scss";

const Language = (props) => {
  const languageStyle = ["language-box"];
  if (props.isSticky) {
    languageStyle.push("language-box--sticky");
  }
  return (
    <div className={languageStyle.join(" ")}>
      <span className="language-box__svg"></span>
    </div>
  );
};
export default React.memo(Language);

"use client";
import React, { useState } from "react";
import { ChoseLogin, Texts } from "../intex";
import FormRestorePassword from "./FormRestorePassword/FormRestorePassword";
import FormSign from "./FormSign/FormSign";

type TextRender = "Sign In" | "Sing Up" | "Restore";

function Form() {
  const [text, setText] = useState<TextRender>("Sign In");

  const onChangeState = (value: TextRender) => {
    setText(value);
  };

  return (
    <div>
      {text === "Restore" ? (
        <FormRestorePassword text={text} />
      ) : (
        <FormSign text={text} />
      )}
      <div className="flex flex-col mt-5">
        <div className="flex justify-between items-center">
          <div>
            {(text === "Sign In" || text === "Sing Up") && (
              <div>
                <a onClick={() => onChangeState("Restore")}>
                  <Texts text="Forgot your password?" />
                </a>
              </div>
            )}
          </div>

          <div>
            {text === "Sign In" && (
              <a onClick={() => onChangeState("Sing Up")}>
                <Texts text="Don't have an Account." />
              </a>
            )}

            {(text === "Sing Up" || text === "Restore") && (
              <a onClick={() => onChangeState("Sign In")}>
                <Texts text="Do you have an Account?" />
              </a>
            )}
          </div>
        </div>

        {text === "Sign In" && <ChoseLogin text="Google" />}
      </div>
    </div>
  );
}

export default Form;

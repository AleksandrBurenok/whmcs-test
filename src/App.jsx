import { useState } from "react";

import { useForm } from "./hooks/useForm/useForm";

import { FirstForm } from "./Forms/FirstForm/FirstForm";
import { SecondForm } from "./Forms/SecondForm/SecondForm";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("mywebsitedomain.store");

  const domainText = searchQuery.split(".");

  const { step, next } = useForm([
    <FirstForm key="1" domainText={domainText} />,
    <SecondForm key="2" domainText={domainText} />,
  ]);

  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="line" />
      <form>
        <div className="wrapperSearch">
          <label className="labelSearch">
            <input
              type="text"
              className="inputSearch"
              value={searchQuery}
              onChange={onChange}
            />
          </label>
          <button type="button" className="btnContinue" onClick={next}>
            Continue
          </button>
        </div>

        {step}
      </form>
    </>
  );
}

export default App;

import Check from "../../icons/Check";
import Cart from "../../icons/Cart";
import Info from "../../icons/Info";
import ArrowDown from "../../icons/ArrowDown";

import "./styles.css";

export function FirstForm({ domainText }) {
  return (
    <div className="wrapper">
      <div className="topBlock">
        <div className="topBlockLeft">
          <div className="feature">
            <Check className="iconFeature" />
            <span>it&apos;s a match</span>
          </div>
          <p className="domainName">
            {domainText[0]}
            <strong>.{domainText[1]}</strong>
          </p>
          <p className="domainText">
            This domain is available, get it now before it&apos;s too late!
          </p>
        </div>
        <div>
          <div className="wrapperCart">
            <span>for the first year</span>
            <Info className="iconInfo" />
            <span className="price">$99</span>
            <button type="button" className="btnCart">
              <span className="btnCartText">Add to basket</span> <Cart />
            </button>
          </div>
        </div>
      </div>
      <div className="greyLine" />
      <div className="bottomBlock">
        <div className="wrapperFeatures">
          <span className="featuresText">Features:</span>
          <div className="feature">
            <Check className="iconFeature" />
            <span>free domain protection when you add hosting</span>
          </div>
          <div className="feature">
            <Check className="iconFeature" />
            <span>free site builder</span>
          </div>
          <div className="feature">
            <Check className="iconFeature" />
            <span>management portal</span>
          </div>
          <div className="feature">
            <Check className="iconFeature" />
            <span>24/7 support</span>
          </div>
        </div>
        <p className="configText">
          You can configure this domain in the checkout.
        </p>
        <div className="wrapperConfig">
          <div className="configBlock">
            <p className="configBlockListTitle">You&apos;ve picked well...</p>
            <ul className="configList">
              <li>
                Receive a&nbsp;<span>20% discount</span>&nbsp;for 3+ year
                purchased
              </li>
              <li>
                <span>30%</span>&nbsp;of e-commerce stores use .store!
              </li>
              <li>
                This domain has been searched&nbsp;<span>1,234 times!</span>
              </li>
            </ul>
          </div>
          <div className="configBlock">
            <p className="regPeriodText">Registration period:</p>
            <div className="wrapperSelect">
              <select name="select" className="select">
                <option value="value1" defaultValue>
                  1 Year - $99
                </option>
                <option value="value2">2 Years - $175</option>
                <option value="value3">3 Years - $275</option>
              </select>
              <div className="wrapperArrow">
                <ArrowDown />
              </div>
            </div>

            <div className="renewsText">
              <span>Renews Jan 2024 for $246/yr</span>
              <Info />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

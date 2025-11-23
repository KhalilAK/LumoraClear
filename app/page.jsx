'use client'


import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <style>{`
          .custom_fonts .custom-google-fonts-enabled * {
            font-family: 'Noto Sans', Helvetica, sans-serif;
          }
          .custom_fonts .custom-google-fonts-enabled h1,
          .custom_fonts .custom-google-fonts-enabled h2,
          .custom_fonts .custom-google-fonts-enabled h3,
          .custom_fonts .custom-google-fonts-enabled h4,
          .custom_fonts .custom-google-fonts-enabled h5,
          .custom_fonts .custom-google-fonts-enabled h6{
            font-family: 'Noto Sans', Helvetica, serif;
          }
        `}</style>

        <link rel="icon" type="image/x-icon" href="/static/images/lumoraclear.ico" sizes="16x16" />

        <meta property="og:type" content="website" />

        <title>LumoraClear</title>
        <meta property="og:title" content="LumoraClear" />
        <meta name="twitter:title" content="LumoraClear" />

        <meta name="description" content="Making medical bills simple, transparent, and clear to understand." />
        <meta property="og:description" content="Making medical bills simple, transparent, and clear to understand." />
        <meta name="twitter:description" content="Making medical bills simple, transparent, and clear to understand." />

        <meta property="og:image" content="https://unicorn-images.b-cdn.net/e6d24e01-ff58-49f7-9a2a-2e95ef71efc4?optimizer=gif" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://unicorn-images.b-cdn.net/e6d24e01-ff58-49f7-9a2a-2e95ef71efc4?optimizer=gif" />

        <link href="https://hen-live-37391.uncrn.co/" rel="canonical" />
        <meta name="twitter:url" content="https://hen-live-37391.uncrn.co/" />
        <meta property="og:url" content="https://hen-live-37391.uncrn.co/" />
      </Head>

      <div className="style-black-1 custom-colors-enabled custom_fonts comps live_website unicorn-platform-website custom-google-fonts-enabled comps has-fontSizeH1 has-fontSizeH2 has-fontSizeH3 has-buttonRadius has-buttonShadow has-buttonFontSize has-fontSizeContent has-buttonFontWeight has-fontSizeParagraphs has-buttonVerticalPadding has-buttonHorizontalPadding has-buttonShadow--none has-nocache" id="663667-1059284">

        {/* Navigation */}
        <nav id="uni-navigation-bar" className="js-nav nav-02">
          <div className="container container--large">
            <div className="nav-02__box">
              <div className="nav-02__logo">
                <Link href="/" className="nav-02__link" aria-label="Home">
                  <img
                    className="nav-02__logo_img"
                    height="50"
                    alt="Company logo"
                    src="/static/images/lumoralogo.png"
                  />
                  <span className="content-text nav-02__logo_text">LumoraClear</span>
                </Link>
              </div>
              <div className="nav-02__links js-menu">
                <div className="nav-02__list_wrapper">
                  <ul className="nav-02__list nav-02__list--desktop">
                    <li className="nav-02__item">
                      <a className="button button--black-outline button--empty" href="/" target="_blank">
                        <span className="button__text">Home</span>
                      </a>
                    </li>
                    <li className="nav-02__item">
                      <a className="button button--black-outline button--empty" href="/features" target="_blank">
                        <span className="button__text">Features</span>
                      </a>
                    </li>
                    <li className="nav-02__item">
                      <a className="button button--black-outline button--empty" href="/about" target="_blank">
                        <span className="button__text">About Us</span>
                      </a>
                    </li>
                    <li className="nav-02__item"></li>
                  </ul>
                  <ul className="nav-02__list nav-02__list--mobile">
                    <li className="nav-02__item">
                      <a className="button button--black-outline button--empty" href="/" target="_blank">
                        <span className="button__text">Home</span>
                      </a>
                    </li>
                    <li className="nav-02__item">
                      <a className="button button--black-outline button--empty" href="/features" target="_blank">
                        <span className="button__text">Features</span>
                      </a>
                    </li>
                    <li className="nav-02__item">
                      <a className="button button--black-outline button--empty" href="/about" target="_blank">
                        <span className="button__text">About Us</span>
                      </a>
                    </li>
                    <li className="nav-02__item"></li>
                  </ul>
                </div>
                <div className="nav-02__burger">
                  <button className="burger burger--black js-open-menu" type="button" title="Open menu">
                    <div className="burger__box">
                      <div className="burger__inner"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <style jsx>{`
          body {
            overflow-x: hidden;
          }

          .nav-02 {
            border-bottom: 1px solid #eee;
            padding: 20px 0 !important;
          }

          #uni-navigation-bar .button--empty {
            margin: auto;
            align-items: center;
            font-weight: 400;
          }

          #uni-navigation-bar .button--empty:hover {
            color: var(--accent);
          }

          #uni-navigation-bar .button--accent-bg {
            margin-left: 230px;
          }

          @media (max-width: 900px) {
            .button__text {
              font-size: 24px !important;
            }
          }

          @media (max-width: 900px) {
            .nav-02__list--mobile {
              padding: 160px 15px 40px 15px;
            }
          }

          @media (max-width: 1080px) {
            #uni-navigation-bar .button--accent-bg {
              margin-left: 180px !important;
            }
          }

          @media (max-width: 900px) {
            #uni-navigation-bar .button--accent-bg {
              margin-left: 0px !important;
            }
          }

          @media (max-width: 900px) {
            #uni-navigation-bar .nav-02__item {
              margin-bottom: 16px;
            }
          }

          @media (max-width: 900px) {
            #uni-navigation-bar .header-63__mockup {
              padding: 0px 0 !important;
            }
          }
        `}</style>

        {/* Header Section */}
        <div className="page-component__bg_image_box bg-white-color first_component header-63-parent is-first-component" id="header-62-755651">
          <div className="page-component__bg_overlay_box"></div>
          <div className="page-component__wrapper" style={{ zIndex: 14 }}>
            <header className="header-63 graphics-image default-graphics-image">
              <div className="header-63__wrapper">
                <div className="header-63__left">
                  <div className="header-63__left_content">
                    <h1 className="title-text heading header-63__heading"><p style={{margin:0, fontSize:50}}>LumoraClear</p></h1>
                    <div className="subtitle-text header-63__text content_box">
                      <p style={{fontSize:20}}>Making medical bills simple, transparent, and clear to understand.</p>
                    </div>
                    <div className="buttons-set header-63__buttons">
                      <div className="buttons-set">
                        <ul className="buttons-set__list">
                          <li className="buttons-set__item">
                            <Link href="/register" className="button button--accent-outline" style={{backgroundColor:'transparent', border:'2px solid black', borderRadius:6, boxShadow:'none', color:'black'}}>
                                <span className="button__text">Sign Up for the Waitlist</span>
                            </Link>
                          </li>
                        </ul>
                        <div className="def-12_8 content-text content_box cta_bottom_info">
                          <p style={{fontSize:15}}>Start your journey towards transparent healthcare today.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-63__right">
                  <div className="header-63__mockup">
                    <div className="mockup_v2 mockup_v2--iphone_15_pro">
                      <div className="mockup_v2__img_box">
                        <div className="mockup_v2__screenshot mockup_v2__area">
                          <img
                            className="mockup_v2__screenshot_img"
                            alt="Image 1"
                            src="/static/images/screenshots/dashboardnew.png"
                          />
                        </div>
                        <img
                          className="mockup_v2__device_img js-tab-content-item"
                          alt="Device frame"
                          src="https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif"
                          srcSet="https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=230&height=475 230w,https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=280&height=578 280w,https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=460&height=950 460w,https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=560&height=1156 560w,https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=690&height=1425 690w,https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=840&height=1734 840w"
                          sizes="(max-width: 1199px) 230px,280px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>

        <style jsx>{`
          #header-62-755651 .header-62 {
          width:100vw;
            overflow-x: hidden;
          }


          #header-62-755651 .header-63__right:before {
            content: '';
            position: absolute;
            border-radius: 50%;
            width: 550px;
            height: 550px;
            top: 22%;
            left: 51.5%;
            background: linear-gradient(white, #058aff);
            z-index:-1;
          }

          #header-62-755651 .header-63__left_content {
            max-width: 550px;
          }

          #header-62-755651 .header-63__mockup {
            margin-top: 80px;
            transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          #header-62-755651 .header-63__mockup:hover {
            transform: scale(1.10);
          }

          @media (max-width: 1200px) {
            #header-62-755651 .header-63__right:before {
              width: 450px;
              height: 450px;
              top: 22%;
              left: 55%;
            }
          }

          @media (max-width: 1130px) {
            #header-62-755651 .header-63__right:before {
              width: 450px;
              height: 450px;
              top: 22%;
              left: 53%;
            }
          }

          @media (max-width: 900px) {
            #header-62-755651 .header-63__right:before {
              display:none;
            }
          }

          @media (max-width: 900px) {
            #header-62-755651 .header-63__right {
              background: linear-gradient(white, #058aff);
              border-bottom-left-radius: 40px;


            }
          }

          @media (max-width: 900px) {
            #header-62-755651 .page-component__wrapper {
              margin: 0px 10px 20px 10px;
            }
          }

          @media (max-width: 900px) {
            #header-62-755651 .header-63__left {
              padding-top: 120px;
            }
          }

          #header-62-755651 {
            font-size: 3em;
            line-height: 1.1;
            margin-bottom: 0.2em;
            margin-top: 0.5em;
          }

          @media (max-width: 768px) {
            #header-62-755651 {
              font-size: 2.5em;
              line-height: 1.2;
              margin-bottom: 0.3em;
            }
          }

          @media (max-width: 500px) {
            #header-62-755651 {
              font-size: 2em;
              line-height: 1.2;
              margin-bottom: 0.3em;
            }
          }

          #header-62-755651 .header-63__text {
            font-size: 1.2em;
            line-height: 1.4;
            max-width: 480px;
          }

          @media (max-width: 768px) {
            #header-62-755651 .header-63__text {
              font-size: 1.1em;
              line-height: 1.4;
            }
          }

          #header-62-755651 .header-63__text {
            max-width: 500px;
            margin-bottom: 32px;
          }

          #header-62-755651 .store-button {
            border-radius: 10px;
            height: 48px;
            width: 160px;
            background-color: black;
          }

          @media (max-width: 500px) {
            #header-62-755651 .store-button {
              width: 90%;
              height: 56px;
            }
          }

          @media (max-width: 900px) {
            #header-62-755651 .header-63__mockup {
              padding: 0px 0 !important;
            }
          }

          .has-fontSizeH1 #header-62-755651.is-first-component .title-text {
            font-size: calc(var(--font-size-h1) / 1) !important;
          }
          .has-fontSizeH2 #header-62-755651.is-not-first-component .title-text {
            font-size: calc(var(--font-size-h2) / 1) !important;
          }
          .has-fontSizeParagraphs #header-62-755651 .subtitle-text {
            font-size: calc(var(--font-size-subtitles) / 0.83) !important;
          }

          @media(max-width: 768px) {
            .has-fontSizeH1 #header-62-755651.is-first-component .title-text {
              font-size: calc(var(--font-size-h1) / 1.2) !important;
            }
            .has-fontSizeH2 #header-62-755651.is-not-first-component .title-text {
              font-size: calc(var(--font-size-h2) / 1.2) !important;
            }
          }
          @media(max-width: 500px) {
            .has-fontSizeH1 #header-62-755651.is-first-component .title-text {
              font-size: calc(var(--font-size-h1) / 1.5) !important;
            }
            .has-fontSizeH2 #header-62-755651.is-not-first-component .title-text {
              font-size: calc(var(--font-size-h2) / 1.5) !important;
            }
          }

          @media(max-width: 768px) {
            .has-fontSizeParagraphs #header-62-755651 .subtitle-text {
              font-size: calc(var(--font-size-subtitles) / 0.9) !important;
            }
          }
        `}</style>

        {/* Features Section */}
        <div className="page-component__bg_image_box bg-custom-color features-03-parent is-not-first-component" id="features-03-31421">
          <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#F5F4FA' }}></div>
          <div className="page-component__wrapper" style={{ zIndex: 13, paddingTop: '80px', paddingBottom: '100px' }}>
            <div className="features-03">
              <div className="container container--small">
                <div className="title-box title-box--center">
                  <h2 className="title-text heading">Why LumoraClear?</h2>
                  <div className="subtitle-text title-box__text content_box">We're all about transparency.</div>
                </div>
              </div>
              <div className="container">
                <ul className="features-03__items">
                  <li className="features-03__item">
                    <div className="features-03__img_box">
                      <div className="features-03__img">
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <circle fill="#E9F1FF" className="fill-bg-light" cx="20" cy="20" r="20"/>
                            <g transform="translate(12 13)">
                              <rect fill="#4D61FC" className="fill-main" x="5" width="6" height="6" rx="3"/>
                              <rect fill="#4D61FC" className="fill-main" y="8" width="6" height="6" rx="3"/>
                              <rect fill="#00396B" className="fill-secondary" x="10" y="8" width="6" height="6" rx="3"/>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="title-text--inner features-03__number def-16 features-03__number--small">
                      Understand Your Bills
                    </div>
                    <div className="content-text features-03__word">
                      We help you understand what's covered and what's not by insurance.
                    </div>
                  </li>
                  <li className="features-03__item">
                    <div className="features-03__img_box">
                      <div className="features-03__img">
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <circle fill="#E9F1FF" className="fill-bg-light" cx="20" cy="20" r="20"/>
                            <path fill="#4D61FC" className="fill-main" d="M20 13l7 8.235H13z"/>
                            <path stroke="#E9F1FF" className="stroke-light fill-secondary" fill="#00396B" d="M20 17.588L28 27H12z"/>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="title-text--inner features-03__number def-24 features-03__number--medium">
                      Verify Charges
                    </div>
                    <div className="content-text features-03__word">
                      We spot potential overcharges &amp; double charges for you.
                    </div>
                  </li>
                  <li className="features-03__item">
                    <div className="features-03__img_box">
                      <div className="features-03__img">
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <circle fill="#E9F1FF" className="fill-bg-light" cx="20" cy="20" r="20"/>
                            <path fill="#4D61FC" className="fill-main" d="M13 13h6v6h-6zM21 13h6v6h-6zM13 21h6v6h-6z"/>
                            <path fill="#00396B" className="fill-secondary" d="M21 21h6v6h-6z"/>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="title-text--inner features-03__number def-16 features-03__number--small">
                      Manage Everything in One Place
                    </div>
                    <div className="content-text features-03__word">
                      All your medical bills, simplified and secure.
                    </div>
                  </li>
                </ul>
                <div className="bottom_cta"></div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          #features-03-31421 .page-component__wrapper {
            padding-top: 70px !important;
            padding-bottom: 80px !important;
          }

          #features-03-31421 .page-component__bg_overlay_box {
            border-radius: 40px;
            margin: 0 10px;
          }

          #features-03-31421 .container {
            max-width: 1230px;
          }

          #features-03-31421 .heading {
            font-size: 3.1em;
            line-height: 1.1;
            margin-bottom: 0.2em;
            margin-top: 0.5em;
          }

          @media (max-width: 768px) {
            #features-03-31421 .heading {
              font-size: 2.4em;
              line-height: 1.2;
              margin-bottom: 0.3em;
            }
          }

          @media (max-width: 500px) {
            #features-03-31421 .heading {
              font-size: 2em;
              line-height: 1.2;
              margin-bottom: 0.3em;
            }
          }

          #features-03-31421 .title-box {
            font-size: 1.2em;
            line-height: 1.4;
            max-width: 640px;
          }

          #features-03-31421 .title-box__text {
            font-size: 1.2em;
            line-height: 1.4;
            max-width: 600px;
          }

          @media (max-width: 768px) {
            #features-03-31421 .title-box__text {
              font-size: 1.1em;
              line-height: 1.4;
            }
          }

          #features-03-31421 .container--small {
            max-width: 1200px;
          }

          #features-03-31421 .button {
            padding: 12px 20px;
            min-width: 180px;
            min-height: 44px;
            box-shadow: 0 0px 0px 0 rgba(136,144,195,0.2), 0 0px 0px 0 rgba(37,44,97,0.15);
          }

          @media (max-width: 500px) {
            #features-03-31421 .button {
              width: 90%;
            }
          }

          #features-03-31421 .features-03__img img {
            max-height: 130px;
            height: 130px;
          }

          #features-03-31421 .features-03__number {
            margin-top: 24px;
            text-transform: uppercase;
          }

          #features-03-31421 .features-03__word {
            line-height: 1.4;
            max-width: 300px;
          }

          #features-03-31421 .features-03__items {
            margin-bottom: -32px;
            gap: 30px;
          }

          #features-03-31421 .features-03__item {
            transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          #features-03-31421 .features-03__item:hover {
            transform: scale(1.05);
          }

          .has-fontSizeH1 #features-03-31421.is-first-component .title-text {
            font-size: calc(var(--font-size-h1) / 0.96) !important;
          }
          .has-fontSizeH2 #features-03-31421.is-not-first-component .title-text {
            font-size: calc(var(--font-size-h2) / 0.96) !important;
          }
          .has-fontSizeParagraphs #features-03-31421 .subtitle-text {
            font-size: calc(var(--font-size-subtitles) / 0.83) !important;
          }

          @media(max-width: 768px) {
            .has-fontSizeH1 #features-03-31421.is-first-component .title-text {
              font-size: calc(var(--font-size-h1) / 1.25) !important;
            }
            .has-fontSizeH2 #features-03-31421.is-not-first-component .title-text {
              font-size: calc(var(--font-size-h2) / 1.25) !important;
            }
          }
          @media(max-width: 500px) {
            .has-fontSizeH1 #features-03-31421.is-first-component .title-text {
              font-size: calc(var(--font-size-h1) / 1.5) !important;
            }
            .has-fontSizeH2 #features-03-31421.is-not-first-component .title-text {
              font-size: calc(var(--font-size-h2) / 1.5) !important;
            }
          }

          @media(max-width: 768px) {
            .has-fontSizeParagraphs #features-03-31421 .subtitle-text {
              font-size: calc(var(--font-size-subtitles) / 0.9) !important;
            }
          }

          .has-fontSizeParagraphs #features-03-31421 .title-text--inner {
            font-size: calc(var(--font-size-h3) / 2) !important;
          }
        `}</style>

        {/* Slider Section */}
        <div className="page-component__bg_image_box bg-white-color slider-10-parent is-not-first-component" id="slider-10-140271">
          <div className="page-component__bg_overlay_box" style={{}}></div>
          <div className="page-component__wrapper" style={{ zIndex: 12, paddingTop: '50px', paddingBottom: '50px' }}>
            <div className="slider-10 graphics-image default-graphics-image">
              <div className="container container--small">
                <div className="title-box title-box--center">
                  <h2 className="title-text heading">Our Features</h2>
                  <div className="subtitle-text title-box__text content_box">Designed with the consumer in mind.</div>
                </div>
              </div>
              <div className="container slider-10__wrapper">
                <div className="slider-10__slider_container">
                  <div className="slider slider-10__slider">
                    <div className="slider__arrow slider__arrow--prev">
                      <button className="circle-button js-prev-arrow circle-button--icon circle-button--light-bg" type="button">
                        <span className="icon">
                          <svg width="24" height="17" viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg">
                            <g id="styleguide" fill="none" fillRule="evenodd">
                              <g id="Unicorn-Styleguide" transform="translate(-121 -2006)" fillRule="nonzero" fill="#00396B" className="fill-main">
                                <g id="Icons" transform="translate(55 1963)">
                                  <g id="arrow-pointing-to-right" transform="translate(66 43)">
                                    <path d="M23.673 7.688L16.531.336a1.094 1.094 0 0 0-1.578 0 1.173 1.173 0 0 0 0 1.625l5.237 5.39H1.116C.5 7.351 0 7.866 0 8.5s.5 1.149 1.116 1.149H20.19l-5.237 5.39a1.173 1.173 0 0 0 0 1.625 1.097 1.097 0 0 0 1.578 0l7.142-7.352a1.173 1.173 0 0 0 0-1.624z" id="Shape" transform="matrix(-1 0 0 1 24 0)"/>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="slider__arrow slider__arrow--next">
                      <button className="circle-button js-next-arrow circle-button--icon circle-button--light-bg" type="button">
                        <span className="icon">
                          <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z" fillRule="nonzero" fill="#00396B" className="fill-main"/>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <ul className="slider__box js-slider" data-slider-config='{"dots": false, "infinite": true, "speed": 300, "fade": true, "cssEase": "ease-out", "adaptiveHeight": false, "centerMode": true, "variableWidth": false, "slidesToShow": 1, "lazyLoad": "ondemand", "focusOnSelect": false, "arrows": true, "responsive": [{"breakpoint": 440, "settings": {"autoplay": true, "autoplaySpeed": 1400}}]}'>
                      <li className="slider-10__item slider__item">
                        <div className="slider-10__img">
                          <div className="mockup_v2 mockup_v2--iphone_15_pro">
                            <div className="mockup_v2__img_box">
                              <div className="mockup_v2__screenshot mockup_v2__area">
                                <img
                                  loading="lazy"
                                  className="mockup_v2__screenshot_img"
                                  alt="Image 2"
                                  src="https://unicorn-images.b-cdn.net/ef5fa346-4439-458e-86ae-233297f9a7fa?optimizer=gif"
                                  srcSet="https://unicorn-images.b-cdn.net/ef5fa346-4439-458e-86ae-233297f9a7fa?optimizer=gif&width=225&height=483 225w,https://unicorn-images.b-cdn.net/ef5fa346-4439-458e-86ae-233297f9a7fa?optimizer=gif&width=270&height=580 270w,https://unicorn-images.b-cdn.net/ef5fa346-4439-458e-86ae-233297f9a7fa?optimizer=gif&width=450&height=966 450w,https://unicorn-images.b-cdn.net/ef5fa346-4439-458e-86ae-233297f9a7fa?optimizer=gif&width=540&height=1160 540w,https://unicorn-images.b-cdn.net/ef5fa346-4439-458e-86ae-233297f9a7fa?optimizer=gif&width=675&height=1449 675w,https://unicorn-images.b-cdn.net/ef5fa346-4439-458e-86ae-233297f9a7fa?optimizer=gif&width=738&height=1583 738w"
                                  sizes="(max-width: 750px) 225px,270px"
                                />
                              </div>
                              <img
                                loading="lazy"
                                className="mockup_v2__device_img js-tab-content-item"
                                alt="Device frame"
                                src="https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif"
                                srcSet="https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=195&height=403 195w,https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=245&height=506 245w,https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=390&height=806 390w,https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=490&height=1012 490w,https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=585&height=1209 585w,https://unicorn-images.b-cdn.net/44207e16-4c8b-47c6-8045-67ac611f9e18?optimizer=gif&width=735&height=1518 735w"
                                sizes="(max-width: 750px) 195px,245px"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="slider-10__text_container">
                  <li className="slider-10__feature">
                    <div className="feature">
                      <h3 className="feature__title">
                        <div className="feature__icon">
                          <span className="icon" data='{"type": "abstractIcon", "emojiSrc": "1f381.svg", "uploadedSrc": "", "lineaIconSrc": "", "abstractIconId": "6", "uploadedHeight": 30}'>
                            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <circle fill="#E9F1FF" className="fill-bg-light" cx="20" cy="20" r="20"/>
                                <g fillRule="nonzero">
                                  <path d="M19.607 19.275h.025a3.14 3.14 0 0 0 3.137-3.138A3.14 3.14 0 0 0 19.632 13 6.64 6.64 0 0 0 13 19.632a6.639 6.639 0 0 0 3.643 5.919 3.832 3.832 0 0 1-.862-2.425 3.855 3.855 0 0 1 3.826-3.85z" fill="#4D61FC" className="fill-main"/>
                                  <path d="M23.357 14.45c.539.662.862 1.506.862 2.424a3.855 3.855 0 0 1-3.85 3.851 3.14 3.14 0 0 0-3.138 3.138A3.14 3.14 0 0 0 20.368 27h.003A6.64 6.64 0 0 0 27 20.368a6.639 6.639 0 0 0-3.643-5.918z" fill="#00396B" className="fill-secondary"/>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </div>
                        <span className="title-text--inner def-12 feature__title_text">
                          AI-Powered Analysis
                        </span>
                      </h3>
                      <div className="feature__content">
                        <span className="content-text feature__content_text content_box">
                          <p>Our platform uses advanced AI to analyze your medical bills, keeping everything transparent.</p>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="slider-10__feature">
                    <div className="feature">
                      <h3 className="feature__title">
                        <div className="feature__icon">
                          <span className="icon" data='{"type": "abstractIcon", "emojiSrc": "1f381.svg", "uploadedSrc": "", "lineaIconSrc": "", "abstractIconId": "11", "uploadedHeight": 30}'>
                            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <circle fill="#E9F1FF" className="fill-bg-light" cx="20" cy="20" r="20"/>
                                <path fill="#4D61FC" className="fill-main" d="M13 15l6 1.92v9.6l-6-1.92z"/>
                                <path fill="#00396B" className="fill-secondary" d="M26 15l-6 1.92v9.6l6-1.92z"/>
                              </g>
                            </svg>
                          </span>
                        </div>
                        <span className="title-text--inner def-12 feature__title_text">
                          Secure Platform
                        </span>
                      </h3>
                      <div className="feature__content">
                        <span className="content-text feature__content_text content_box">
                          Your data is safe with us. We prioritize your privacy.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="slider-10__feature">
                    <div className="feature">
                      <h3 className="feature__title">
                        <div className="feature__icon">
                          <span className="icon" data='{"type": "abstractIcon", "emojiSrc": "1f381.svg", "uploadedSrc": "", "lineaIconSrc": "", "abstractIconId": "4", "uploadedHeight": 30}'>
                            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <circle fill="#E9F1FF" className="fill-bg-light" cx="20" cy="20" r="20"/>
                                <path fill="#4D61FC" className="fill-main" d="M20 13l7 8.235H13z"/>
                                <path stroke="#E9F1FF" className="stroke-light fill-secondary" fill="#00396B" d="M20 17.588L28 27H12z"/>
                              </g>
                            </svg>
                          </span>
                        </div>
                        <span className="title-text--inner def-12 feature__title_text">
                          Insurance Coverage
                        </span>
                      </h3>
                      <div className="feature__content">
                        <span className="content-text feature__content_text content_box">
                          Our app provides clear insights into what your insurance covers, helping you avoid unexpected costs.
                        </span>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
              <div className="bottom_cta"></div>
            </div>
          </div>
        </div>

        <style jsx>{`
          #slider-10-140271 .slider-10 {
            overflow-x: hidden;
          }

          #slider-10-140271 .container--small {
            max-width: 650px;
          }

          #slider-10-140271 .slider-10__slider_container:before {
            content: '';
            position: absolute;
            border-radius: 50%;
            width: 500px;
            height: 500px;
            top: 0;
            left: 1.5%;
            right: 0;
            background: linear-gradient(white, var(--accent)) !important;
          }

          @media (max-width: 900px) {
            #slider-10-140271 .slider-10__slider_container:before {
              display: none;
            }
          }

          @media (max-width: 900px) {
            #slider-10-140271 .slider-10__slider_container {
              background: linear-gradient(white, var(--accent)) !important;
              border-bottom-left-radius: 40px;
              border-bottom-right-radius: 40px;
              width: 100%;
              max-width: 900px;
            }
          }

          @media (max-width: 900px) {
            #slider-10-140271 .slick-track {
              height: 560px !important;
              top: 10px;
            }
          }

          @media (max-width: 900px) {
            #slider-10-140271 .slider-10__feature {
              max-width: 700px;
            }
          }

          @media (max-width: 750px) {
            #slider-10-140271 .slick-track {
              height: 440px !important;
              top: 10px;
            }
          }

          #slider-10-140271 .slider-10__item {
            transform: rotate(-10deg);
            transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          #slider-10-140271 .slider-10__item:hover {
            transform: scale(1.05);
          }

          #slider-10-140271 .slick-track {
            height: 536px;
            top: 14px;
          }

          .has-fontSizeH1 #slider-10-140271.is-first-component .title-text {
            font-size: calc(var(--font-size-h1) / 1) !important;
          }
          .has-fontSizeH2 #slider-10-140271.is-not-first-component .title-text {
            font-size: calc(var(--font-size-h2) / 1) !important;
          }
          .has-fontSizeParagraphs #slider-10-140271 .subtitle-text {
            font-size: calc(var(--font-size-subtitles) / 0.83) !important;
          }

          @media(max-width: 768px) {
            .has-fontSizeH1 #slider-10-140271.is-first-component .title-text {
              font-size: calc(var(--font-size-h1) / 1.2) !important;
            }
            .has-fontSizeH2 #slider-10-140271.is-not-first-component .title-text {
              font-size: calc(var(--font-size-h2) / 1.2) !important;
            }
          }
          @media(max-width: 500px) {
            .has-fontSizeH1 #slider-10-140271.is-first-component .title-text {
              font-size: calc(var(--font-size-h1) / 1.5) !important;
            }
            .has-fontSizeH2 #slider-10-140271.is-not-first-component .title-text {
              font-size: calc(var(--font-size-h2) / 1.5) !important;
            }
          }

          @media(max-width: 768px) {
            .has-fontSizeParagraphs #slider-10-140271 .subtitle-text {
              font-size: calc(var(--font-size-subtitles) / 0.9) !important;
            }
          }
        `}</style>

        {/* CTA Button Section */}
        <div className="page-component__bg_image_box bg-custom-color cta_button-03-parent is-not-first-component" id="cta_button-03-405361">
          <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#F5F4FA' }}></div>
          <div className="page-component__wrapper" style={{ zIndex: 11, paddingTop: '70px', paddingBottom: '70px' }}>
            <div className="cta_button-03">
              <div className="container container--mid">
                <div className="cta_button-03__wrapper">
                  <div className="cta_button-03__title_box">
                    <div className="subtitle-text cta_button-03__text content_box">
                      <p>We built LumoraClear to make your medical bills easy to understand. Premiums, Co-insurance, Co-pay, HMO vs PPO, etc—what do they even mean? Our mission is to help people take control of their medical bills and insurance with clarity and confidence.&nbsp;</p>
                      <p></p>
                      <p>We'll make it simple to understand what you owe, what's covered, and to spot potential billing errors before they cost you. Using smart AI and a human-centered design, we empower users to easily track, verify, and manage their healthcare expenses - all in one secure place.</p>
                      <p></p>
                      <p>LumoraClear brings light into the unclear world of medical billing — illuminating every detail so you can finally see your healthcare costs clearly.</p>
                    </div>
                    <h3 className="title-text cta_button-03__title">About Us</h3>
                  </div>
                  <div className="cta_button-03__button_box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          #cta_button-03-405361 .container--mid {
            max-width: 1200px;
          }
          #cta_button-03-405361 .container {
            max-width: 1200px;
          }

          #cta_button-03-405361 .page-component__bg_overlay_box {
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            margin: 0 10px;
          }

          #cta_button-03-405361 .page-component__wrapper {
            padding-bottom: 10px !important;
          }

          #cta_button-03-405361 .cta_button-03__title_box {
            max-width: 600px;
          }

          @media (max-width: 1200px) {
            #cta_button-03-405361 .cta_button-03__wrapper {
              padding: 0px 20px;
            }
          }

          @media (max-width: 900px) {
            #cta_button-03-405361 .cta_button-03__wrapper {
              text-align: center;
              margin: auto;
              display: block;
            }
          }

          @media (max-width: 900px) {
            #cta_button-03-405361 .cta_button-03__title_box {
              text-align: center;
              margin: auto;
              margin-bottom: 30px;
            }
          }

          .has-fontSizeH1 #cta_button-03-405361.is-first-component .title-text {
            font-size: calc(var(--font-size-h1) / 1) !important;
          }
          .has-fontSizeH2 #cta_button-03-405361.is-not-first-component .title-text {
            font-size: calc(var(--font-size-h2) / 1) !important;
          }
          .has-fontSizeParagraphs #cta_button-03-405361 .subtitle-text {
            font-size: calc(var(--font-size-subtitles) / 0.83) !important;
          }

          @media(max-width: 768px) {
            .has-fontSizeH1 #cta_button-03-405361.is-first-component .title-text {
              font-size: calc(var(--font-size-h1) / 1.2) !important;
            }
            .has-fontSizeH2 #cta_button-03-405361.is-not-first-component .title-text {
              font-size: calc(var(--font-size-h2) / 1.2) !important;
            }
          }
          @media(max-width: 500px) {
            .has-fontSizeH1 #cta_button-03-405361.is-first-component .title-text {
              font-size: calc(var(--font-size-h1) / 1.5) !important;
            }
            .has-fontSizeH2 #cta_button-03-405361.is-not-first-component .title-text {
              font-size: calc(var(--font-size-h2) / 1.5) !important;
            }
          }

          @media(max-width: 768px) {
            .has-fontSizeParagraphs #cta_button-03-405361 .subtitle-text {
              font-size: calc(var(--font-size-subtitles) / 0.9) !important;
            }
          }
        `}</style>

        {/* Contact Section */}
        <div className="page-component__bg_image_box bg-white-color posts-05-parent is-not-first-component" id="posts-05-26831">
          <div className="page-component__bg_overlay_box" style={{}}></div>
          <div className="page-component__wrapper" style={{ zIndex: 10, paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="posts-05">
              <div className="container container--small">
                <div className="title-box title-box--center">
                  <h2 className="title-text heading">Contact Us</h2>
                  <div className="subtitle-text title-box__text content_box">We're here to help.</div>
                </div>
              </div>
              <div className="container container--large">
                <div className="posts-05__wrapper">
                  <div className="sh-4 card-container posts-05__item">
                    <div className="posts-05__img_box posts-05__img_box--small" style={{ backgroundColor: '#f5f5f5' }}></div>
                    <div className="posts-05__text">
                      <h3 className="posts-05__title">
                        <span className="title-text--inner def-18_72">Email Us</span>
                        <span className="content-text def-14 posts-05__title_info">support@lumoraclear.com</span>
                      </h3>
                      <div className="content-text posts-05__info content_box">
                        We're always here to help. Send us an email and we'll get back to you as soon as possible.
                      </div>
                      <div className="posts-05__link">
                        <div className="feature__button_box">
                          <a className="button button--empty button--accent-outline" href="mailto:support@lumoraclear.com" target="_blank">
                            <span className="button__text">Email Us</span>
                            <span className="icon">
                              <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z" fillRule="nonzero" fill="#00396B"></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom_cta">
                  <div className="buttons-set">
                    <ul className="buttons-set__list">
                      <li className="buttons-set__item">
                        <a className="button button--accent-outline" href="/contact" target="_blank">
                          <span className="button__text">Contact Us</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          #posts-05-26831 .page-component__wrapper {
            padding-top: 70px !important;
          }

          @media (max-width: 768px) {
            #posts-05-26831 .page-component__wrapper {
              padding-bottom: 50px !important;
              padding-top: 50px !important;
            }
          }

          @media (max-width: 900px) {
            #posts-05-26831 .page-component__wrapper {
              padding-bottom: 70px !important;
            }
          }

          #posts-05-26831 .container--large {
            max-width: 1290px;
          }

          #posts-05-26831 .button--white-outline {
            background-color: #303030 !important;
            padding: 10px 20px !important;
            border-radius: 20px;
          }

          #posts-05-26831 .page-component__bg_overlay_box {
            border-radius: 40px;
            margin: 0 10px;
          }

          #posts-05-26831 .heading {
            font-size: 3.1em;
            line-height: 1.1;
            margin-bottom: 0.2em;
            margin-top: 0.5em;
            font-weight: 700;
          }

          @media (max-width: 768px) {
            #posts-05-26831 .heading {
              font-size: 2.4em;
              line-height: 1.2;
              margin-bottom: 0.3em;
            }
          }

          @media (max-width: 500px) {
            #posts-05-26831 .heading {
              font-size: 2em;
              line-height: 1.2;
              margin-bottom: 0.3em;
            }
          }

          #posts-05-26831 .title-box__text {
            font-size: 1.2em;
            line-height: 1.4;
            max-width: 600px;
          }

          @media (max-width: 768px) {
            #posts-05-26831 .title-box__text {
              font-size: 1.1em;
              line-height: 1.4;
            }
          }

          #posts-05-26831 .container--small {
            max-width: 650px;
          }

          #posts-05-26831 .posts-05__img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
            height: 100%;
            width: 100%;
            object-position: center top;
          }

          #posts-05-26831 .posts-05__img_box {
            display: content;
            align-items: flex-end;
            position: relative;
            height: 240px;
          }

          #posts-05-26831 .posts-05__text {
            padding: 16px 32px 32px;
            width: 100%;
          }

          #posts-05-26831 .posts-05__item {
            margin: 10px;
            border-radius: 40px;
            border: 1px solid #eee;
            box-shadow: none;
            transition: transform .2s ease;
            display: flex;
            flex-direction: column;
          }

          #posts-05-26831 .posts-05__item:hover {
            transform: scale(0.95);
          }

          #posts-05-26831 .posts-05__wrapper {
            align-items: stretch;
          }

          #posts-05-26831 .posts-05__text {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }

          #posts-05-26831 .posts-05__link {
            margin-top: auto;
          }

          @media (max-width: 1140px) {
            #posts-05-26831 .posts-05__item {
              width: calc(100% - 20px);
              flex: 1 1 33%;
            }
          }

          @media (max-width: 900px) {
            #posts-05-26831 .posts-05__item {
              width: 100%;
              flex: 1 1 100%;
            }
          }

          @media (max-width: 1024px) {
            #posts-05-26831 .container {
              padding: 0px;
            }
          }

          #posts-05-26831.uni-is-dark-bg .posts-05__text {
            padding: 16px 32px 32px;
            width: 100%;
            color: rgba(255,255,255,0.8);
          }
          #posts-05-26831.uni-is-dark-bg .posts-05__title {
            color: white;
          }
          #posts-05-26831.uni-is-dark-bg .posts-05__item {
            margin: 10px;
            border-radius: 16px;
            box-shadow: none;
            border: 1px solid rgba(136,144,195,0.25);
            transition: box-shadow .2s ease,transform .2s ease;
            display: flex;
            flex-direction: column;
            background-color: transparent;
          }

          .has-fontSizeH1 #posts-05-26831.is-first-component .title-text {
            font-size: calc(var(--font-size-h1) / 1) !important;
          }
          .has-fontSizeH2 #posts-05-26831.is-not-first-component .title-text {
            font-size: calc(var(--font-size-h2) / 1) !important;
          }
          .has-fontSizeParagraphs #posts-05-26831 .subtitle-text {
            font-size: calc(var(--font-size-subtitles) / 0.83) !important;
          }

          @media(max-width: 768px) {
            .has-fontSizeH1 #posts-05-26831.is-first-component .title-text {
              font-size: calc(var(--font-size-h1) / 1.2) !important;
            }
            .has-fontSizeH2 #posts-05-26831.is-not-first-component .title-text {
              font-size: calc(var(--font-size-h2) / 1.2) !important;
            }
          }
          @media(max-width: 500px) {
            .has-fontSizeH1 #posts-05-26831.is-first-component .title-text {
              font-size: calc(var(--font-size-h1) / 1.5) !important;
            }
            .has-fontSizeH2 #posts-05-26831.is-not-first-component .title-text {
              font-size: calc(var(--font-size-h2) / 1.5) !important;
            }
          }

          @media(max-width: 768px) {
            .has-fontSizeParagraphs #posts-05-26831 .subtitle-text {
              font-size: calc(var(--font-size-subtitles) / 0.9) !important;
            }
          }
        `}</style>

        {/* Popup Component */}
        <div
          className="popup-component js-custom-popup page-component__bg_image_box bg-white-color first_component popup-component_no-image popup-01-parent is-not-first-component"
          id="popup-01-success_default"
        >
          <button className="popup-component__close-button js-close-custom-popup-button">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.0806 17.9986L30.6275 5.42673C30.8043 5.2178 30.6556 4.90039 30.3824 4.90039H27.1762C26.9873 4.90039 26.8065 4.98477 26.682 5.12941L17.9833 15.4995L9.28465 5.12941C9.16411 4.98477 8.98331 4.90039 8.79045 4.90039H5.5842C5.31099 4.90039 5.16233 5.2178 5.33911 5.42673L15.886 17.9986L5.33911 30.5705C5.29951 30.6171 5.2741 30.674 5.26591 30.7346C5.25771 30.7952 5.26708 30.8568 5.29288 30.9122C5.31869 30.9677 5.35985 31.0145 5.41149 31.0472C5.46313 31.0799 5.52307 31.0972 5.5842 31.0968H8.79045C8.97929 31.0968 9.16009 31.0124 9.28465 30.8678L17.9833 20.4977L26.682 30.8678C26.8025 31.0124 26.9833 31.0968 27.1762 31.0968H30.3824C30.6556 31.0968 30.8043 30.7794 30.6275 30.5705L20.0806 17.9986Z" fill="white"/>
            </svg>
          </button>
          <div className="popup-component__bg_image_box">
            <div className="page-component__bg_overlay_box" style={{}}></div>
            <div className="page-component__wrapper" style={{ zIndex: 10, paddingTop: '1px', paddingBottom: '1px' }}>
              <div className="popup-01 graphics-image default-graphics-image">
                <div className="container container--premid popup-01__container">
                  <div className="popup-01__left">
                    <div className="popup-01__content">
                      <h2 className="title-text heading popup-01__heading">Submission Successful</h2>
                      <p className="subtitle-text content_box popup-01__text">The form has been successfully submitted.</p>
                      <div className="popup-01__cta-box">
                        <div className="buttons-set">
                          <ul className="buttons-set__list">
                            <li className="buttons-set__item">
                              <a className="button button--black-bg" href="/" target="_blank" onClick={(e) => { e.preventDefault(); }}>
                                <span className="button__text">Back to site</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white-color">
          <footer className="footer-04" id="footer" style={{}}>
            <div className="footer-04__top">
              <div className="container">
                <div className="footer-04__top_wrapper">
                  <div className="footer-04__col">
                    <a className="footer-04__logo_link" href="/" target="_self">
                      <img
                        loading="lazy"
                        alt="Logo"
                        className="footer-04__logo"
                        height="40"
                        src="./static/images/lumoralogo.png"
                      />
                    </a>
                    <div className="content-text def-14 footer-04__info content_box">
                      <p>© 2025 LumoraClear. All rights reserved.</p>
                    </div>
                  </div>

                  <div className="footer-04__col">
                    <h3 className="def-18_72 title-text--inner footer-04__title">Company</h3>
                    <ul className="footer-04__list">
                      <li className="footer-04__item">
                        <a href="/about" target="_blank" className="content-text def-14 footer-04__link">
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-04__col">
                    <h3 className="def-18_72 title-text--inner footer-04__title">Follow us</h3>
                    <div className="footer-04__social_box">
                      <div className="social-buttons social-buttons--left">
                        <ul className="social-buttons__list">
                          <li className="social-buttons__item">
                            <a
                              className="social-buttons__link social-buttons__link--linkedin"
                              href="https://www.linkedin.com/company/LumoraClear"
                              target="_blank"
                            >
                              <img
                                loading="lazy"
                                className="social-buttons__icon"
                                alt="linkedin icon"
                                src="static/img/icons/social/color/linkedin.svg"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-04__bottom">
                <div className="container">
                  <div className="footer-04__bottom_wrapper">
                    <div className="buttons-set">
                      <ul className="buttons-set__list">
                        <li className="buttons-set__item">
                            <Link href="/register" className="button button--accent-outline">
                            <span className="button__text">Sign Up</span>
                            </Link>
                        </li>
                      </ul>
                    </div>

                    <ul className="footer-04__bottom_links">
                      <li className="footer-04__bottom_links_item">
                        <a target="_blank" href="mailto:support@lumoraclear.com" className="content-text def-12 footer-04__bottom_link footer-04__bottom_item">
                          Email: support@lumoraclear.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <style jsx>{`
          #footer .container {
            max-width: 1200px;
          }

          .footer-04__bottom_links {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }

          .social-buttons__icon {
            filter: brightness(0);
          }

          @media (max-width: 500px) {
            .footer-04 {
              margin: 0px 16px;
            }
          }

          @media (max-width: 500px) {
            #footer .footer-04__top_wrapper {
              justify-content: center;
              text-align: center;
            }
          }

          @media (max-width: 500px) {
            #footer .social-buttons__list {
              justify-content: center;
            }
          }

          @media (max-width: 1100px) {
            .footer-04__top_wrapper {
              justify-content: space-between;
            }
          }
        `}</style>

        {/* Additional global styles */}
        <style jsx global>{`
          .page-component__bg_image_box .page-component__bg_image_box .page-component__bg_overlay_box {
            position: relative;
          }
          body .page-component__bg_overlay_box {
            position: absolute;
          }
          .footer-02__text.content_box a {
            color: inherit !important;
          }
          .footer-04__info {
            font-size: 14px;
          }
        `}</style>
      </div>
    </>
  );
}

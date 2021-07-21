import React from "react";

const Page = ({ title, navbar, footer, script, _relativeURL, _ID, main }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html>
      <head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href={generateUrl(`/assets/css/index.css`)} />
      </head>
      <body>
        {navbar}
        <div className="app-wrapper">
          {main}
          {script != undefined ? (
            <script
              type="module"
              src={generateUrl(`/assets/js/${script}.js`)}
            />
          ) : null}
        </div>
        {footer}
      </body>
    </html>
  );
};

export default Page;

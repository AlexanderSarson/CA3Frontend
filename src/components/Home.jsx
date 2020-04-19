import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <Reflections />
    </React.Fragment>
  );
}

function Reflections() {
  return (
    <React.Fragment>
      <p>
        <h2>State management</h2>
        This start code includes advanced state management(like redux) see link
        to "Content 3".
        <br />
        This was alot of fun to write
        <h2>Test</h2>
        I've started writing E2E tests for the frontend using cypress which is
        kinda fun.
        <br />
        I also meant to write unit tests using jest but unfortunately i didn't
        have time
        <br />
        <h2>Continous Integration(Travis)</h2>
        <h3>Frontend</h3>
        I'm using travis to analyse, test, build and deploy my frontend.
        <br />
        this was a pain in the ass to do btw because cypress is really sensitive
        about which browsers you use for UI tests.
        <br />
        I'm looking into adding code coverage to sonarcloud too.
        <br />
        <a href='https://sonarcloud.io/dashboard?id=CA3-Frontend'>
          SonarCloud link Frontend
        </a>
        <br />
        <a href='https://dashboard.cypress.io/projects/o9gupc/runs'>
          Cypress tests link Frontend
        </a>
        <h3>Backend</h3>
        I'm using travis to analyse, test, build and deploy my backend.
        <br />
        <a href='https://sonarcloud.io/dashboard?id=CA3Backend'>
          SonarCloud link Backend
        </a>
      </p>
    </React.Fragment>
  );
}

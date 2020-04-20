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
      <h2>State management</h2>
      <p>
        This start code includes advanced state management(like redux) see link
        to "Content 3".
      </p>
      <p>This was alot of fun to write</p>
      <h2>Test</h2>
      <p>
        I've started writing E2E tests for the frontend using cypress which is
        kinda fun.
      </p>
      <p>
        I also meant to write unit tests using jest but unfortunately i didn't
        have time
      </p>
      <h2>Continous Integration(Travis)</h2>
      <h3>Frontend</h3>
      <p>I'm using travis to analyse, test, build and deploy my frontend.</p>
      <p>
        this was a pain in the ass to do btw because cypress is really sensitive
        about which browsers you use for UI tests.
      </p>
      <p>I'm looking into adding code coverage to sonarcloud too.</p>
      <a href='https://sonarcloud.io/dashboard?id=CA3-Frontend'>
        SonarCloud link Frontend
      </a>
      <a href='https://dashboard.cypress.io/projects/o9gupc/runs'>
        Cypress tests link Frontend
      </a>
      <h3>Backend</h3>
      <p>I'm using travis to analyse, test, build and deploy my backend.</p>
      <a href='https://sonarcloud.io/dashboard?id=CA3Backend'>
        SonarCloud link Backend
      </a>
    </React.Fragment>
  );
}

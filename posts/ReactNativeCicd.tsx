import React from 'react';

const ReactNativeCicd: React.FC = () => {
  return (
    <>
      <h1>React Native CI/CD with Expo & Azure</h1>
      <p>
        Manual deployments are error-prone and slow. At <strong>Seven Peaks</strong>, we automated our deployment pipeline for the <strong>Bandit App</strong> using Azure DevOps and Expo Application Services (EAS).
      </p>

      <h2>The Workflow</h2>
      <ol>
        <li><strong>Commit</strong>: Developer pushes code to the <code>main</code> branch.</li>
        <li><strong>Test</strong>: Azure Pipeline runs Jest unit tests and linting.</li>
        <li><strong>Build</strong>: If tests pass, EAS Build is triggered for Android and iOS.</li>
        <li><strong>Submit</strong>: EAS Submit automatically uploads the binary to the Play Store and App Store.</li>
      </ol>

      <h2>Configuration</h2>
      <p>Here is a snippet of our <code>eas.json</code> configuration:</p>
      <pre>
        <code>
{`{
  "build": {
    "production": {
      "node": "18.x",
      "autoIncrement": true,
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}`}
        </code>
      </pre>

      <h2>Results</h2>
      <p>
        Implementing this pipeline reduced our deployment time from <strong>2 hours</strong> to just <strong>15 minutes</strong> of manual oversight, allowing the team to focus on feature development.
      </p>
    </>
  );
};

export default ReactNativeCicd;
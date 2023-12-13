const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: "http://192.168.2.214:9000/dashboard?id=react_key",
    token: "sqp_f4c701b87aef0cb5703277d80d909179927043fd",    
    options: {
      "sonar.projectKey":"react_key",
      "sonar.projectName": "react-demo",
      "sonar.projectDescription": "react demo",
      "sonar.sourceEncoding":"UTF-8",
      "sonar.sources": "./src",
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
        "sonar.exclusions": "test/*, node_modules/*, public/*",
      "sonar.tests":"./src",
      "sonar.testExecutionReportPaths":"test-report.xml",
      "sonar.javascript.lcov.reportPaths":"coverage/lcov.info",
      "sonar.java.binaries": "**/*.java"
    },
  },
  () => process.exit()
);

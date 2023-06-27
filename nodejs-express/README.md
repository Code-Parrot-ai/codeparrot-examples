# CodeParrot Node Js Setup

This repository shows example of using CodeParrot for nodejs language with express framework. 

```
git clone https://github.com/Code-Parrot-ai/codeparrot-examples.git

cd nodejs-express
npm i
```

## Phase I: Record

Run the npm 'record' script, all requests coming to this service will be recorded.

```
npm run record
```


Close the script. You can now go to dashboard to generate unique requests on the dashboard https://dashboard.codeparrot.ai/dashboard . Select your service and click on "Regenerate Unique Requests". You would be able to see number of unique requests.




## Phase II: Replay 

Ideal way to run replay is through Github CI App, but can be run on local machine using the 'replay' script 

```
npm run replay
```


You would be able to see link of change report in the log, like 

```
Report will be available at: https://dashboard.codeparrot.ai/diff/nodejs-agent-for-internal@innate-actor-378220.iam.gserviceaccount.com/demo-calc-app/a60fbb9
```

Report might take upto a minute to generate, refresh page if needed. 
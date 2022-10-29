---
layout: meth
parent: Software Development
---

# SonarQube

## Links

Jira Board  
<https://sonarsource.atlassian.net/jira/projects>

## SonarLint - VsCode Extension

 - Main page
	- <https://www.sonarqube.org/>
- Jira board  
	- <https://sonarsource.atlassian.net/jira/software/c/projects/SLVSCODE/issues/>

## Local

See <https://docs.sonarqube.org/latest/setup/get-started-2-minutes/>

### Install

Pull docker image

```
docker pull sonarqube
```

### Run

```
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```

Open in `http://localhost:9000`

Create a project

### Scan

Download SonarScaner zip file from <https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/>

Symlink the `sonar-scanner` binary file to `/usr/local/bin/sonar/sonar-scanner` or whatever.

Run the scanner in your local project root with the commands provided in the web page. After the scan is over, your web page will be auto refreshed.

The command should be like this

```
sonar-scanner \
  -Dsonar.projectKey=<project key> \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=<token>
```

## Config file

`sonar-project.properties`

[Doc](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/)

## Test Coverage

You'll have to generate test report and specify the file path in `sonar-project.properties` for to have test coverage report in SonarQube. 

> SonarQube doesn't run your tests or generate reports. It only imports pre-generated reports. Below you'll find language- and tool-specific analysis parameters for importing coverage and execution reports.

<https://docs.sonarqube.org/8.9/analysis/coverage/>

### Go

Specify file paths in `sonar-project.properties`

```
sonar.go.tests.reportPaths=report.json
sonar.go.coverage.reportPaths=coverage.out
```

Generate go test report

```
go test -v -cover -covermode=count -coverpkg=./... -coverprofile=coverage.out ./...
go test -json ./... > report.json
```

## Terms

See <https://docs.sonarqube.org/latest/user-guide/concepts/>

### Cognitive Complexity

How readable is your code

<https://www.sonarsource.com/docs/CognitiveComplexity.pdf>

### Technical Debt

Time needed to fix everything
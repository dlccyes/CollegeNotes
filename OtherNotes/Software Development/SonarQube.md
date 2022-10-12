---
layout: meth
parent: Software Development
---

# SonarQube
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

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

## Terms

See <https://docs.sonarqube.org/latest/user-guide/concepts/>

### Cognitive Complexity

How readable is your code

<https://www.sonarsource.com/docs/CognitiveComplexity.pdf>

### Technical Debt

Time needed to fix everything
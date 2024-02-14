# Java

## Install

### Brew

```
brew install java
```

### Manual

<https://www.oracle.com/java/technologies/downloads/>

## VsCode

1. Install [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
2. command palette -> `Java: Configure Classpath`
    - specify source & output locations here so that your project can be run as you want

## Import

import local package

```java
import <absolute path to package>.<filename>
```

## Gradle

### install

```
brew install gradle
```

### setting up a Gradle project

```
gradle init
```

the directory structure should look like this

```
project-root/
├── src/
│   ├── main/
│   │   └── java/          (Java source files for main code)
│   └── test/
│       └── java/          (Java source files for tests)
├── build.gradle.kts      (Gradle build script in Kotlin DSL)
└── settings.gradle.kts   (Gradle settings script in Kotlin DSL)
```

Suppose your `Main.java` is in `src/main/java/com/example/`, your `build.gradle.kts` should look like this

```kotlin
plugins {
    java
}

tasks.jar {
    manifest {
        attributes(
            "Main-Class" to "com.example.Main" // point to your main clas
        )
    }
}

repositories {
    mavenCentral()
}
```

To build your files

```
gradle build
```

`.class` and other files would be generated in `build/`

To run your file

```
java -jar build/libs/<project name>.jar
```

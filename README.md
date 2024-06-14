# VSCode TS Intellisense Bug

<!-- ⚠️⚠️ Do Not Delete This! feature_request_template ⚠️⚠️ -->

<!-- Please read our Rules of Conduct: https://opensource.microsoft.com/codeofconduct/ -->

<!-- Please search existing issues to avoid creating duplicates. -->

<!-- Describe the feature you'd like. -->

# Enviroment

- Version of VS Code: 1.90.1
- Operating System: Windows 10
- Extensions: @builtin JS/TS support

# Reproduction

- Init a JS/TS project or use repo: https://github.com/LdoDoeg222/VSCode-ts-import-issue
  - Use repo
    - Code yourself
      1. Type to use a class/interface/type and you can see: the intellisense will support a c/i/t with correct logo.
      2. Import the c/i/t then use it, and you can see: the logo of c/i/t will change to a var logo, which infers to (alias) c/i/t Xxxx
    - Use snippet
      1. Use snippet "test" and "test2" to reproduce the bug.
  - Make an enviroment of the project by yourself, then code yourself.v (install some package, or write some class/interface/type code in a file)
    1. Type to use a class/interface/type and you can see: the intellisense will support a c/i/t with correct logo.
    2. Import the c/i/t then use it, and you can see: the logo of c/i/t will change to a var logo, which infers to (alias) c/i/t Xxxx


# What Expected

When i use a class/interface/type import, even if i use alias import (like `import type { AxiosResponse as AResp } from 'axios'`), I can see the correct logo.

This is the expected result, the logo is correct.
![expected import](./bug-report/interface-without-import.png)

This is the actual result, the logo is wrong.
![actual import](./bug-report/(alias)-interface-with-import.png)

This is the expected result, the logo is correct.
![expected import](./bug-report/local-interface-without-import.png)

This is the actual result, the logo is wrong.
![actual import](./bug-report/(alias)-local-interface-with-import.png)

What the develop tools show:
![develop tools](./bug-report/expected-logo.png)
![develop tools](./bug-report/actual-logo.png)
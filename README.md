# SSO-Instruction
Bei dieser Applikation handelt es sich um ein einfaches clientseitiges Implementierungsbeispiel von OIDC mit der Bibliothek angular-oauth2-oidc. Bei Betreten von http://localhost:4200 wird man automatisch an die Anmeldeseite von Keycloak weitergeleitet. Beim Login übernimmt angular-oauth2-oidc den Prozess, um die Tokens vom Identity Provider abzuholen. Dabei werden die Tokens im Session Storage abgelegt. In der Applikation sieht man nach erfolgreicher Anmeldung den Namen das Access Token und das ID-Token. Es gibt zwei Buttons. Mit dem Button show erfolgt eine Anfrage auf die geschützte API-Route 'http://localhost:3000/auth. Sollte eine Anfrage ohne gültigem Access Token erfolgen, wird eine Fehlermeldung zurückgegeben. Es wird eine Information zurückgegeben, dass der Nutzer angemeldet ist. Mit dem logout Button ganz unten kann sich wieder abgemeldet werden.

Ein ausführliches Beispiel zu dieser Bibliothek ist hier zu finden: https://github.com/jeroenheijmans/sample-angular-oauth2-oidc-with-auth-guards. Dieses Beispiel ist von einem der Mitwirkenden der angular-oauth2-oidc Bibliothek. Sein Name ist Jeroen Heijmans.

## Technologien
### Frontend
- Angular mit Typescript

### Backend
- NestJS

### Infrastruktur
- docker
- docker-compose

### Identity Provider
- Keycloak
- Datenbank für Keycloak ist PostgreSQL

### Verwendete NPM-Bibliotheken
- angular-oauth2-oidc
- jwks-rsa
- @nestjs/passport
- passport
- passport-jwt

### Applikation starten
1. Code klonen oder herunterladen
2. Docker starten
3. Mit einem Terminal in den Ordner SSO-Instruction navigieren und den Befehl `docker-compose up` ausführen.
4. Auf http://localhost:8080/auth navigieren und auf die Administrations Console klicken.
5. Mit dem Nutzer "admin" und dem Passwort "Pa55w0rd" anmelden.
6. Unter dem Reiter Users auf den Button `Add user` klicken.
7. Einen Usernamen eingeben und den Button `Save` klicken.
8. Mit dem Terminal in den Ordner backend navigieren und die Befehle `npm i` und `npm run start` ausführen.
9. Mit dem Terminal in den Ordner frontend navigieren und den Befehl `npm i` und `npm run start` ausführen. Bei der Frage ob der Port auf einem anderen Port freigesetzt werden soll mit Ja bestätigen.
10. Auf http://localhost:4200 navigieren und sich mit dem erstellten User und dem Passwort anmelden.

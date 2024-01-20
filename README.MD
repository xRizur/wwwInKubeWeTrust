Uruchomienie należy pobrac node moduly dla frontendu i dwoch serwisow
na linuxie wystarczy odpalic fullrun.sh zeby pobrac paczki i odpalic lub run tylko wszystko odpala
./run.sh
./fullrun.sh


cd frontend
npm install

cd backend/Users
npm install

cd backend/CustomerService
npm install

potem włączyć wszystkie serwisy
cd frontend 
npm run serve

cd backend/Users
node server.js

cd backend/CustomerService
node server.js

# Spełnienie wymagań projektowych

## 1.1 Wymagania Techniczne
### Aplikacja została napisana w technologiach:
- Vue.js 3 dla frontendu 
- TailwindCSS jako framework szablonów stylu
- Node.js oraz Express.js dla backendu aplikacji

### Routing i Middleware
- Do komunikacji pomiędzy częsciami aplikacji korzystam z middleware cors po stronie node oraz axios do połączenia ze strony frontendu
- korzystam z routingu Express.js
- Korzystam z middleware helmet do większego bezpieczeństwa aplikacji

### Obsługa Błędów:
- Każdy endpoint aplikacji składa się z try catch oraz zawsze zwraca dany http status - 200,400,501,201
## 1.2 Baza Danych
- Wybrana Baza danych to Sqlite
- Obsługa jej za pomocą biblioteki ORM Sequelize, dzięki czemu możemy używać Javascriptu zamiast bezpośrednich zapytań SQL.
- Dwie bazy dla dwóch microserviców
- Zarówna dla użytkowników jak i dla projektów,tasków są zaimplementowane są wszystkie operacje CRUD.
# Wymagania Funkcjonalne
## 2.1 Użytkownicy
- Do walidacji po stronie node użyłem modułu 'express-validator' który przed przyjęciem zapytania sprawdza wszystkie pola rejestracji i komunikuję błedy
- W walidacji po stronie vue poprostu sprawdzam pola i też zwracam błędy przed wysłaniem
- Hashowanie haseł za pomocą modułu bcrypt

## 2.2 Dodawanie, Edytowanie i Usuwanie Danych
#### Projekty
- Dodawanie Projektu: Użytkownik może utworzyć nowy projekt, wysyłając żądanie POST na endpoint /projects. Wymagane jest przekazanie nazwy projektu (name) oraz identyfikatora użytkownika (ownerId).
- Pobieranie Projektów: Użytkownik może pobrać listę swoich projektów, wysyłając żądanie GET na endpoint /projects, z identyfikatorem użytkownika jako parametrem zapytania.
- Usuwanie Projektu: Użytkownik może usunąć projekt, wysyłając żądanie DELETE.
#### Zadania
- Dodawanie Zadania: Zadanie może być dodane do projektu poprzez wysłanie żądania POST na endpoint /projects/:projectId/tasks, gdzie :projectId to identyfikator projektu. Wymagane jest przekazanie nazwy (name) i opisu zadania (description).
- Pobieranie Zadań: Lista zadań w projekcie jest dostępna poprzez wysłanie żądania GET na endpoint /projects/:projectId/tasks.
- Edycja Zadania: Zadanie może być edytowane poprzez wysłanie żądania PUT na endpoint /tasks/:taskId. Możliwa jest zmiana nazwy i opisu zadania.
- Usuwanie Zadania: Zadanie może być usunięte przez wysłanie żądania DELETE na endpoint /tasks/:taskId.
#### Użytkownicy
- Rejestracja: Nowi użytkownicy mogą się rejestrować poprzez endpoint /register, podając swoje dane (imię, nazwisko, email, itp.). dane są walidowane po stronie strony jak i serwera.
- Logowanie: Użytkownicy logują się poprzez endpoint /login, gdzie podają email i hasło.
- Aktualizacja Danych Użytkownika: Użytkownicy mogą aktualizować swoje dane, w tym hasło, poprzez endpoint /api/user i podstrone UserProfile.

## 2.4 Przejrzystosc i Intuicyjnosc Projektu
- Strona jest w pełni responsywna dzięki możliwością tailwinda i ustawiania ilości rzeczy w rzędzie zależne od szerokości urządzenia
- Projekt jest w jednostajnej kolorystyce biało fioletowej
- W projekcie zwracane są błędy kiedy mamy jakis formularz etc.
- Strona jest łatwa w obsłudze dzięki standardowemu navbarowi oraz stopce

# Troche o projekcie
Początkowo miała być to strona związana z moją pracą i też pomysłem który miałem, jednak po zaczęciu i stworzeniu większości strony okazało się że potrzebuję poprostu statycznej strony i tak naprawdę backend jest dosyć wymyślny.

Strona składa się z 8 podstron, zawiera różne animacje jak na stronie głównej, hover powiększający modal czy counter dla statystyk. Również po najechaniu na każdy przycisk na stronie mamy lekką zmiane koloru.

Główna część strony to dwa servicy: jeden to obsługa użytkowników oraz drugi to obsługa projektów i zadań do tych projektów które również są specyficzne dla każdego użytkownika, więc obydwa servicy są ze sobą połączone i project odpytuje z id user service.

Projekt został tak podzielony na foldery, że widać bardzo dobrze wszystkie podstrony i ich strukturę orak komponenty, każda podstrona jest w swoim folderze oprócz logowania które jest razem z rejestracją.

W tworzeniu użytkowników zaimplementowałem walidację, należy uzupełnić pola oraz hasło musi mieć przynajmniej 8 znaków.

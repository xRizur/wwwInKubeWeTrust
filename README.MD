Uruchomienie należy pobrac node moduly dla frontendu i dwoch serwisow
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

Spełnienie wymagań projektowych

# 1.1 Wymagania Techniczne
Aplikacja została napisana w technologiach:
- Vue.js 3 dla frontendu 
- TailwindCSS jako framework szablonów stylu
- Node.js oraz Express.js dla backendu aplikacji

Routing i Middleware
- Do komunikacji pomiędzy częsciami aplikacji korzystam z middleware cors po stronie node oraz axios do połączenia ze strony frontendu
- korzystam z routingu Express.js
- Korzystam z middleware helmet do większego bezpieczeństwa aplikacji

Obsługa Błędów:
- Każdy endpoint aplikacji składa się z try catch oraz zawsze zwraca dany http status - 200,400,501,201
# 1.2 Baza Danych
- Wybrana Baza danych to Sqlite
- Obsługa jej za pomocą biblioteki ORM Sequelize, dzięki czemu możemy używać Javascriptu zamiast bezpośrednich zapytań SQL.
- Dwie bazy dla dwóch microserviców
- Zarówna dla użytkowników jak i dla projektów,tasków są zaimplementowane są wszystkie operacje CRUD.
# Wymagania Funkcjonalne
2.1 Użytkownicy
- Do walidacji po stronie node użyłem modułu 'express-validator' który przed przyjęciem zapytania sprawdza wszystkie pola rejestracji i komunikuję błedy
- W walidacji po stronie vue poprostu sprawdzam pola i też zwracam błędy przed wysłaniem
- Hashowanie haseł za pomocą modułu bcrypt

2.2 Dodawanie, Edytowanie i Usuwanie Danych

# Troche o projekcie
Początkowo miała być to strona związana z moją pracą i też pomysłem który miałem, jednak po zaczęciu i stworzeniu większości strony okazało się że potrzebuję poprostu statycznej strony i tak naprawdę backend jest dosyć wymyślny.

Strona składa się z 8 podstron, zawiera różne animacje jak na stronie głównej, hover powiększający modal czy counter dla statystyk. Również po najechaniu na każdy przycisk na stronie mamy lekką zmiane koloru.

Główna część strony to dwa servicy: jeden to obsługa użytkowników oraz drugi to obsługa projektów i zadań do tych projektów które również są specyficzne dla każdego użytkownika, więc obydwa servicy są ze sobą połączone i project odpytuje z id user service.


Spełnienie wymagań projektowych

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

# Wymagania Funkcjonalne
2.1 Użytkownicy
- Do walidacji po stronie node użyłem modułu 'express-validator' który przed przyjęciem zapytania sprawdza wszystkie pola rejestracji i komunikuję błedy
- W walidacji po stronie vue poprostu sprawdzam pola i też zwracam błędy przed wysłaniem
- Hashowanie haseł za pomocą modułu bcrypt

2.2 Dodawanie, Edytowanie i Usuwanie Danych

[![Simple CI](https://github.com/pbobinsk/ci-cd-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/pbobinsk/ci-cd-starter/actions/workflows/ci.yml)

[![Build and Publish Docker Image](https://github.com/pbobinsk/ci-cd-starter/actions/workflows/cd.yml/badge.svg)](https://github.com/pbobinsk/ci-cd-starter/actions/workflows/cd.yml)

[![E2E Smoke Test (Docker Compose)](https://github.com/pbobinsk/ci-cd-starter/actions/workflows/e2e-smoke-test.yml/badge.svg)](https://github.com/pbobinsk/ci-cd-starter/actions/workflows/e2e-smoke-test.yml)

# ci-cd-starter
CI/CD hello world

Bardzo prosty workflow DevOps.

Terminologia w DevOps jest dość sztywna. 
Standardowe pojęcia.

1.  **`ci.yml` (npm test)** -> **CI (Continuous Integration)**
    *   **To jest Integracja.**
    *   Sprawdza, czy wypchnięty kod ("zintegrowany" z repozytorium) działa. 
    *   Uruchamia testy jednostkowe.

2.  **`cd.yml` (docker build & push)** -> **CD (Continuous Delivery)**
    *    ** To jest Delivery (Dostarczanie)**. 
    *    Dostarcza gotową paczkę (obraz Dockera) do magazynu (GHCR). 
    *   Aplikacja jest gotowa do wzięcia, ale jeszcze nie działa u klienta.

3.  **`e2e-smoke-test.yml` (docker run & curl)** -> **CD (Continuous Deployment / Verification)**
    *   **To jest Weryfikacja Wdrożenia**.
    *   Ten krok symuluje moment, w którym aplikacja wstaje na serwerze i sprawdzamy, czy "dym leci z komina" (Smoke Test). 
    *   W pełnym procesie ten krok często następuje po automatycznym wdrożeniu na produkcję (Deployment).

**Podsumowując:**

*   **`ci.yml`**: "Czy kod jest poprawny?" (Testy)
*   **`cd.yml`**: "Zapakuj to w pudełko i wyślij do magazynu." (Budowanie obrazu)
*   **`e2e-smoke-test.yml`**: "Włącz to i sprawdź, czy działa." (Weryfikacja/Wdrożenie)

#   Rozszerzone Funkcjonalności CI/CD 

W ramach rozbudowy potoku CI/CD, do projektu zostały dodane zaawansowane mechanizmy automatyzacji i bezpieczeństwa:
1. Optymalizacja Czasu Budowania (Caching)
Cel: Przyspieszenie procesu CI poprzez uniknięcie ponownego pobierania tych samych bibliotek przy każdym uruchomieniu.
Realizacja: Konfiguracja akcji setup-node z parametrem cache: 'npm'. GitHub Actions przechowuje folder node_modules (lub cache npm) między uruchomieniami, dopóki plik package-lock.json się nie zmieni.
2. Ręczne Sterowanie (Workflow Dispatch)
Cel: Umożliwienie uruchomienia procesu wdrażania (CD) lub testów na żądanie, bez konieczności wypychania nowego kodu (np. w przypadku awarii zewnętrznego serwisu lub potrzeby ponownego wdrożenia).
Realizacja: Dodanie wyzwalacza workflow_dispatch: do plików YAML. W interfejsie GitHub Actions pojawia się przycisk "Run workflow".
3. DevSecOps: Skanowanie Podatności (Trivy)
Cel: Automatyczne wykrywanie luk bezpieczeństwa (CVE) w budowanym obrazie Docker oraz w zależnościach systemowych, zanim trafią one na produkcję.
Realizacja: Integracja narzędzia Trivy (Aqua Security) w potoku CD. Skaner analizuje warstwy obrazu i generuje raport bezpieczeństwa widoczny w logach GitHuba.
4. Wizualizacja Stanu (Status Badges)
Cel: Szybka informacja o stanie projektu widoczna bezpośrednio w dokumentacji.
Realizacja: Dodanie dynamicznych "odznak" (badges) na górze pliku README, które w czasie rzeczywistym pokazują, czy ostatni build zakończył się sukcesem (passing) czy porażką (failing).

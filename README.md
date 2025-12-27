# ci-cd-starter
CI/CD hello world

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
# Music Playlist App

## Beskrivning

Jag har skapat en enkel webbapplikation i JavaScript där man kan skapa och visa spellistor.
Musiken organiseras enligt **Genre → Artist → Låt**.

Syftet med uppgiften var främst att träna på Git-arbetssätt och projektstruktur design.

---

## JavaScript

Applikationen är byggd med vanlig JavaScript.
Jag använder DOM-manipulation för att lägga till och visa spellistor dynamiskt på sidan.

Användarens klick fångas med event listeners och informationen sparas i programmets data innan sidan uppdateras igen.
Detta gjorde att jag fick bättre förståelse för hur JavaScript fungerar tillsammans med HTML.

---

## Struktur (MVC)

Projektet är uppdelat enligt MVC:

* **Model** hanterar data (spellistor och låtar)
* **View** visar innehållet på sidan
* **Controller** kopplar användarens handlingar till systemet

Detta gör koden mer organiserad och lättare att förstå.

---

## Git och branches

Jag använde tre grenar:

* `main` – stabil version
* `development` – samlad utveckling
* `features` – där nya funktioner utvecklades

Arbetsflöde:
`features → development → main`

Jag arbetade bara i *features* och slog sedan ihop ändringarna stegvis.

---

## Konflikter

När Git upptäckte konflikt visades markeringar i filen.
Jag valde rätt kod, tog bort markeringarna och körde:

```
git add .
git commit
git push
```

---

## Sammanfattning

Uppgiften hjälpte mig förstå hur branches, merge och konflikter fungerar i praktiken samt hur man strukturerar kod med MVC och använder JavaScript för att uppdatera innehåll på sidan.

Student: Abraham Tadesse
Kurs: Arbetsmetodik för utvecklare

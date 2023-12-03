# Check Point 1 - UF1 i UF2 - Fonaments de JS, funcions i arrays.

## :warning: **ATENCIÓ!** No creeïs cap arxiu nou i treballa als arxius ja creats amb els noms Ex1, Ex2 and Ex3 sota la carpeta /src i fes un commit per cada exercici! Verifica els testos per acabar d'entendre el que es demana i verificar que el resultat és l'esperat :warning:

### Notes importants generals
- Es valorarà que el codi sigui net, ordenat i òptim d'acord amb el que s'ha vist a classe. No és suficient que el codi funcioni per obtenir la nota màxima:
    - 0p: Codi no funciona o no s'ha implementat la funció.
    - 1/3p: Codi NO-funcional però net, ordenat i òptim fins a un cert punt ("errada tonta").
    - 2/3p: Codi funcional però no és net, ordenat i òptim. 
    - 1p: Codi funcional i net, ordenat i òptim.
- Es valorarà que el codi estigui comentat.
- Utilitzeu noms significatius per a les variables i funcions per millorar la llegibilitat del codi.

### :weight_lifting_man: Exercici 1 - Finances Cirvianum (2punts)

**Exercici de Finances per l'Institut Cirvianum**

En aquest exercici, heu de desenvolupar un sistema de gestió de finances per a l'Institut Cirvianum. Les dades proporcionades són fictícies, però estan orientades al context d'un institut. Les funcions a implementar són de diversa complexitat i estan dissenyades per ser resoltes de manera incremental, és a dir, en l'ordre en què apareixen a l'enunciat.


**Notes Exercici:**
- Cada funció ha de ser implementada en ordre, ja que les funcions posteriors podrien dependre de les anteriors i es valorarà que ho feu d'aquesta manera.
- Podeu fer servir i es valora l'ús d'objectes i mètodes predefinits del llenguatge per facilitar algunes operacions (mètodes de `Math`, `Object`, `String`, etc...).

1. **Ingressos de l'Institut:**
   - Declareu un objecte `institutCirvianum` que contingui els ingressos de l'institut. Aquest objecte ha de tenir propietats com `subvencions`, `matricules` i `altres`.
   
2. **Despeses Fixes de l'Institut:**
   - Declareu un objecte `despesesFixes` que contingui les despeses fixes de l'institut. Aquest objecte ha de tenir propietats com `salaris`, `serveis` i `materialDidactic`.

3. **Despeses Variables de l'Institut:**
   - Declareu un array `despesesVariables` que contingui diverses despeses variables de l'institut. Cada despesa ha de tenir un `concepte` i una `quantitat`.

4. **Funció per Calcular Ingressos Total:**
   - Implementeu una funció que, donat l'objecte `institutCirvianum`, retorni la suma total dels ingressos.

5. **Funció per Calcular Despesa Fixa Total:**
   - Implementeu una funció que, donat l'objecte `despesesFixes`, retorni la suma total de les despeses fixes.

6. **Funció per Calcular Despesa Variable Total:**
   - Implementeu una funció que, donat l'array `despesesVariables`, retorni la suma total de les despeses variables.

7. **Funció per Calcular Despesa Total:**
   - Implementeu una funció que, fent ús de les funcions anteriors, retorni la suma total de totes les despeses (fixes i variables) de l'institut.

8. **Funció per Calcular Superàvit:**
   - Implementeu una funció que, fent ús de les funcions de càlcul d'ingressos i despeses totals, retorni la diferència entre els ingressos i les despeses.

9. **Funció per Informar l'Estat Financer:**
   - Implementeu una funció que, fent ús de la funció de càlcul del superàvit, mostri un missatge a la consola indicant si hi ha superàvit o dèficit.

10. **Funció per Afegir Despesa Variable:**
    - Implementeu una funció que permeti afegir una nova despesa variable a l'array `despesesVariables`. Aquesta funció ha de rebre els paràmetres necessaris (concepte i quantitat).

11. **Funció per Eliminar Despesa Variable:**
    - Implementeu una funció que permeti eliminar una despesa variable de l'array `despesesVariables`. Aquesta funció ha de rebre el concepte de la despesa a eliminar.

### :fire: Exercici 2 - Week Planner (2punts)

En aquest exercici, crearàs un petit planificador d'activitats. L'objectiu és calcular si tens temps suficient per realitzar les activitats diàries que tens planejades. El programa calcularà el temps disponible a partir de les teves hores de son, el temps que passes treballant i altres compromisos.

Per practicar-ho, et facilitem les dades amb les que hauràs de provar el teu programa. Aquestes dades són les següents i ja les tens disponibles al mateix arxiu:

```javascript
const sleepHours = {
    monday: 7,
    tuesday: 6,
    wednesday: 8,
    thursday: 7,
    friday: 6,
    saturday: 9,
    sunday: 8,
    idealHoursDay: 8
};

const workHours = 8;

const activities = [
    { name: 'Gym', time: 1 },
    { name: 'Party', time: 2 },
    { name: 'Watch TV', time: 3 }
    { name: 'Play videogames', time: 5 }
];
```

A continuació hauràs d'implementar les següents funcions (cada funció ha de retornar el valor que s'indica):

- `getSleepHours(day)`: Retorna les hores de son d'un dia específic.
- `getActualSleepHours()`: Retorna el total d'hores reals de son que has dormit la setmana passada.
- `getIdealSleepHours()`: Retorna el total d'hores ideals de son que prefereixes dormir la setmana
- `getFreeTimeHours()`: Retorna les hores lliures disponibles a la setmana després de descomptar les hores de son i de treball.
- `calculateActivitiesTime(activities)`: Permet als usuaris especificar les activitats que volen realitzar (teniu la mostra) i retorna el temps necessari TOTAL per completar-les.
- `canDoActivities(activities)`: ha de cridar `calculateActivitiesTime(activities)` i comprovar si hi ha prou temps lliure per realitzar totes les activitats. Mostra un missatge a la consola segons la situació: si es poden fer totes les activitats o si no hi ha prou temps lliure.

**Puntuació: cada funció té el mateix pes, 2/6 = 1/3p**

### :rocket: Exercici 3 - Databases (2,5punts)

L'exercici 3 té importada una base de dades en format JSON i ja passades a un arxiu js. Pots veure les dades a l'arxiu data_ex3.js

Hauràs de realitzar les següents tasques. T'aconsello que pensis bé en cada cas quin mètode de l'array és el més adequat per resoldre cada cas:

1. Retornar un array amb tots els usuaris que tenen el hobbie "running" (0,5p).
2. Calcular i retornar la mitjana d'edat (numero arrodonit a l'enter més petit) de les amistats de l'usuari en funció de l'id que li passem (1p).
3. Retornar un array amb els hobbies que comparteixen l'usuari i les seves amistats si existeixen (1p).

Puntuació: només comptarà si funciona la funció i es fan servir mètodes d'arrays.

:speech_balloon: **Hi ha 0,5p extra. 4p del test + 6,5p (10,5p) totals que es poden aconseguir i poden ajudar a pujar nota. La nota màxima final haurà de ser <= 10 en qualssevol cas.**

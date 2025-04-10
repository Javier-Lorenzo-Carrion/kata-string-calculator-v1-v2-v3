# Template TypeScript
## Diseño Sostenible - Ingeniería y Artesanía del Software con TypeScript
![Diseño Sostenible](coverds.png)

Plantilla base para practicar las katas del curso o para empezar un proyecto nuevo.

Incluye:
* TypeScript
* Jest
* ESLint
* Prettier
* Husky

## Instrucciones
* `nvm use`
* `npm install`
* `npm test`

Más información sobre el curso en [diseñosostenible.com](https://diseñosostenible.com).

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test

# Requisitos de la kata
Implementar una función que realice la suma de los caracteres que recibe como parámetros.

* En el caso de recibir null o una cadena vacía devolverá cero
* Para un numero en formato string lo convierte a un tipo numerico.
* Para varios numeros separados por comas debe sumarlos
* Los elementos no numericos no afectan al valor total
* La funcion debe admitir separadores personalizados
* Suma todos los numeros separados por un separador personalizado
* Puede existir otro separador personalizado que vendrá definido por una doble barra inclinada seguida del simbolo que actue como separador y luego una barra inclinada para cerrar la expresion de separación seguida de los numeros con o sin separadores.

Ejemplos:

* null -> 0
* "" -> 0
* "1" -> 1
* "1,2" -> 3
* "a" -> 0
* "1,a" -> 1
* "1,a,2" -> 3
* "1a, 2" -> 2
# Guía para agentes

## Propósito del proyecto

Este repositorio contiene un sitio web moderno sobre apicultura en El Salvador
y la importancia de las abejas para la biodiversidad y la seguridad
alimentaria. Presenta la apicultura responsable y la educación ambiental como
formas de comprender, valorar y cuidar a los polinizadores y sus ecosistemas.
Prioriza claridad, accesibilidad, diseño adaptable y SEO local.

## Público y tono

El contenido debe ser accesible para personas de todas las edades, incluyendo
estudiantes, familias, comunidades, agricultores y productores. Mantén un tono
claro, educativo, inclusivo e inspirador, sin alarmismo ni culpabilización.

Cuando sea pertinente, promueve la conservación de las abejas y sus hábitats,
la educación ambiental responsable, la siembra de plantas que beneficien a los
polinizadores y una apicultura local respetuosa con su bienestar. Las
recomendaciones deben ser prácticas y seguras para el público al que se
dirigen.

## Stack y estructura

El sitio usa Vite, React y TypeScript. Si el stack cambia, actualiza esta guía
para reflejar la configuración real.

```text
index.html
src/
  App.tsx
  main.tsx
  styles.css
```

## Principios de implementación

- Prefiere código frontend mantenible, componentes pequeños y dependencias
  necesarias.
- Usa HTML semántico, interacciones accesibles y diseño mobile-first.
- Usa TypeScript para la lógica y las props de componentes; PascalCase para
  componentes y camelCase para variables y funciones.
- Reutiliza datos en lugar de duplicar textos y usa texto alternativo
  descriptivo en las imágenes.
- Mantén el contenido del negocio, servicios y datos de contacto centralizado
  cuando sea posible.
- No agregues backend ni base de datos salvo que los requisitos lo pidan.

## Contenido y experiencia de usuario

- Mantén una presentación profesional y acogedora, con contenido bien
  estructurado, legible y fácil de editar.
- Incluye llamadas a la acción y vías claras de contacto cuando sean
  pertinentes.
- Cuida el contraste, la jerarquía visual, la adaptación a móvil y escritorio
  y la navegación por teclado.
- No inventes datos, estadísticas, especies, ubicaciones, alianzas, campañas,
  resultados ni afirmaciones científicas. Verifica los datos concretos con
  fuentes confiables y atribúyelos.
- No presentes recomendaciones generales como asesoría médica, legal,
  agrícola o de seguridad especializada. Evita promesas absolutas y prácticas
  riesgosas para las personas, las abejas u otros polinizadores.

## Reglas de trabajo

- Lee el `README.md` y los archivos relevantes antes de modificarlos.
- Limita cada cambio al objetivo solicitado y evita cambios accidentales fuera
  de alcance.
- Revisa el diff completo antes de terminar.

## Comandos y validación

Ejecuta estos comandos desde la raíz del proyecto:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Antes de terminar, comprueba que el build pase, que el Markdown sea legible y
que `git diff --check` no reporte errores de formato. No afirmes haber
ejecutado validaciones que no se hayan podido realizar.

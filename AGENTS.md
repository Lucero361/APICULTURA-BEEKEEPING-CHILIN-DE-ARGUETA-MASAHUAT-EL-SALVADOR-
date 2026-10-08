# AGENTS.md

## Objetivo del proyecto
Este repositorio está pensado como un sitio web moderno para un negocio o proyecto apícola en El Salvador. El proyecto debe priorizar claridad, capacidad de respuesta, accesibilidad y SEO local.

## Stack del proyecto
El sitio usa la siguiente configuración de frontend:
- Vite
- React
- TypeScript

Si el stack cambia más adelante, actualiza este archivo para que refleje la configuración real.

## Principios
- Preferir código frontend limpio y mantenible antes que complejidad innecesaria.
- Mantener los componentes pequeños y reutilizables.
- Usar HTML semántico e interacciones accesibles.
- Diseñar el sitio mobile-first y rápido.
- Mantener el contenido bien estructurado y fácil de editar.
- Evitar dependencias innecesarias.

## Estructura sugerida del proyecto
```text
index.html
src/
  App.tsx
  main.tsx
  styles.css
```

## Convenciones de codificación
- Usar TypeScript para la lógica y las props de los componentes.
- Nombrar archivos y componentes en PascalCase para componentes React.
- Usar camelCase para variables y funciones.
- Preferir objetos reutilizables de datos antes que textos duplicados.
- Usar texto alternativo descriptivo para imágenes.
- Mantener contenido del negocio, servicios y datos de contacto en archivos centralizados cuando sea posible.

## Expectativas de UI y contenido
- El sitio debe sentirse profesional y acogedor.
- Usar secciones como: Inicio, Acerca de, Servicios, Productos, Galería, Contacto, Preguntas frecuentes y Pie de página.
- Incluir llamadas a la acción y una ruta clara de contacto para generar leads.
- Respetar contraste de color y legibilidad.
- Asegurar que formularios y botones sean accesibles por teclado.

## Comandos
Usar los siguientes comandos en la raíz del proyecto:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Nivel de calidad antes de terminar el trabajo
- Sin build roto.
- Sin errores en la consola del navegador.
- Responsivo en móvil y escritorio.
- Jerarquía visual clara y contenido legible.
- Interacciones y formularios accesibles.
- Estilo limpio y minimalista.

## Notas para agentes futuros
Este repositorio es un proyecto web y debe mantenerse enfocado en la experiencia del usuario. No agregar complejidad de backend o base de datos a menos que los requisitos del proyecto cambien explícitamente.

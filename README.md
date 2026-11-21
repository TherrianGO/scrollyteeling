# Todo cambia · Transformación digital

Scrollytelling académico del ejercicio 2 de Visualización y comunicación de datos. Presenta el concepto general de transformación digital en seis escenas. No se centra en una empresa.

## Abrir en VS Code

Abre esta carpeta completa mediante Archivo > Abrir carpeta. En la terminal:

```powershell
npm run dev
```

Visita http://localhost:4173. No necesitas instalar dependencias. Requiere Node.js 20 o posterior. También puedes abrir `index.html` directamente; para una experiencia consistente se recomienda el servidor local.

## Estructura

- `index.html`: historia, ejemplos y fuentes.
- `styles.css`: diseño adaptable, ilustraciones y movimiento reducido.
- `app.js`: cambio de escenas al desplazarse, navegación y reflexión local.
- `assets/`: recursos locales.
- `scripts/`: servidor, comprobaciones y construcción.
- `.github/workflows/pages.yml`: publicación automática en GitHub Pages.
- `.openai/hosting.json`: identidad del primer despliegue en Sites; no contiene credenciales.

## Validar y construir

```powershell
npm run check
npm run build
```

La versión publicable queda en `dist/`. Los recursos usan rutas relativas para funcionar también bajo el nombre de un repositorio en GitHub Pages. No hay dependencias, analítica ni servicios externos necesarios para visualizar el contenido.

## Estado de la primera versión

Proyecto local creado, comprobaciones de código y construcción completadas. El primer intento de sincronización para el despliegue quedó bloqueado por resolución DNS del servidor remoto. No hay todavía una publicación confirmada. La prueba visual en navegador tampoco pudo ejecutarse en este entorno: comprueba la página con `npm run dev` en tu equipo.

## Llevar a tu GitHub

El repositorio local puede tener un remoto `origin` para el primer despliegue de Sites. Conserva ese remoto y añade tu repositorio de GitHub con otro nombre.

1. Crea un repositorio vacío llamado `scrollyteeling` en tu cuenta `TherrianGO` (sin README inicial).
2. Ejecuta desde esta carpeta:

```powershell
git remote add github https://github.com/TherrianGO/scrollyteeling.git
git push -u github main
```

3. Para publicar allí: GitHub > repositorio > Settings > Pages > Build and deployment > Source > GitHub Actions.
4. Ejecuta el flujo **Publicar en GitHub Pages** desde Actions si el primer push ocurrió antes de configurar Pages. Los siguientes push a main ejecutarán el despliegue.

Si aún no hay un commit local, usa `git add .` y `git commit -m "Primera versión del scrollytelling"` antes del push. Autentícate con tu propia cuenta mediante el gestor de credenciales de Git o VS Code. No escribas tokens en archivos.

## Narrativa y alcance

1. Procesos manuales y fricciones.
2. Conversión de información a formato digital.
3. Conexión de procesos y equipos.
4. Decisiones apoyadas en datos.
5. Rediseño de servicios y experiencia.
6. Aprendizaje continuo, IA y criterio humano.

Las escenas representan un recorrido didáctico, no una cronología universal ni un modelo obligatorio de madurez. Los ejemplos, interfaces y barras son conceptuales, sin datos estadísticos ni beneficios medidos. La reflexión final se guarda solo en localStorage del navegador y no se envía a servidores.

## Fuentes

- OCDE (2019), *Going Digital: Shaping Policies, Improving Lives*, capítulo Understanding digital transformation: https://www.oecd.org/en/publications/going-digital-shaping-policies-improving-lives_9789264312012-en/full-report/component-6.html
- OIT/Cinterfor, *Digitalization and digital transformation*: https://www.oitcinterfor.org/en/digitalizaci%C3%B3n/digitalization-and-digital-transformation
- NIST (2023), *AI Risk Management Framework*: https://www.nist.gov/itl/ai-risk-management-framework
- Configuración de GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Ilustraciones originales hechas con CSS y SVG. Sin fotografías ni marcas de terceros. Versión 1.0.0.

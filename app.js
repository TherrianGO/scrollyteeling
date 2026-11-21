const steps = [...document.querySelectorAll('.step')];
const scenes = [...document.querySelectorAll('.scene')];
const chapterLinks = [...document.querySelectorAll('.chapter-nav a')];
const labels = ['EL PUNTO DE PARTIDA', 'DIGITALIZAR LA INFORMACIÓN', 'CONECTAR LOS PROCESOS', 'DECIDIR CON DATOS', 'REDISEÑAR LA EXPERIENCIA', 'APRENDER Y EVOLUCIONAR'];
const captions = ['El trabajo avanza al ritmo de los papeles.', 'Cambia el formato. El proceso puede seguir igual.', 'Una información compartida, un trabajo coordinado.', 'Los datos ayudan a encontrar mejores preguntas.', 'La experiencia de las personas guía el servicio.', 'La tecnología avanza. Las personas dan dirección.'];
let activeScene = -1;
function setScene(index) {
  if (index === activeScene) return;
  activeScene = index;
  steps.forEach((step, i) => step.classList.toggle('is-active', i === index));
  scenes.forEach((scene, i) => {
    scene.classList.toggle('active', i === index);
    scene.setAttribute('aria-hidden', String(i !== index));
  });
  chapterLinks.forEach((link, i) => {
    if (i === index) link.setAttribute('aria-current', 'step');
    else link.removeAttribute('aria-current');
  });
  document.querySelector('#scene-label').textContent = labels[index];
  document.querySelector('#scene-caption').textContent = captions[index];
  document.querySelector('#scene-number').textContent = String(index + 1).padStart(2, '0');
  document.querySelector('#chapter-count').textContent = `${String(index + 1).padStart(2, '0')} / 06`;
}
let scheduled = false;
function updateStory() {
  scheduled = false;
  const target = window.innerHeight * (window.innerWidth <= 760 ? 0.48 : 0.5);
  let nearest = 0;
  let smallestDistance = Infinity;
  steps.forEach((step, i) => {
    const rect = step.getBoundingClientRect();
    const distance = target < rect.top ? rect.top - target : target > rect.bottom ? target - rect.bottom : 0;
    if (distance < smallestDistance) { smallestDistance = distance; nearest = i; }
  });
  setScene(nearest);
  const story = document.querySelector('.story-shell');
  const rect = story.getBoundingClientRect();
  const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight)));
  document.querySelector('#story-progress').style.width = `${progress * 100}%`;
}
function scheduleUpdate() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateStory); }
}
window.addEventListener('scroll', scheduleUpdate, { passive: true });
window.addEventListener('resize', scheduleUpdate);
window.addEventListener('pageshow', scheduleUpdate);
updateStory();
// La reflexión es opcional y permanece en el navegador del visitante.
const ideaInput = document.querySelector('#reflection');
const ideaStatus = document.querySelector('#reflection-note');
const ideaKey = 'todo-cambia-reflexion-v1';
try { ideaInput.value = localStorage.getItem(ideaKey) || ''; } catch { /* La lectura de la página no depende de localStorage. */ }
document.querySelector('#save-reflection').addEventListener('click', () => {
  const idea = ideaInput.value.trim();
  if (!idea) { ideaStatus.textContent = 'Escribe una idea antes de guardarla.'; ideaInput.focus(); return; }
  try {
    localStorage.setItem(ideaKey, idea);
    ideaStatus.textContent = 'Idea guardada en este navegador. Puedes editarla y volver a guardarla.';
  } catch {
    ideaStatus.textContent = 'Este navegador no permite guardarla. Puedes copiar tu idea para conservarla.';
  }
});

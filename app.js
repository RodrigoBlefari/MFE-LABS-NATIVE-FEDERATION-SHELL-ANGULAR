/**
 * Bootstrap do Shell (placeholder)
 * Este arquivo existe para viabilizar o build/deploy.
 * TODO: Implementar lógica de montagem dos MFEs, BUS, métricas etc.
 */
console.log('Shell: app.js carregado');

document.addEventListener('DOMContentLoaded', () => {
  // Ação de scroll para o painel de controles
  const scrollBtn = document.getElementById('btn-scroll-controls');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      const panel = document.getElementById('control-panel');
      if (panel) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Abrir modal de documentação (placeholder)
  const docButtons = document.querySelectorAll('[data-doc-overview]');
  docButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const backdrop = document.getElementById('modal-backdrop');
      const title = document.getElementById('modal-title');
      const content = document.getElementById('modal-content');
      if (backdrop) backdrop.hidden = false;
      if (title) title.textContent = 'Visão geral (placeholder)';
      if (content) content.textContent = 'Conteúdo de documentação do experimento (placeholder).';
    });
  });

  // Fechar modal
  const closeBtn = document.querySelector('[data-close-modal]');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const backdrop = document.getElementById('modal-backdrop');
      if (backdrop) backdrop.hidden = true;
    });
  }
});

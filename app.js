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

  // Render MFE Angular Full dinamicamente com base na ENV
  (async () => {
    try {
      const outlet = document.getElementById('primary-outlet');
      const baseUrl =
        (window.ENV && window.ENV.NG_FULL_BASE_URL) ? window.ENV.NG_FULL_BASE_URL : 'http://localhost:9400/';
      const mod = await import(/* @vite-ignore */ `${baseUrl}mfe-ng-full.js`);
      const ctx = await mod.render(outlet, { baseUrl });
      // opcional: expor para debug (e eventual desmontagem manual)
      window.__mfe_ng_full_ctx = ctx;
    } catch (err) {
      console.error('Falha ao carregar MFE Angular Full:', err);
      const errEl = document.getElementById('page-preview-error');
      if (errEl) {
        errEl.textContent = 'Erro ao carregar MFE Angular Full. Verifique NG_FULL_BASE_URL e CORS (headers no MFE).';
      }
    }
  })();
});

const tabs = Array.from(document.querySelectorAll('.profile-tab'));
const panels = Array.from(document.querySelectorAll('.profile-panel'));

const setActiveTab = (tabName) => {
  tabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.tab === tabName);
  });

  panels.forEach((panel) => {
    panel.classList.toggle('is-active', panel.dataset.panel === tabName);
  });
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => setActiveTab(tab.dataset.tab));
});

setActiveTab('details');
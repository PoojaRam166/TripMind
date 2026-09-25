const fs = require('fs');

let content = fs.readFileSync('src/pages/SettingsPage.jsx', 'utf8');
content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: '250px 1fr'/g, '<div className="settings-layout-grid" style={{ display: \\'grid\\', gridTemplateColumns: \\'250px 1fr\\'');
content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr'/g, '<div className="settings-form-grid" style={{ display: \\'grid\\', gridTemplateColumns: \\'1fr 1fr\\'');
fs.writeFileSync('src/pages/SettingsPage.jsx', content);

let budget = fs.readFileSync('src/pages/BudgetTrackerPage.jsx', 'utf8');
budget = budget.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: 'repeat\\(3, 1fr\\)'/g, '<div className="budget-summary-grid" style={{ display: \\'grid\\', gridTemplateColumns: \\'repeat(3, 1fr)\\'');
budget = budget.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: '2fr 1fr'/g, '<div className="budget-main-grid" style={{ display: \\'grid\\', gridTemplateColumns: \\'2fr 1fr\\'');
budget = budget.replace(/<div(.*?)style=\{\{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr'/g, '<div$1className="budget-table-grid" style={{ display: \\'grid\\', gridTemplateColumns: \\'2fr 1fr 1fr 1fr\\'');
fs.writeFileSync('src/pages/BudgetTrackerPage.jsx', budget);

console.log('Fixed grids');

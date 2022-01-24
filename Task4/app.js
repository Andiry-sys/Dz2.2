let item_tab = ['Название аудитории', 'Количество мест', 'Название факультета'];
let item_aud = [231, 241, 271];
let num_seats = [10, 14, 20];
let item_fack = ['Web', 'Programming', 'Kids'];
let html = '';
html += '<thead>';
html += '<tr>';
for (let i = 0; i < item_tab.length; i++) {
  html += '<th scope="col">' + item_tab[i] + '</th>';
}
html += '</tr>';
html += '</thead>';

window.onload = function () {
  document.getElementById('tab').innerHTML = html;
};

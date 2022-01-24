let _ArraCss = [
  {
    'font-size': '25px',
    color: 'red',
    'font-family': 'Arial',
    'text-decoration': 'underline',
  },
  {
    'font-size': '50px',
    color: 'green',
    'font-family': 'Arial',
    'text-decoration': 'underline',
  },
];

function applyInlineStyles(obj) {
  let result = '';
  for (let i = 0; i < obj.length; i++) {
    Object.keys(obj[i]).forEach(function (prop) {
      result += prop + ': ' + obj[i][prop] + '; ';
    });
    document.writeln(`<p style = "${result}">Hello World</p>`);
  }
}

applyInlineStyles(_ArraCss);

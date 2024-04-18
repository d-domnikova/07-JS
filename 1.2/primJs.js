a = "background-color: # 00ffff; color: # ff00ff;"
a += "font-size: 24pt; font-family: 'Times New Roman'; text-align: center"
line = 'Мережа магазинів "Все для будинку"'
var date = new Date()
d = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
document.write ('<p style = "'+ a +'">' + line + '</p> <p> Сьогодні: ' + d + '</p>')

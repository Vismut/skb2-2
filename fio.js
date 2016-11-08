var express = require('express'); 
var app = express();

function fioHandler(fio){
	fioSplit = fio.split(' ');
	
	const fioResult = fioSplit[2]+' '+fioSplit[0][0]+'. '+fioSplit[1][0]+'.';
	
	return fioResult;
}

app.get('/fio', function (req, res){
	const outputFio = fioHandler('Иван Олегович Петров');
	res.send('Иван Олегович Петров = '+outputFio);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
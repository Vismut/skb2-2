var express = require('express'); 
var app = express();

function fioHandler(fio){
	fioSplit = fio.split(' ');
	
	const fioSplitLength = fioSplit.length;
	
	if(fioSplitLength < 4){
		fioResult = fioSplit[fioSplitLength-1]+' ';
		for (index = 0; index < fioSplitLength-1; ++index) {
			fioResult += fioSplit[index][0]+'. ';
		}
	}else{
		fioResult = 'Invalid fullname';
	}
	
	return fioResult;
}

app.get('/fio', function (req, res){
	const outputFio = fioHandler(req.query['fullName']);
	res.send(outputFio);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
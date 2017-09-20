let fs = require('fs');

var myPeople = [];

fs.readFile(`./files/people1.json`, 'utf-8', function(err, data){
	if(err){
		console.log(`an error occured: ${err}`);
		throw err;
	}

	var parsed = JSON.parse(data);
	// console.log(parsed);
	for(i = 0; i < parsed.length; i++){
		myPeople.push(parsed[i])
	}

	fs.readFile(`./files/people2.json`, 'utf-8', function(err, data){
		if(err){
			console.log(`an error occured: ${err}`);
			throw err;
		}

		var parsed = JSON.parse(data);
		// console.log(parsed);

		for(i = 0; i < parsed.length; i++){
			myPeople.push(parsed[i])
		}
		var peopleList = myPeople.sort()
		console.log(peopleList);	
		
		fs.writeFile(`./files/sorted_people.txt`, peopleList, function(err){
			if(err){
					console.log(`an error occured: ${err}`);
					throw err;
			}

			console.log('content successfully written');

		})

	})	





})




// app.use(function(request, reponse, next){ 
//   sortedPeople = 
//   fs.appendFile('./sorted_people.txt', sortedPeople, function(err){
//     if(err){
//       console.log(`there was a problem writing: ${err}`)
//       throw err;
//     } else {
//       console.log('content written.');
//     }
//   })

//   next();

// })
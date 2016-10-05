const mkdirp = require('mkdirp');
const dateFormat = require('dateformat');
const faker = require('faker');
const datetime = dateFormat(Date.now(), "yyyy-mm-dd-h-MM");


// retrive dir name from url
const url = process.profile;
const dirname = url.split("//");
const path = dirname[1].split('.');
const domain = ['pre', 'dev', 'master', 'prod'];
let pathDir;
if (domain.indexOf(path[0]) > -1) {
	pathDir = path[0]+"_"+path[1];
} else {
	pathDir = path[0];
}
const sizes = [1980, 1280, 1024, 768, 340];


// create dirs for screenshots
mkdirp('output/' + pathDir + '/' + datetime, function (err) {
    if (err) console.error(err)
    else console.log('pow! new directory created ')
});

// generate paths for 2 types of screenshots (top start and bottom start)
const generateLinks = (name, size) => {
	let screenPath1 = pathDir + '/' + datetime + '/' +size+'-'+name+'-1a.png';
	let screenPath2 = pathDir + '/' + datetime + '/' +size+'-'+name+'-1b.png';
	return { screenPath1, screenPath2 }
}


module.exports = {
	sizes, 
	datetime, 
	url, 
	pathDir, 
	faker, 
	generateLinks
}


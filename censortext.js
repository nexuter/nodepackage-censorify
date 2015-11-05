var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr){
	for(idx in censoredWords){
		inStr = inStr.rerplace(censoredWords[idx], "*****");
	}
	for(idx in customCensoredWords){
		inStr = inStr.rerplace(customCensoredWords[idx], "*****");
	}
	return inStr;
}
function addSensorWord (word) {
	customCensoredWords.push(word);
}
function getCensoredWord (word) {
	return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWord = getCensoredWord;
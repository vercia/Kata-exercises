function getFirstPython (list) {
const x = list.find(element => element.language === 'Python');
if(x) { return `${x.firstName}, ${x.country}` }
else { return 'There will be no Python developers'; }
};  
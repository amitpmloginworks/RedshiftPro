var Redshift = require('node-redshift');

var client = {
user: 'awsuser',
database: 'dev',
password: 'S123456789s',
port: '5439',
host: 'redshift-cluster-1.cdmlfnllg5q5.us-east-1.redshift.amazonaws.com'
};
// var client={
//     user: 'awsuser',
// database: 'dev',
// password: 'S123456789s',
// port: '5439',
// host:'redshift-cluster-1.cekvqh09ncpz.us-east-1.redshift.amazonaws.com'
// }
var redshift = new Redshift(client) //no need to call connect(), without rawConnection, it automatically connects
redshift.query('SELECT * FROM "clicks"', {raw: true}, function(err, data){
// using callbacks
// redshift.query('SELECT * FROM "upgrademydb.countries"', {raw: true}, function(err, data){
    // redshift.query('SELECT * FROM "countries"', {raw: true}, function(err, data){
if(err){
    console.log('erro77',err)
}
else{
console.log(data);

// if you want to close client pool, uncomment redshift.close() line
// but you won't be able to make subsequent calls because connection is terminated
// redshift.close();
}
});

// using promises
redshift.query('SELECT * FROM "clicks"', {raw: true})
// redshift.query('SELECT * FROM "upgrademydb.countries"', {raw: true})
// redshift.query('SELECT * FROM "countries"', {raw: true})
.then(function(data){
console.log(data);

// if you want to close client pool, uncomment redshift.close() line
// but you won't be able to make subsequent calls because connection is terminated
// redshift.close();
}, function(err){
    
console.log('erro2',err)
});
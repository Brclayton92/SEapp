//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://brock.clayton:1pokemon@ds141704.mlab.com:41704/mongo_db_bootcamp', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT || "8080"
};
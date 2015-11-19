exports.insert = function(ibmdb,connString) {
    return function(req, res) {
		var name = req.body.names;
		var email = req.body.email;
		var iotbefore = req.body.iotbefore;
		var iotafter = req.body.iotafter;
		var blmxbefore = req.body.blmxbefore;
		var blmxafter = req.body.blmxafter;
		var globalrate = req.body.globalrate;
		var textarea = req.body.textarea;
		var company = req.body.company;
	    ibmdb.open(connString, function(err, conn) {
			if (err) {
				console.log(err );
			    res.write("error: ", err.message + "<br>\n");
			    res.end();
			}else {             
				var sqlStatement = "INSERT INTO DASH104897.FEEDBACK (NAME, EMAIL, COMPANY, GLOBAL_EVAL, IOT_BEFORE, IOT_AFTER, BLMX_BEFORE, BLMX_AFTER, TEXTAREA) VALUES ('" + name +"', '" +email+"', '" +company+"', " +globalrate+", " +iotbefore+", " +iotafter+", " +blmxbefore+", " +blmxafter+", '" +textarea+"');";
				           /*
				           On successful connection issue the SQL query by calling the query() function on Database 
				          param 1: The SQL query to be issued
				          param 2: The callback function to execute when the database server responds 
				          */
				conn.query(sqlStatement, function (err,tables,moreResultSets) {
					if (err) {
						console.log(err);
						res.write("SQL Error: " + err + "<br>;\n");
						res;
					} else {
						console.log("query ok");
					}
					conn.close(function(){
						console.log("Connection Closed");
					});
				});
			}
		});
	   
	}
}



	   	   
     

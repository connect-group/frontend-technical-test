/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export const getData = (cb) => {
    const vehicles = new XMLHttpRequest();
    vehicles.open('GET', 'http://localhost:9988/api/vehicle');

    vehicles.onreadystatechange = function() {
        if(vehicles.readyState === 4) {
 		    if(vehicles.status === 200) {
 			    cb(vehicles.responseText);
		    }
		}
	};

	vehicles.send();
};

function sevenBoom(arr) {
    var i: number = 0;
	arr.forEach(element => {
        element = element.toString().split('');
        element.forEach(chislo => {
            if(chislo == '7') 
                i++;
        });
    });
    if(i >= 1)
        console.log("Boom!");
    else 
        console.log("there is no 7 in the array");
}

sevenBoom([2, 55, 605435467, 97, 86])
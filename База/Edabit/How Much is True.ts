function countTrue(arr) {
	if (arr.length == 0){
        console.log(0);
    }
    let i = 0;
    arr.forEach(element => {
        if(element == true){
            i++;
        }
    });
    console.log(i);
}

countTrue([true, false, false, true, false]);
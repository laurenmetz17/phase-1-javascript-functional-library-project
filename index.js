function myEach(collection, callback) {
    if(typeof(collection) == 'object') {
        let objArray = []
        objArray = Object.values(collection);
        objArray.forEach(item  => {
            callback(item);
        })
    }
    else {
        collection.forEach(item  => {
            callback(item);
        })
    }
    return collection;
}

function myMap(collection, callback) {
    let newArray = [];
    if(typeof(collection) == 'object') {
        let objArray = [];
        objArray = Object.values(collection);
        objArray.forEach(item => {
            newArray.push(callback(item));
        })
    }
    else {
        collection.forEach(item => {
            newArray.push(callback(item));
        })
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    if(acc != undefined) {
        let total = acc;
        if(typeof(collection) == 'object') {
            let objArray = [];
            objArray = Object.values(collection);
            for(let i = 0; i< objArray.length;i++) {
                total = callback(total, objArray[i], objArray);
            }
        }
        else {
            for(let i = 0; i < collection.length; i++) {
                total = callback(total, collection[i], collection);
            }
        }
        return total;
    }
    else {
        if(typeof(collection) == 'object') {
            let objArray = [];
            objArray = Object.values(collection);
            let total = objArray[0];
            for(let i = 1; i< objArray.length; i++) {
                total = callback(total, objArray[i], objArray);
            }
            return total;
        }
        else {
            let total = collection[0];
            for(let i = 1; i< collection.length; i++) {
                total = callback(total, collection[i], collection);
            }
            return total;
        }
    }
}

function myFind(collection, predicate) {
    if(typeof(collection) == 'object') {
        let objArray = [];
        objArray = Object.values(collection);
        let found = ''
        for(let i = 0; i< objArray.length; i++) {
            if(predicate(objArray[i]) === true) {
                found = objArray[i];
                return found;
            }
        }
        if(found == '') {
            return undefined;
        }
        
    }
    else {
        let found = '';
        for(let i = 0; i< collection.length; i++) {
            if(predicate(collection[i]) == true) {
                found = collection[i];
                return found;
            }
        }
        if(found === '') {
            return undefined;
        }
    }

}

function myFilter(collection,predicate) {
    if(typeof(collection) == 'object') {
        let objArray = [];
        objArray = Object.values(collection);
        let found = [];
        for(let i = 0; i< objArray.length; i++) {
            if(predicate(objArray[i]) === true) {
                found.push(objArray[i]);
            }
        }
        return found;
        
    }
    else {
        let found = [];
        for(let i = 0; i< collection.length; i++) {
            if(predicate(collection[i]) == true) {
                found.push(collection[i]);
            }
        }
        return found;
    }
}

function mySize(collection) {
    let size = 0;
    if(typeof(collection) == 'object') {
        let objArray = [];
        objArray = Object.values(collection);
        objArray.forEach(item => {
            size++;
        });
    }
    else {
        collection.forEach(item => {
            size++;
        });
    }
    return size;
}

function myFirst(array, n) {
    if(n == undefined) {
        return array[0];
    }
    else {
        return array.slice(0,n);
    }
}

function myLast(array, n) {
    if(n == undefined) {
        return array[array.length -1 ];
    }
    else {
        return array.slice(array.length-n,array.length);
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
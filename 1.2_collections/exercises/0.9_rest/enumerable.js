class Enumerable {
    constructor(collection, operations) {
        this.collection = collection;
        this.operations = operations || [];
    }
    
    build(fn) {
        return new Enumerable(this.collection.slice(), this.operations.concat(fn));
    }
    
    // BEGIN (write your solution here)
    where(...rest) {
        const func = rest.map((arg) => {
            if (typeof arg === 'function') {
                return coll => coll.filter(arg);
            }
            
            const keys = Object.keys(arg);
            return coll => coll.filter(element => keys.every(key => arg[key] === element[key]));
        });
        return this.build(func);
    }
    // END
    
    getProcessedCollection() {
        if (!this.memo) {
            this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
        }
        
        return this.memo;
    }
    
    get length() {
        return this.getProcessedCollection().length;
    }
    
    toArray() {
        return this.getProcessedCollection().slice();
    }
}

export default Enumerable;
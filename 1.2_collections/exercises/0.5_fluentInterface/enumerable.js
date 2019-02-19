class Enumerable {
    constructor(collection) {
        this.collection = collection;
    }
    
    // BEGIN (write your solution here)
    select(fn) {
        this.collection = this.collection.map(fn);
        return this;
    }
    // END
    
    // BEGIN (write your solution here)
    orderBy(fn, sort = 'asc') {
        const func = f => (a, b) => {
            if (f(a) > f(b)) return 1;
            return -1;
        };
        this.collection = this.collection.sort(func(fn));
        if (sort === 'asc') {
            return this;
        }
        this.collection = this.collection.reverse();
        return this;
    }
    // END
    
    where(fn) {
        this.collection = this.collection.filter(fn);
        return this;
    }
    
    toArray() {
        return this.collection.slice();
    }
}

export default Enumerable;
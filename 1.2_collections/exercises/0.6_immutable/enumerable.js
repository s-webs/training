class Enumerable {
    constructor(collection) {
        this.collection = collection;
    }
    
    select(fn) {
        // BEGIN (write your solution here)
        const selected = this.collection.map(fn);
        return new Enumerable(selected);
        // END
    }
    
    orderBy(fn, direction = 'asc') {
        // BEGIN (write your solution here)
        
        const compareResult = direction === 'asc' ? 1 : -1;
        const comparator = (a, b) => {
            const a1 = fn(a);
            const b1 = fn(b);
            
            if (a1 > b1) {
                return compareResult;
            }
            if (a1 < b1) {
                return -compareResult;
            }
            
            return 0;
        };
        const sorted = this.collection.slice().sort(comparator);
        return new Enumerable(sorted);
        // END
    }
    
    where(fn) {
        const filtered = this.collection.filter(fn);
        return new Enumerable(filtered);
    }
    
    toArray() {
        return this.collection;
    }
}

export default Enumerable;
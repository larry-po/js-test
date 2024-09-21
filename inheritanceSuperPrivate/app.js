class Course {
    #price;
    
    get price() {
        return '$' + this.#price;
    }

    set price(value) {
        this.#price = Math.abs(value);
    }

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    getSummary() {
        return `You will buy a course ${this.title} ` +
            `that costs ${this.price} and lengths ${this.length} hours`;
    }
}

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}

const clickHandler = () => {
    const c1 = new Course('course 1', 23, -112.99);
    console.log(c1, c1.getSummary());
};

const clickableBtn = document.getElementById('clickableBtn');
clickableBtn.addEventListener('click', clickHandler);
class ExampleError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

function createError(name) {
    let error = new Error();
}
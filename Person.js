class Person {
    constructor(name) {
        this.name= name;
    }
    sayMyname() {
        return `my name is  ${ this.name}!`;
    }
}
module.exports= {
    Person,

};
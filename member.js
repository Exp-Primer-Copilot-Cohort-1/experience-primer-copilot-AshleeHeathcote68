function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    };

    // Add a new property
    member.country = 'USA';

    // Add a new method
    member.getMember = function() {
        return this.name + ' is from ' + this.country;
    };

    // Add a new method
    member.getAge = function() {
        return this.name + ' is ' + this.age + ' years old';
    };

    // Add a new method
    member.getAddress = function() {
        return this.name + ' lives at ' + this.address;
    };

    // Return the member object
    return member;
}
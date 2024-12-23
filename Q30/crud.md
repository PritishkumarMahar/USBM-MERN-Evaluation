```
    // Create
db.students.insertMany([
    { name: "Bhagya", age: 22, major: "Computer Science" },
    { name: "Bikash", age: 20, major: "Mathematics" },
    { name: "Anjan", age: 21, major: "Physics" },
    { name: "Ansuman", age: 25, major: "Biology" }
]);

// Read
db.students.find();

// Update
db.students.updateOne(
    { name: "Bikash" },
    { $set: { age: 22 } }
);

// Delete
db.students.deleteOne({ name: "Bikash" });

// Query students with age > 21
db.students.find({ age: { $gt: 21 } });

```

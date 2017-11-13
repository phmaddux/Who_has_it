User.destroy_all
Item.destroy_all
Person.destroy_all

hunter = User.create({
    username: "Hunter",
    email: "placeholder@place.com",
    password: "password",
    picture: "****",
})      
tommy = Person.create({
    nickname: "Tommy",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    picture: "",
    would_lend_again: false,
    notes: "",
})
mick = Person.create({
    nickname: "Mick",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    picture: "",
    would_lend_again: false,
    notes: "",
})
Item.create({
    name: "Pen",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: tommy,
})
Item.create({
    name: "Computer",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mick,
})

john = User.create({
    username: "John",
    email: "placeholder@place.com",
    password: "password",
    picture: "****",
})      
mike = Person.create({
    nickname: "Mike",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    picture: "",
    would_lend_again: false,
    notes: "",
})
heather = Person.create({
    nickname: "Heather",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    picture: "",
    would_lend_again: false,
    notes: "",
})
Item.create({
    name: "Book",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: john,
    person: heather,
})
Item.create({
    name: "Book2",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: john,
    person: mike,
})
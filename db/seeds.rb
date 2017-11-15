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
    first_name: "Tommy",
    last_name: "Hilfiger",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "",
    would_lend_again: false,
    notes: "He's a good guy",
})
mick = Person.create({
    nickname: "Mick",
    first_name: "Mick",
    last_name: "Striker",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "",
    would_lend_again: false,
    notes: "Great guy, but I sometimes don't see him for years. Don't lend him anything you can't lose.",
})
cari = Person.create({
    nickname: "Cari",
    first_name: "Cari",
    last_name: "Westheaven",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "",
    would_lend_again: false,
    notes: "She's my oldest friend. She's definitely safe to lend stuff to.",
})
heather = Person.create({
    nickname: "heather",
    first_name: "Heather",
    last_name: "Maddux",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "",
    would_lend_again: false,
    notes: "She takes good care of books; I have to loan her stuff since she's my sister in law.",
})
john = Person.create({
    nickname: "John",
    first_name: "John",
    last_name: "Maddux",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "",
    would_lend_again: false,
    notes: "Remind him he has your stuff",
})
garrett = Person.create({
    nickname: "Garrett",
    first_name: "Garrett",
    last_name: "Maddux",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "",
    would_lend_again: false,
    notes: "Little brother. Don't bother trying to lend him books.",
})
mike = Person.create({
    nickname: "Mike",
    first_name: "",
    last_name: "",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "",
    would_lend_again: false,
    notes: "It's about 50/50 I'll get it back.",
})
evilTommy = Person.create({
    nickname: "Tommy's Evil Twin",
    first_name: "Tommy",
    last_name: "H",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "",
    would_lend_again: false,
    notes: "Don't lend him anything!",
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: heather,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: heather,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "",
    picture: "****",
    returned: false,
    condition_outgoing: "",
    condition_returned: "",
    description: "",
    user: hunter,
    person: mike,
})
Item.create({
    name: "Pen",
    picture: "****",
    returned: true,
    condition_outgoing: "Slightly chewed.",
    condition_returned: "Same.",
    description: "It's a pen.",
    user: hunter,
    person: mike,
})
Item.create({
    name: "Money",
    picture: "****",
    returned: false,
    condition_outgoing: "None",
    condition_returned: "",
    description: "25 dollars, I loaned that to him forever ago!",
    user: hunter,
    person: mike,
})
Item.create({
    name: "Old car",
    picture: "",
    returned: true,
    condition_outgoing: "Old, but still easily usable.",
    condition_returned: "Upside down in a ditch on fire.",
    description: "My old car.",
    user: hunter,
    person: evilTommy,
})
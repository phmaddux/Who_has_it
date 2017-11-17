User.destroy_all
Item.destroy_all
Person.destroy_all

hunter = User.create({
    username: "Hunter",
    email: "placeholder@place.com",
    password: "password",
    picture: "https://i.imgur.com/rfo9mY1.png",
})      
burns = User.create({
    username: "Burns",
    email: "placeholder@place.com",
    password: "password",
    picture: "https://i.imgur.com/KXmimfw.png",
})
tommy = Person.create({
    nickname: "Tommy",
    first_name: "Tommy",
    last_name: "Hilfiger",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "https://i.imgur.com/Xa4XAAy.png",
    would_lend_again: false,
    notes: "He's a good guy",
})
mick = Person.create({
    nickname: "Mick",
    first_name: "Mick",
    last_name: "Striker",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "https://i.imgur.com/emVfjTH.png",
    would_lend_again: false,
    notes: "Great guy, but I sometimes don't see him for years. Don't lend him anything you can't lose.",
})
cari = Person.create({
    nickname: "Cari",
    first_name: "Cari",
    last_name: "Westheaven",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "https://i.imgur.com/63Ij7no.png",
    would_lend_again: false,
    notes: "She's my oldest friend. She's definitely safe to lend stuff to.",
})
heather = Person.create({
    nickname: "heather",
    first_name: "Heather",
    last_name: "Maddux",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "https://i.imgur.com/FgHau3c.png",
    would_lend_again: false,
    notes: "She takes good care of books; I have to loan her stuff since she's my sister in law.",
})
john = Person.create({
    nickname: "John",
    first_name: "John",
    last_name: "Maddux",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "https://i.imgur.com/8hpJFT4.png",
    would_lend_again: false,
    notes: "Remind him he has your stuff",
})
garrett = Person.create({
    nickname: "Garrett",
    first_name: "Garrett",
    last_name: "Maddux",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "https://i.imgur.com/JBni8mh.png",
    would_lend_again: false,
    notes: "Little brother. Don't bother trying to lend him books.",
})
josh = Person.create({
    nickname: "Josh",
    first_name: "Josh",
    last_name: "Quinn",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "https://i.imgur.com/qB4quWf.png",
    would_lend_again: false,
    notes: "It's about 50/50 I'll get it back.",
})
evilTommy = Person.create({
    nickname: "Tommy's Evil Twin",
    first_name: "Tommy",
    last_name: "H",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "https://i.imgur.com/6PQ4e15.png",
    would_lend_again: false,
    notes: "Don't lend him anything!",
})
carter = Person.create({
    nickname: "Carter",
    first_name: "Carter",
    last_name: "M",
    email: "placeholder@place.com",
    phone_number: "555-867-5309",
    picture: "https://i.imgur.com/nDglykg.png",
    would_lend_again: false,
    notes: "My weird little cousin, he's fine to lend things to.",
})
Item.create({
    name: "Turn Coat, the Dresden Files",
    picture: "https://i.imgur.com/wDFSsIR.png",
    returned: false,
    condition_outgoing: "Pretty beat up.",
    condition_returned: "",
    description: "It's a book in the Dresden Files series",
    user: hunter,
    person: tommy,
})
Item.create({
    name: "Money",
    picture: "https://i.imgur.com/mJV3lvH.png",
    returned: false,
    condition_outgoing: "It doesn't matter, it's money.",
    condition_returned: "",
    description: "100 Dollars",
    user: hunter,
    person: tommy,
})
Item.create({
    name: "Grave Peril, the Dresden Files",
    picture: "https://i.imgur.com/InMWq6z.png",
    returned: false,
    condition_outgoing: "The spine is bent, but it's fine.",
    condition_returned: "",
    description: "It's a book in the Dresden Files series",
    user: hunter,
    person: tommy,
})
Item.create({
    name: "Small Favour",
    picture: "https://i.imgur.com/Sfu8hyC.png",
    returned: false,
    condition_outgoing: "Its an almost new copy.",
    condition_returned: "",
    description: "It's a book in the Dresden Files series",
    user: hunter,
    person: tommy,
})
Item.create({
    name: "Dead Beat",
    picture: "https://i.imgur.com/SyIY3Oo.png",
    returned: false,
    condition_outgoing: "Really dog-eared but easily readable.",
    condition_returned: "",
    description: "It's a book in the Dresden Files series, it's probably my favorite. There's an undead T-rex in it.",
    user: hunter,
    person: tommy,
})
Item.create({
    name: "Stapler",
    picture: "https://i.imgur.com/YcVTrYK.png",
    returned: false,
    condition_outgoing: "Pristine",
    condition_returned: "",
    description: "That's my stapler...",
    user: hunter,
    person: tommy,
})
Item.create({
    name: "Scotch Tape",
    picture: "https://i.imgur.com/AGew9Ft.png",
    returned: false,
    condition_outgoing: "Full",
    condition_returned: "",
    description: "Just regular scotch tape.",
    user: hunter,
    person: tommy,
})
Item.create({
    name: "Scissors",
    picture: "https://i.imgur.com/Uao74Vd.jpg",
    returned: false,
    condition_outgoing: "Sharp and working",
    condition_returned: "",
    description: "Regular scissors.",
    user: hunter,
    person: tommy,
})
Item.create({
    name: "Pen",
    picture: "https://i.imgur.com/aSCnFRF.png",
    returned: false,
    condition_outgoing: "It's my only unchewed pen",
    condition_returned: "",
    description: "A basic unchewed pen.",
    user: hunter,
    person: mick,
})
Item.create({
    name: "Money",
    picture: "https://i.imgur.com/mJV3lvH.png",
    returned: false,
    condition_outgoing: "Doesn't matter",
    condition_returned: "",
    description: "It's just 20 dollars.",
    user: hunter,
    person: mick,
})
Item.create({
    name: "Money",
    picture: "https://i.imgur.com/mJV3lvH.png",
    returned: false,
    condition_outgoing: "Doesn't matter",
    condition_returned: "",
    description: "It's just 20 dollars.",
    user: hunter,
    person: cari,
})
Item.create({
    name: "Books",
    picture: "https://i.imgur.com/UXHAaqo.png",
    returned: false,
    condition_outgoing: "Lots of books",
    condition_returned: "",
    description: "Dragonriders of Pern, Harry Potter, etc.",
    user: hunter,
    person: heather,
})
Item.create({
    name: "Nintendo Switch",
    picture: "https://i.imgur.com/aaouFwj.png",
    returned: false,
    condition_outgoing: "It isn't beat up and it works.",
    condition_returned: "",
    description: "It's a nintendo switch, a gming console.",
    user: hunter,
    person: john,
})
Item.create({
    name: "Books",
    picture: "https://i.imgur.com/UXHAaqo.png",
    returned: false,
    condition_outgoing: "They were all fine when I lent them.",
    condition_returned: "",
    description: "Several textbooks.",
    user: hunter,
    person: garrett,
})
Item.create({
    name: "Pen",
    picture: "https://i.imgur.com/aSCnFRF.png",
    returned: true,
    condition_outgoing: "Slightly chewed.",
    condition_returned: "Same.",
    description: "It's a pen.",
    user: hunter,
    person: josh,
})
Item.create({
    name: "Money",
    picture: "https://i.imgur.com/mJV3lvH.png",
    returned: false,
    condition_outgoing: "None",
    condition_returned: "",
    description: "25 dollars, I loaned that to him forever ago!",
    user: hunter,
    person: carter,
})
Item.create({
    name: "Old car",
    picture: "https://i.imgur.com/0YaJJp1.png",
    returned: true,
    condition_outgoing: "Old, but still easily usable.",
    condition_returned: "Upside down in a ditch on fire.",
    description: "My old car.",
    user: hunter,
    person: evilTommy,
})
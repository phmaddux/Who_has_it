User.destroy_all
Item.destroy_all
Person.destroy_all

hunter = User.new({
    username: "Hunter",
    email: "placeholder@place.com",
    password: "password",
    picture: "****",
    people: [
        Person.new({
            nickname: "Tommy",
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            picture: ""
            would_lend_again: boolean,
            notes: "",
            items: [
                Item.create({
                    name: "Pen",
                    picture: "****",
                    returned: boolean,
                    condition_outgoing: "",
                    condition_reurned: "",
                    description: ""
                })
                Item.create({
                    name: "Pen",
                    picture: "****",
                    returned: boolean,
                    condition_outgoing: "",
                    condition_reurned: "",
                    description: ""
                })                
        ]
    ]
})
hunter.save

john = User.new({
    username: "John",
    email: "placeholder2@place.com",
    password: "password",
    picture: "****",
    people: [
        Person.new({
            nickname: "Ian",
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            picture: ""
            would_lend_again: boolean,
            notes: "",
            items: [
                Item.create({
                    name: "Book",
                    picture: "****",
                    returned: boolean,
                    condition_outgoing: "",
                    condition_reurned: "",
                    description: ""
                })
                Item.create({
                    name: "Book2",
                    picture: "****",
                    returned: boolean,
                    condition_outgoing: "",
                    condition_reurned: "",
                    description: ""
                })                
        ]
    ]
})
john.save
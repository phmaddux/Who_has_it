User.destroy_all
Item.destroy_all
Person.destroy_all

hunter = User.new({
    username: "Hunter",
    email: "placeholder@place.com",
    password: "passwords",
    picture: "****",
    items: [
        Item.create({
            name: "Pen",
            picture: "****",
            returned: boolean,
            condition_outgoing: "",
            condition_reurned: "",
            description: ""
        }),
        Item.create({
            name: "",
            picture: "****",
            returned: boolean,
            condition_outgoing: "",
            condition_reurned: "",
            description: ""
        }),
    ]
})
hunter.save

john = User.new({
    username: "John",
    email: "holdplace@hold.com",
    password: "password",
    picture: "****",    
    items: [
        Item.create({
            name: "",
            picture: "****",
            returned: boolean,
            condition_outgoing: "",
            condition_reurned: "",
            description: ""
        }),
        Item.create({
            name: "",
            picture: "****",
            returned: boolean,
            condition_outgoing: "",
            condition_reurned: "",
            description: ""
        }),
    ]
})
john.save

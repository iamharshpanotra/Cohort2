const zod = require("zod");

// If this is an array of numnbers, atleast 1 input, return ture, else return false

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

// validateInput({
//     email: "codewithnick@gmail.com",
//     password: "121212121212"
// })

app.post("/login", function (req, res){
    const response = validateInput(req.body);
    if (!response.success) {
        res.json({
            msg: "Your input is not valid"
        })
        return;
    }
})
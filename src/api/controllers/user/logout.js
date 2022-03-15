import jwt from "jsonwebtoken";


export default function (req, res) {
    const authHeader = req.headers["authorization"];

    
    jwt.sign(authHeader, "", {expiresIn: 1},(logout, err) => {
        if(logout){
            return res
                .redirect("/")
        }
        if(err){
            return res.status(422).send({ message: "Error" });
        }
    })
}


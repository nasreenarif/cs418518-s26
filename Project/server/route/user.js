import { Router } from "express";
import { connection } from "../database/connection.js";
const user=Router();



// =======================
// GET ALL USERS
// =======================
user.get("/", async (req, res) => {
    try {
        const [rows] = await connection.execute("SELECT * FROM user_info");

        res.status(200).json({
            status: 200,
            message: "Users fetched successfully",
            data: rows
        });

    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
            data: null
        });
    }
});

// =======================
// GET USER BY ID
// =======================
user.get("/:id", async (req, res) => {
    try {
        const [rows] = await connection.execute(
            "SELECT * FROM user_info WHERE u_id = ?",
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "User not found",
                data: null
            });
        }
        res.status(200).json({
            status: 200,
            message: "User fetched successfully",
            data: rows[0]
        });

    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
            data: null
        });
    }
});

// user.get('/',(req,res)=>{
//     res.json({
//         'status':200,
//         'message':'Response from user get api'
//     })
// })


// user.get('/:userid',(req,res)=>{
//     res.json({
//         'status':200,
//         'message':'Response from user get api',
//         'id':req.params.userid
//     })
// })

export default user;









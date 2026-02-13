const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1;


app.get('/users',(req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    let user = req.body;
    user.id=counter
    counter+=1;

    users.push(user);
    res.json({
    message: 'User added successful',
    user: user
    });
});

app.patch('/user/:id', (req,res)=>{
    let id = req.params.id;
    let updateUser = req.body;

    //  หา user ที่จาก id ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    // อัพเดตข้อมูล users
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;

    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        message: 'User update successful',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
});
    //ส่ง users ที่อัพเดตแล้วกลับไป
app.delete('/users/:id',(req, res) => {
    let id = req.params.id;
    //หา index จาก id ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);
    users.splice(selectedIndex, 1);
    //ลบ user ออกจาก users
    res.json({
            message: 'User deleted successful',
            indexDelete: selectedIndex
    });
});
app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});
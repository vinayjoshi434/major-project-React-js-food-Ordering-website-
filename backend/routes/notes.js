const express = require('express')
const router = express.Router();

//now using middleware:
const fetchuser = require('../middleware/fetchuser');

// importing Notes models:
const Notes = require('../models/Notes');


// for express validator we are using this statement:
const { body, validationResult } = require('express-validator');


//ROUTE:1

// Get all Notes using : Get './api/notes/fetallnotes' :(this end point give me all the notes from the database , give the detail of that user that is logged in.)

//this note will give me all notes that has same Id(in auth -token):

router.get('/getallnotes', fetchuser, async (req, res) => {

    try {
        //here I'm fetching all the notes :(below at the user:(we have our user) because we used the middleware function fetchuser):
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }

})





//Route : 2 (add a new notes using post './api/notes/addnotes' : login required:
router.post('/addnotes', [

    body('Title', 'Enter the valid Title').notEmpty().isLength({ min: 3 }),
    body('Description', 'Description must be atleast 5 character.').notEmpty().isLength({ min: 5 }),

], fetchuser,
    async (req, res) => {

        // using array destructuring that will give me the parameters from the request that user send:
        const { Title, Description, tag } = req.body;


        //if there are error on above parameters of notes it will send me a bad request:
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });;
        }

        try {

            //here we are creating a node of refference type of Notes model that take(Title, Description, tag , 
            // (authomatically fetch the user Id from the server by fetchuser function: ))
            const note = new Notes({
                Title, Description, tag, user: req.user.id
            })
            const savedNotes = await note.save();
            res.json(savedNotes);


        } catch (error) {
            console.error(error.message);
            res.status(500).send("internal server error ");
        }
    })





//Route : 3 (Update the existing note  using put :'./api/notes/updatenote' : login required:
router.put('/updatenote/:id', fetchuser,
    async (req, res) => {

        const { Title, Description, tag } = req.body;
        

        try {
        //create a newnote object:
        const newNote = {};

        //Now checking the provided information from destructuring:(if user want to change the above notes he can change abouve notes:
        if (Title) { newNote.Title = Title };
        if (Description) { newNote.Description = Description };
        if (tag) { newNote.tag = tag };

        // now, I will check the user information(this is valid user or not):(by checking his Id we will allow to update the information):

        // here we are using findId function to check:
        let existNote = await Notes.findById(req.params.id);    //here we found the node  which we want to update from the request  

        //checking the note exist or not:
        if (!existNote) {
            return res.status(404).send("not found !")
        }

        //now we will check the user of response and the available user:
        //note.user.toString give the id of user if it found and then we will compare it to our req.user.id:
        if (existNote.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed ");
        }

        //it take first parameter as id , second {$ set: newNote} is newNote and the new true because if new information came it will easily add:
        existNote = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({existNote});
        
        } catch (error) {
            console.error(error.message);
            res.status(500).send("internal server issues !");
        }

    })



//Route : 4 (delete an existing note  using delete :'./api/notes/deletenote' : login required:
router.delete('/deletenote/:id', fetchuser,
    async (req, res) => {


        try {
          
            //only thing we have to do in this node , we  only verify  that the user, who wanted to delete this node is it belong to him or not:
            //jo insaan esko delete kr rha hain kyaa ye node usi ka hain:
    
            //Find the node to be delete and delete it:
            //checking the node exist or not:
            let existNote = await Notes.findById(req.params.id);   
    
            //checking the note exist or not (if not exist he will not allow to change):
            if (!existNote) {
                return res.status(404).send("not found !")
            }
    
            //now we will check the user of response and the available user:
            //note.user.toString give the id of user if it found and then we will compare it to our req.user.id:
    
            if (existNote.user.toString() !== req.user.id) {
                return res.status(401).send("not allowed ");
            }
    
            // this function will delete my node from Notes:
            existNote = await Notes.findByIdAndDelete(req.params.id);
    
            res.json({"Sucess" : " Note has been deleted !" , "note" : existNote});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("internal server issue");
        }
    })


module.exports = router
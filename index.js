// write basic code for express app
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) =>
    {
        fs.readdir(`./files`,function(err,files){
            console.log(files);
             res.render('index',{files:files});
        })
        
    }
);

// write code to handle file upload
app.post('/create', (req, res) =>
    {
        console.log(req.body);
        fs.writeFile(`./files/${req.body.title.split(' ').join('_')}.txt`,req.body.details,function(err){
                res.redirect('/');            
        })
    }
);

app.get('/files/:filename',(req,res)=>{
    const filename = req.params.filename;
    const filePath = path.join(__dirname,'files',filename);
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            console.log(err);
            return res.status(404).send('File not found');
        }
        res.render('file-view',{filename:filename,content:data});
    })
})
// write code to handle file edit 
// Add route to handle file updates
app.get('/files/:filename/edit', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'files', filename);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(404).send('File not found');
        }
        res.render('edit_file', {filename: filename, content: data});
    });
});
app.post('/files/:filename/edit', (req, res) => {
    const oldFilename = req.params.filename;
    const newFilename = `${req.body.title.split(' ').join('_')}.txt`;
    const oldFilePath = path.join(__dirname, 'files', oldFilename);
    const newFilePath = path.join(__dirname, 'files', newFilename);
    
    // Update the file content
    fs.writeFile(newFilePath, req.body.content, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving file');
        }
        
        // If filename changed, delete the old file
        if (oldFilename !== newFilename) {
            fs.unlink(oldFilePath, (err) => {
                if (err) console.error('Error deleting old file:', err);
            });
        }
        
        res.redirect('/files/' + newFilename);
    });
});
// Add route to handle file deletion
app.get('/files/:filename/delete', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'files', filename);
    
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            return res.status(500).send('Error deleting file');
        }
        res.redirect('/');
    });
});


app.listen(port, () =>
    {
        console.log(`Example app listening on port ${port}`);
    }
);

const app = express();

app.use(express.static(__dirname+'/src/qrvey-test'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/src/qrvey-test/index.html'));
});

app.listen(process.env.PORT || 8080);
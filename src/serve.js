const app = express();

app.use(express.static(__dirname+'/dist/QrveyTest'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/QrveyTest/index.html'));
});

app.listen(process.env.PORT || 8080);
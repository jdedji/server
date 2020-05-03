let express = require ('express')
let app = express()

let port = 4000


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) =>
res.send('HEllo world')
)
app.get('/products', (req, res) =>
res.json(data.products)
)
app.get('/fashions', (req, res) =>
res.json(data.fashions)
)

app.get('/households', (req, res) =>
res.json(data.households)
)

app.get('/phones', (req, res) =>
res.json(data.phones)
)

app.get('/computers', (req, res) =>
res.json(data.computers)
)

app.get('/electronics', (req, res) =>
res.json(data.electronics)
)

app.listen(port)
Console.log('api running on ' + port + ':')
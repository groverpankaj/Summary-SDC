
### CRUD

record: Details of a particular property

database/index.js
- Create: creates a new record in the database
- Read: Fetches a particulr record from the database 
- Update: updates a particular field(s) of a particular record in the database
- Delete: remove a particular record from the database


### Schema
<pre>
CREATE TABLE property (
  id integer PRIMARY KEY,           
  price integer  NOT NULL,        
  bd decimal,           
  ba decimal,          
  sqft decimal,         
  address text,      
  saleStatus varchar(8),   
  tourButton boolean, 
  zestimate  decimal,   
  estPayment decimal   
)`;
</pre>

## Create - POST Request

# Request
<pre>
axios({
  method: 'post',
  url: '/property',
  data: {
    id integer,           
    price integer,        
    bd decimal,           
    ba decimal,          
    sqft decimal,         
    address text,      
    saleStatus String,   
    tourButton true/false, 
    zestimate  decimal,   
    estPayment decimal   
  }
});
</pre>

# Response 
Pass : ResponseCode 200
Error: ResponseCode 404

## Read - GET Request

# Request
axios.get('/property:id')

# Response

Pass

if found
Return an Array with following elements
 <pre>
  [
    id,           
    price,        
    bd,           
    ba,          
    sqft,         
    address,      
    saleStatus,   
    tourButton, 
    zestimate,   
    estPayment
   ]
</pre>
 
 if not found
 Return empty array <pre>[]</pre>
  
  Error
  Returns a string with error message
  
  
  ## POST Update
  


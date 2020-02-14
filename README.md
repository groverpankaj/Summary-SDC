
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

#### Request
<pre>
({
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

#### Response
<pre>
Pass : ResponseCode 200
Error: ResponseCode 404
</pre>

## Read - GET Request

 Example => ?property=45

#### Request
get(`/property:${property_id}`)

##### Response

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
  
  
  ## PUT Update
  
  #### Request
  <pre>
  ({
  method: 'put',
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
UPDATE ALL fields where (given)id = (database)id

##### Response
<pre>
Pass : ResponseCode 200
Error: ResponseCode 404
</pre>

# Agents Table

<pre>
CREATE TABLE agents (
  id integer PRIMARY KEY,           
  firstName text  NOT NULL,        
  lastName text  NOT NULL,          
  review decimal,          
  reviewCount integer,         
  recentSale integer,      
  phoneNo text 
)`;
</pre>

# Property Agents Relationship Table

<pre>
CREATE TABLE propertyAgents (
  propertyId integer REFERENCES properties(id),           
  agentId integer  REFERENCES agents(id),        
  listingAgent boolean
)`;
</pre>


import {v4 as uuidv4} from 'uuid';




let payments = [
    /* some sample data that represents a table:
    {
        total_cost: 12.99,
        tax: 1.99,
        tip:0.99,
        id: 1
    },
    {   
 
        total_cost: 60.99,
        tax: 5.99,
        tip:3.99,
        id: 2
    },*/
]
export const getPayment = (req, res) => {

    res.json(payments)
    
}

export const sendPayment = (req, res) => {
    const account = req.body;//represents the data being added.
    const accountId = {...account, id: uuidv4()}

    payments.push(accountId) //represents insert query


    res.json(`new payment of ${account.total_cost} received!`)
    /*replace with queries to your database, good to test if endpoints work through
    using applications */
   
}

 /*also good practice to have ids, to you can easily fetch specific data, uuid allows
    an identifiable id depending on the version, */

 //note,the object with the value in ":id", ex: /delete/1 is will delete user with id 1.

export const foundPayment = (req, res) => {
    const {id} = req.params;//params is the value in url to identify the data you want to mutate
    
    const foundRecord = payments.find((payment) => payment.id === id)
    res.json(foundRecord) //returning in json our found user.
}



export const deletePayment = (req, res) => {

    const {id} = req.params;

        payments = payments.filter((payment) => payment.id != id)

        //this represents a query to the database to delete the user
        
    res.json(`payment with id: ${id} has been deleted`);

   
}

export const updatePayment = (req, res) => {
    const {id} = req.params 
    const {total_cost, tax, tip} = req.body

    const foundRecord = payments.find((payment) => payment.id === id)//find user to update

    if(total_cost) foundRecord.total_cost = total_cost;
    if(tax) foundRecord.tax = tax;
    if(tip) foundRecord.tip = tip;
    
    res.json(`payment with id: ${id} has been updated`)
}

//destructuring
// *array destructuring
// *object destructuring

const users = {
    name:
    {id:345,
    firstName : 'Shorif',
    middleName: 'Ahmed',
    lastName: 'Rahman',
    },
    contactNo : '01712345678',
    address : 'Dhaka'
}

const {contactNo,name:{middleName}} = users


// array destructuring

const mrFriends = ['Ross','Chandler','Joey','Monica','Rachel','Phoebe']

const [a,b,bestFriend] = mrFriends
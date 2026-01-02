function Local(){

    // localStorage.clear()

    // sessionStorage.clear()




    // local Storage of browser


    localStorage.setItem('user1','name')



    const user = localStorage.getItem('user')

    //console.log(user);

    localStorage.removeItem('user1')


    //localStorage.clear()



    // changing from json object to string:


    const obj = {
        name: 'name',
        age:20
    }

    const c1 = JSON.stringify(obj)          // object change to string

    localStorage.setItem('user',c1)         // set item

    
    console.log(c1);                        // print string

    console.log(typeof c1);                 // type is string






    // changing string to object

    const c2 = JSON.parse(c1)

    console.log(c2);
    





    // session storage



    sessionStorage.setItem('age','20')



    const age = sessionStorage.getItem('age')

    console.log(age);



    sessionStorage.clear()


    return(
        <>
        </>
    )
}

export default Local

 
    let saveRegistrationInfo = ()=>{
    console.log('okokokokokokok');
    
               //object.method()
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById('last_name').value;


    console.log(fn);
    console.log(ln);
    
    window.localStorage.setItem("firs_name",fn);
    window.localStorage.setItem('last_name',ln);
    // page reload
    window.location.reload();

}

    let logout = ()=>{
        window.localStorage.clear();
        // page reload
        window.location.reload();
    }

// ()();  IIFE
(()=>{
    let fn = window.localStorage.getItem('first_name');
    let ln = window.localStorage.getItem('last_name');
    console.log('Page loaded successfully');
        // get a refrance to the modal Element
    var modal = document.getElementById('RegistrationModal');

        // create a bootstrap modal instance using the modal element
    var modalInstance = new bootstrap.Modal(modal);

        // call the show method on the modal instance to
        console.log(window.localStorage.getItem('first_name'));
        if(window.localStorage.getItem('first_name') === null){
            //true
            modalInstance.show();
        } 
              // check if the localstorage is set or note
        
        if(fn !== null){
            document.querySelector('h5.a_welcome').innerHTML = 'Welcome '+fn + " "+ln+'<button class="btn btn-sm btn-danger ms-4" onclick="logout()">Logout</button>';
        }
})();

    // ()();   IIFE 
//Onpage load
   
    


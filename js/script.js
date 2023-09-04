
 
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
    
    let playSound = ()=>{        
       // console.log('good morning');
        let at = document.querySelector(".a_audio");
        at.play();     
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
            document.querySelector('.a_welcome').innerHTML = 'Welcome '+fn + " "+ln+'<button class="btn btn-sm btn-danger ms-4" onclick="logout()">Logout</button>';
        }

          //keyboard sound play
          document.addEventListener('keypress',(e)=>{
            console.log("->",e.keyCode);
            if(e.keyCode == 97){ 
                let a = document.querySelector('.a_a');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 113){ 
                let a = document.querySelector('.a_q');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 122){ 
                let a = document.querySelector('.a_z');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 119){ 
                let a = document.querySelector('.a_w');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_ring').style.display = 'block';
            }
            if(e.keyCode == 115){ 
                let a = document.querySelector('.a_s');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_ring').style.display = 'block';
            }
            if(e.keyCode == 120){ 
                let a = document.querySelector('.a_x');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_ring').style.display = 'block';
            }
            //document = whole website
            playSound();
        })

        document.addEventListener('keyup',()=>{
            console.log(e);
            var elements = document.getElementsByClassName('a_active');
 
            for (var i = 0; i < elements.length; i++){
                elements[i].classList.remove('a_active');
            }
            
            
            var elements = document.getElementsByClassName('a_p');

            for (var i = 0; i < elements.length; i++){
                elements[i].style.display='none';
            }
            
            
           // document.querySelector('.a_p').style.display ="none";
        })

})();
    

// ()();   IIFE 
//Onpage load
   













 
    let saveRegistrationInfo = ()=>{
    console.log('okokokokokokok');
    
               //object.method()
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById('last_name').value;
    let dur = document.querySelector('.a_mySelected').value;


    console.log(fn);
    console.log(ln);
    
    window.localStorage.setItem("firs_name",fn);
    window.localStorage.setItem('last_name',ln);
    window.localStorage.setItem('duration',dur);
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

    let start = ()=>{
      // Built-in fungtion
        // Set the date we're counting down to
        var nextTime = new Date().getTime();
        nextTime = new Date(nextTime + (localStorage.getItem('duration')*60* 1000)); // add 1 hurse
        
        // Create a Date object representing your DateTime
        var myDate = new Date(nextTime); // Replace with your DateTime

         //  Convert the Date object to a Unix timestamp in seconds
        var unixTimestamp = Math.floor(myDate.getTime() / 1000)*1000;

         // Display the Unix timestamp  
        
        setInterval(function(){
            // Get today's date and time
            var now = new Date().getTime();
            // Calculate the next time by adding minutesToAdd to the current time
            console.log('Next Time', unixTimestamp);
            console.log('Current Time',now);

            // Find the distance between now and the count down date
            var distance = unixTimestamp - now;

            // Time calculations for days, hours, minutes and seconds
            
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.querySelector(".a_duration").innerHTML = minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.querySelector(".a_duration").innerHTML = "EXPIRED";
  }

        },1000)  
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

        /*
        for (expression 1; condition; increment++/decrement) {
            // code block to be executed
        }
        */
        var o ='';
        for(var i=1; i<=60; i++){  
            o = o + `<option value="${i}">${i}</option>`;
        }
        console.log(o);
        console.log(document.querySelector('.a_mySelected'));
        document.querySelector('.a_mySelected').innerHTML = o;

    
        document.querySelector('.a_duration').innerHTML = localStorage.getItem('duration') === null ?'':localStorage.getItem('duration')+':00';

        
})();
    

// ()();   IIFE 
//Onpage load
   












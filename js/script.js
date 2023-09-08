    // variables
    let fn = window.localStorage.getItem('first_name');
    let ln = window.localStorage.getItem('last_name');
    
    let story = `Swami Vivekananda was a Hindu monk and one of the most celebrated spiritual leaders of India. He was more than just a spiritual mind; he was a prolific thinker, great orator and passionate patriot.
            He carried on the free-thinking philosophy of his guru, Ramakrishna Paramhansa forward into a new paradigm. He worked tirelessly towards betterment of the society, in servitude of the poor and needy, dedicating his all for his country. 
            He was responsible for the revival of Hindu spiritualism and established Hinduism as a revered religion on world stage. His message of universal brotherhood and self-awakening remains relevant especially in the current backdrop of widespread political turmoil around the world. 
            The young monk and his teachings have been an inspiration to many, and his words have become goals of self-improvement especially for the youth of the country. For this very reason, his birthday, January 12, is celebrated as the National Youth Day in India. 
            Early Life and Education Born Narendranath Dutta, into an affluent Bengali family in Calcutta, Vivekananda was one of the eight children of Vishwanath Dutta and Bhuvaneshwari Devi. He was born on January 12, 1863, on the occasion of Makar Sankranti. 
            Father Vishwanath was a successful attorney with considerable influence in society. Narendranath’s mother Bhuvaneshwari was a woman endowed with a strong, God-fearing mind who had a great impact on her son. As a young boy, Narendranath displayed sharp intellect. 
            His mischievous nature belied his interest in music, both instrumental as well as vocal. He excelled in his studies as well, first at the Metropolitan institution, and later at the Presidency College in Calcutta. By the time he graduated from the college, he had acquired a vast knowledge of different subjects. He was active in sports, gymnastics, wrestling and body building. 
            He was an avid reader and read up on almost everything under the sun. He perused the Hindu scriptures like the Bhagvad Gita and the Upanishads on one hand, while on the other hand he studied western philosophy, history and spirituality by David Hume, Johann Gottlieb Fichte and Herbert Spencer. Spiritual Crisis and Relationship with Ramkrishna Paramhansa
            Although Narendranath’s mother was a devout woman and he had grown up in a religious atmosphere at home, he underwent a deep spiritual crisis at the start of his youth. His well-studied knowledge led him to question the existence of God and for some time he believed in Agnosticism. Yet he could not completely ignore the existence of a Supreme Being.
            He became associated with Brahmo Movement led by Keshab Chandra Sen, for some time. The Bramho Samaj recognised one God unlike the idol-worshipping, superstition-ridden Hinduism. The host of philosophical questions regarding the existence of God roiling through his mind remained unanswered. During this spiritual crisis, Vivekananda first heard about Sri Ramakrishna from William Hastie, the Principal of the Scottish Church College.
            Earlier, to satisfy his intellectual quest for God, Narendranath visited prominent spiritual leaders from all religions, asking them a single question, “Have you seen God?” Each time he came away without a satisfying answer. He put forward the same question to Sri Ramkrishna at his residence in Dakshinewar Kali Temple compounds. Without a moment's hesitation, Sri Ramakrishna replied: "Yes, I have. 
            I see God as (Narendranath’s mother was a devout woman i) clearly as I see you, only in a much deeper sense." Vivekananda, initially unimpressed by the simplicity of Ramkrishna, was astonished with Ramakrishna's reply. Ramakrishna gradually won over this argumentative young man with his patience and love. The more Narendranath visited Dakshineshwar, the more his questions were answered.`;           
           
    let parTwoLineCharacterCount = 100;
    let initialSequence = 1;
    let currentCerectorLocation = 1;
    let totcloc = 1;
    let prevChar = '';
    let currentChar = '';
    let nextChar = '';
    console.log('total count',story.length);
    var parTwoLineCharacter = Math.ceil(story.length / parTwoLineCharacterCount);
 
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

            if(prevChar != currentChar){
                //play the error sound
                console.log('Incorrect',prevChar);
                console.log('Incorrect',currentChar);
            }else{
                console.log('correct',prevChar);
                console.log('correct',currentChar);
            }
            console.log("->",e);
            currentChar = e.key;
           /* if(e.keyCode == 96){ 
                let a = document.querySelector('.a_`');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }*/
            if(e.keyCode == 33){ 
                let a = document.querySelector('.a_!');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 64){ 
                let a = document.querySelector('.a_2');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 35){ 
                let a = document.querySelector('.a_3');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 36){ 
                let a = document.querySelector('.a_4');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 37){ 
                let a = document.querySelector('.a_5');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 94){ 
                let a = document.querySelector('.a_6');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 38){ 
                let a = document.querySelector('.a_7');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 42){ 
                let a = document.querySelector('.a_8');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 40){ 
                let a = document.querySelector('.a_9');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 41){ 
                let a = document.querySelector('.a_0');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
            if(e.keyCode == 45){ 
                let a = document.querySelector('.a_-');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_pinky').style.display = 'block';
            }
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
            if(e.keyCode == 101){ 
                let a = document.querySelector('.a_e');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_middle').style.display = 'block';
            }
            if(e.keyCode == 100){ 
                let a = document.querySelector('.a_d');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_middle').style.display = 'block';
            }
            if(e.keyCode == 99){ 
                let a = document.querySelector('.a_c');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_middle').style.display = 'block';
            }
            if(e.keyCode == 114){ 
                let a = document.querySelector('.a_r');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_index').style.display = 'block';
            }
            if(e.keyCode == 102){ 
                let a = document.querySelector('.a_f');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_index').style.display = 'block';
            }
            if(e.keyCode == 118){ 
                let a = document.querySelector('.a_v');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_index').style.display = 'block';
            }
            if(e.keyCode == 116){ 
                let a = document.querySelector('.a_t');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_index').style.display = 'block';
            }
            if(e.keyCode == 103){ 
                let a = document.querySelector('.a_g');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_index').style.display = 'block';
            }
            if(e.keyCode == 98){ 
                let a = document.querySelector('.a_b');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_index').style.display = 'block';
            }
            if(e.keyCode == 32){ 
                let a = document.querySelector('.a_space');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.l_thumb').style.display = 'block';
            }
            if(e.keyCode == 32){ 
                let a = document.querySelector('.a_space');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_thumb').style.display = 'block';
            }
            if(e.keyCode == 121){ 
                let a = document.querySelector('.a_y');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_index').style.display = 'block';
            }
            if(e.keyCode == 104){ 
                let a = document.querySelector('.a_h');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_index').style.display = 'block';
            }
            if(e.keyCode == 110){ 
                let a = document.querySelector('.a_n');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_index').style.display = 'block';
            }
            if(e.keyCode == 117){ 
                let a = document.querySelector('.a_u');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_index').style.display = 'block';
            }
            if(e.keyCode == 106){ 
                let a = document.querySelector('.a_j');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_index').style.display = 'block';
            }
            if(e.keyCode == 109){ 
                let a = document.querySelector('.a_m');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_index').style.display = 'block';
            }
            if(e.keyCode == 105){ 
                let a = document.querySelector('.a_i');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_middle').style.display = 'block';
            }
            if(e.keyCode == 107){ 
                let a = document.querySelector('.a_k');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_middle').style.display = 'block';
            }
            if(e.keyCode == 44){ 
                let a = document.querySelector('.a_,');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_middle').style.display = 'block';
            }
            if(e.keyCode == 111){ 
                let a = document.querySelector('.a_o');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_ring').style.display = 'block';
            }
            if(e.keyCode == 108){ 
                let a = document.querySelector('.a_l');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_ring').style.display = 'block';
            }
            if(e.keyCode == 46){ 
                let a = document.querySelector('.a_.');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_ring').style.display = 'block';
            }
            if(e.keyCode == 112){ 
                let a = document.querySelector('.a_p');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_pinky').style.display = 'block';
            }
            if(e.keyCode == 59){ 
                let a = document.querySelector('.a_;');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_pinky').style.display = 'block';
            }
            if(e.keyCode == 47){ 
                let a = document.querySelector('.a_/');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_pinky').style.display = 'block';
            }
            if(e.keyCode == 91){ 
                let a = document.querySelector('.a_[');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_pinky').style.display = 'block';
            }
            if(e.keyCode == 93){ 
                let a = document.querySelector('.a_]');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_pinky').style.display = 'block';
            }
            if(e.keyCode == 92){ 
                let a = document.querySelector('.a_|');
                console.log(a.classList.add('a_active'));            
                document.querySelector('.r_pinky').style.display = 'block';
            }
            //document = whole website
            playSound();
            prevChar = e.key;
        })

        document.addEventListener('keyup',()=>{
            //console.log(e);
            var elements = document.getElementsByClassName('a_active');
 
            for (var i = 0; i < elements.length; i++){
                elements[i].classList.remove('a_active');
            }
            
            
            var elements = document.getElementsByClassName('a_p');

            for (var i = 0; i < elements.length; i++){
                elements[i].style.display='none';
            }
            
            console.log('initialSequence->',initialSequence);
            console.log('currentCerectorLocation->',currentCerectorLocation);
            console.log('parTwoLineCharacter->',parTwoLineCharacterCount);
            
            if(currentCerectorLocation >= parTwoLineCharacterCount){
                currentCerectorLocation=0;
                initialSequence++;
                console.log('new initialSequence',initialSequence);
            }else{
                currentCerectorLocation++;
            }
            // if the

            // string.substring(start, end)
        if(initialSequence === 1){
            console.log('--->',story.substring(initialSequence-1,(initialSequence*parTwoLineCharacterCount) + initialSequence*parTwoLineCharacterCount));
            let x = story.substring(initialSequence-1,(initialSequence*parTwoLineCharacterCount) + initialSequence*parTwoLineCharacterCount);
            

            // let x = 'arjun';

            // ccls = 1  <span style="color:green;">a</span>

            let p1 = x.substring(0,currentCerectorLocation);
            let p2 = x.substring(currentCerectorLocation);
            nextChar = p2.charAt(0);
           // p2 = x.replace("a", "<span style='text-decoration: underline;'>a</span>");
            p2 = "<span style='text-decoration: underline; font-weight: bold'>" + p2.charAt(0) + "</span>" + p2.slice(1);
            console.log('part 1->',p1);
            console.log('part 2->',p2);

            let a = `<span style="color:green;">${p1}</span>`+p2;

            document.querySelector('.a_myparagraf').innerHTML = a;
            console.log('nextChar-->',nextChar);
        }else{
            console.log('--->',story.substring((initialSequence-1)*parTwoLineCharacterCount,(initialSequence*parTwoLineCharacterCount) + initialSequence*parTwoLineCharacterCount));
            let x = story.substring((initialSequence-1)*parTwoLineCharacterCount,(initialSequence*parTwoLineCharacterCount) + initialSequence*parTwoLineCharacterCount);
           
            let p1 = x.substring(0,currentCerectorLocation);
            let p2 = x.substring(currentCerectorLocation);
            nextChar = p2.charAt(0);
            // p2 = x.replace("a", "<span style='text-decoration: underline;'>a</span>");
            p2 = "<span style='text-decoration: underline; font-weight: bold'>" + p2.charAt(0) + "</span>" + p2.slice(1);
            console.log('part 1->',p1);
            console.log('part 2->',p2);

            let a = `<span style="color:green;">${p1}</span>`+p2;

            document.querySelector('.a_myparagraf').innerHTML = a;
            console.log('nextChar-->',nextChar);
        }
            totcloc++;
            
           // document.querySelector('.a_p').style.display ="none";
        });

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

      
        let story = `Swami Vivekananda was a Hindu monk and one of the most celebrated spiritual leaders of India. He was more than just a spiritual mind; he was a prolific thinker, great orator and passionate patriot.
         He carried on the free-thinking philosophy of his guru, Ramakrishna Paramhansa forward into a new paradigm. He worked tirelessly towards betterment of the society, in servitude of the poor and needy, dedicating his all for his country. 
         He was responsible for the revival of Hindu spiritualism and established Hinduism as a revered religion on world stage. His message of universal brotherhood and self-awakening remains relevant especially in the current backdrop of widespread political turmoil around the world. 
         The young monk and his teachings have been an inspiration to many, and his words have become goals of self-improvement especially for the youth of the country. For this very reason, his birthday, January 12, is celebrated as the National Youth Day in India. 
         Early Life and Education Born Narendranath Dutta, into an affluent Bengali family in Calcutta, Vivekananda was one of the eight children of Vishwanath Dutta and Bhuvaneshwari Devi. He was born on January 12, 1863, on the occasion of Makar Sankranti. 
         Father Vishwanath was a successful attorney with considerable influence in society. Narendranath’s mother Bhuvaneshwari was a woman endowed with a strong, God-fearing mind who had a great impact on her son. As a young boy, Narendranath displayed sharp intellect. 
         His mischievous nature belied his interest in music, both instrumental as well as vocal. He excelled in his studies as well, first at the Metropolitan institution, and later at the Presidency College in Calcutta. By the time he graduated from the college, he had acquired a vast knowledge of different subjects. He was active in sports, gymnastics, wrestling and body building. 
         He was an avid reader and read up on almost everything under the sun. He perused the Hindu scriptures like the Bhagvad Gita and the Upanishads on one hand, while on the other hand he studied western philosophy, history and spirituality by David Hume, Johann Gottlieb Fichte and Herbert Spencer. Spiritual Crisis and Relationship with Ramkrishna Paramhansa
         Although Narendranath’s mother was a devout woman and he had grown up in a religious atmosphere at home, he underwent a deep spiritual crisis at the start of his youth. His well-studied knowledge led him to question the existence of God and for some time he believed in Agnosticism. Yet he could not completely ignore the existence of a Supreme Being.
         He became associated with Brahmo Movement led by Keshab Chandra Sen, for some time. The Bramho Samaj recognised one God unlike the idol-worshipping, superstition-ridden Hinduism. The host of philosophical questions regarding the existence of God roiling through his mind remained unanswered. During this spiritual crisis, Vivekananda first heard about Sri Ramakrishna from William Hastie, the Principal of the Scottish Church College.
         Earlier, to satisfy his intellectual quest for God, Narendranath visited prominent spiritual leaders from all religions, asking them a single question, “Have you seen God?” Each time he came away without a satisfying answer. He put forward the same question to Sri Ramkrishna at his residence in Dakshinewar Kali Temple compounds. Without a moment's hesitation, Sri Ramakrishna replied: "Yes, I have. 
         I see God as clearly as I see you, only in a much deeper sense." Vivekananda, initially unimpressed by the simplicity of Ramkrishna, was astonished with Ramakrishna's reply. Ramakrishna gradually won over this argumentative young man with his patience and love. The more Narendranath visited Dakshineshwar, the more his questions were answered.`


        console.log(story.split(' '));
        let x = story.split(' ');
        //function chaning .a() .b() .c() ........
        console.log(x.slice(0,20).join(' '));
        
        let content = x.slice(0,20).join(' ');
        //Access the DOM Element
        document.querySelector('.a_text').innerHTML = content

})();
    

// ()();   IIFE 
//Onpage load
   












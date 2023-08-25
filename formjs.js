
const contacts = [];
var i = 0;





function createContact() {

    document.getElementById("alertt").className = "text-red-700";

    var x = document.getElementById("crtfrm").uname;

    

    var y = document.getElementById("crtfrm").phone;
    

    var z = document.getElementById("crtfrm").mail;
    
    


    var a = document.getElementById("crtfrm").city;

    var para = "alertt";
    

    if(checker(x,y,z,a,para) == 1){
        const formContact = {uname:x.value ,phone:y.value, mail:z.value, city:a.value};
        contacts[i] = formContact;
        document.getElementById(para).innerHTML = "Contact Created Successfully!";
        document.getElementById(para).className = "text-black";
        document.getElementById("autoadd").className = "hidden";


        i= i+1;
    }

    

    
    
    


   

    // let displayText = "";
    // for(let j=0; j< contacts.length; j++)
    // {
    //     displayText += "Name : "+contacts[j].uname + "<br>";
    //     displayText += "Phone : "+contacts[j].phone + "<br>";
    //     displayText += "Mail : "+contacts[j].mail + "<br>";
    //     displayText += "City : "+contacts[j].city + "<br><br>";
    // }


    // let tablee = document.getElementById("allcont");
    // tablee.className = "border-separate border-spacing-2 border ";
    
    // document.getElementById("demo").innerHTML = displayText;


    showContDiv();



    
}


function checker(x,y,z,a,para)
{
    let wrong = 0;
    if (x.value.length < 3)
    {
        
        document.getElementById(para).innerHTML = "*Name should be longer";
        wrong++;
    };
    for(let j=0; j<contacts.length;j++)
    {

        if(x.value == contacts[j].uname)
        {
            
            document.getElementById(para).innerHTML = "*Name should not repeat";
            wrong++;
        }
    };

    if (y.value < 100000000 || y.value> 9999999999)
    {
        document.getElementById(para).innerHTML = "*Phone should be 10 digits long";
        wrong++;


    };

    let regex = new RegExp(/\S+@\S+\.\S+/);
    let result = regex.test(z.value);
    if (!result) {
        document.getElementById(para).innerHTML = "*wrong email address";
        wrong++;


    };

    if (a.value.length < 3)
    {
        document.getElementById(para).innerHTML = "*City name should be longer";
        wrong++;


    };

    if(wrong == 0)
    {
        return 1;
    }
    else{
        return 0;
    };
}

function showContDiv()
{
    deleteAllDiv();
    
    for(let j = 0; j<contacts.length;j++)
    {
        let uname = contacts[j].uname;
        let phone = contacts[j].phone;
        insertDiv(uname, phone);

    }
}

function deleteAllDiv(){
    var divcount = document.querySelectorAll(".newdiv");

    for(var j =0; j < divcount.length ; j++)
    {
        divcount[j].remove();
    }
}





function insertDiv(name,phone)
{
    
    
    
    let divindex = -2;
    const editb = document.createElement("button");
    editb.onclick = function(){showEditBox(name)};
    editb.className = " p-2  ml-2 grow-0 ";
    editb.innerHTML = '<i class="bi bi-pencil-square text-gray-500 hover:text-black text-2xl"></i>';

    const deleteb = document.createElement("button");
    deleteb.onclick = function(){deleteThisRow(name)};
    deleteb.className = "p-2  ml-2 grow-0";
    deleteb.innerHTML = '<i class="bi bi-x-circle text-gray-500 hover:text-black text-2xl"></i>    ';

    const viewb = document.createElement("button");
    viewb.onclick = function(){viewDetails(name,divindex)};
    viewb.className = "p-2 ml-2 grow-0";
    viewb.innerHTML = ' <i class="bi bi-info-circle text-gray-500 hover:text-black text-2xl"></i>';



    const newdiv = document.createElement("div");
    newdiv.className = "newdiv flex flex-col sm:flex-row p-2 sm:p-6  rounded bg-white/80 text-lg transition ease-in-out";
    const insidenewdiv = document.createElement("div");
    insidenewdiv.className = "insidenewdiv flex items-center pl-4 sm:pl-12 w-full sm:basis-3/5";
    insidenewdiv.innerHTML = name + "&emsp; &emsp; "  +phone  ;

    const sinsidenewdiv = document.createElement("div");
    sinsidenewdiv.className = " sinsidenewdiv w-full flex justify-between sm:basis-2/5 ";
    sinsidenewdiv.appendChild(editb);
    sinsidenewdiv.appendChild(deleteb);
    sinsidenewdiv.appendChild(viewb);

    newdiv.appendChild(insidenewdiv);
    newdiv.appendChild(sinsidenewdiv);



    allcontdiv.appendChild(newdiv);



    
}






function showEditBox(name)
{
    var newdiv = document.querySelectorAll(".newdiv");
    let divindex = 0;


    for(var j =0; j < contacts.length ; j++)
    {
        


        if (name == contacts[j].uname )
        {
            divindex = j;
            break;

        }
    }

    

    const box = '<form id="editform" class="flex flex-row flex-wrap p-4 rounded-lg bg-gray-200 w-full" name="editform" action="/action_page.php"><div class="w-1/2 pt-4 "> <div class="">User name: </div> </div><div class="w-1/2 pt-4 "> <input type="text" placeholder="type name" name="uname" class="placeholder:text-slate-300 backdrop-blur-md p-2 w-full bg-white/80 rounded-full  focus:outline-slate-400 focus:shadow-sm focus:bg-white text-slate-400" ></div><div class="w-1/2 pt-4 "> <div class="">Phone no: </div> </div><div class="w-1/2 pt-4 "> <input type="number" name="phone" placeholder="type phone no" class="placeholder:text-slate-300 backdrop-blur-md p-2 w-full bg-white/80 rounded-full  focus:outline-slate-400 focus:shadow-sm focus:bg-white text-slate-400" ></div><div class="w-1/2 pt-4 "> <div class="">Mail:  </div> </div><div class="w-1/2 pt-4 "> <input type="text" name="mail" placeholder="type mail" class="placeholder:text-slate-300 backdrop-blur-md p-2 w-full bg-white/80 rounded-full  focus:outline-slate-400 focus:shadow-sm focus:bg-white text-slate-400" ></div><div class="w-1/2 pt-4 "> <div class="">City:</div> </div><div class="w-1/2 pt-4 pb-4"> <input type="text"  placeholder="type city" name="city" class="placeholder:text-slate-300 backdrop-blur-md p-2 w-full bg-white/80 rounded-full  focus:outline-slate-400 focus:shadow-sm focus:bg-white text-slate-400" ></div><p id="alerttt" class=" text-red-700"></p></form>';
    newdiv[divindex].querySelector(".insidenewdiv").innerHTML = box;
    newdiv[divindex].className ='newdiv flex flex-col sm:flex-row p-2 sm:p-6  rounded bg-white border-b-4 border-t-4  border-gray-500 text-lg transition ease-in-out';


    const editb = document.createElement("button");
    editb.onclick = function(){updateContact(divindex)};
    editb.className = " p-2  ml-2 grow-0 ";
    editb.innerHTML = '<i class="bi bi-check-circle text-gray-500 hover:text-black text-2xl"></i>';

    

    const viewb = document.createElement("button");
    viewb.onclick = function(){viewDetails(name,divindex)};
    viewb.className = "p-2 ml-2 grow-0";
    viewb.innerHTML = ' cancel';



    newdiv[divindex].querySelector(".sinsidenewdiv").innerHTML = "";
    newdiv[divindex].querySelector(".sinsidenewdiv").appendChild(editb);
    newdiv[divindex].querySelector(".sinsidenewdiv").appendChild(viewb);
}

function updateContact(divindex){

    var newdiv = document.querySelectorAll(".newdiv");

    var x = document.getElementById("editform").uname;

    var y = document.getElementById("editform").phone;

    var z = document.getElementById("editform").mail;

    var a = document.getElementById("editform").city;


    const formContact = {uname:x.value ,phone:y.value, mail:z.value, city:a.value};
    let uname = x.value;
    let phone = y.value;
    let mail = z.value;
    let city = a.value;

    
    para = "alerttt";
    

    
    
    if(checker(x,y,z,a,para) == 1)
    {
        if(confirm("Are you sure, you want to edit contact?"))
        {   contacts[divindex] = formContact;
            newdiv[divindex].className = "newdiv flex flex-col sm:flex-row p-2 sm:p-6  rounded bg-white/80 text-lg transition ease-in-out";



            const editb = document.createElement("button");
            editb.onclick = function(){showEditBox(uname)};
            editb.className = " p-2  ml-2 grow-0 ";
            editb.innerHTML = '<i class="bi bi-pencil-square text-gray-500 hover:text-black text-2xl"></i>';

            const deleteb = document.createElement("button");
            deleteb.onclick = function(){deleteThisRow(uname)};
            deleteb.className = "p-2  ml-2 grow-0";
            deleteb.innerHTML = '<i class="bi bi-x-circle text-gray-500 hover:text-black text-2xl"></i>    ';

            const viewb = document.createElement("button");
            viewb.onclick = function(){viewless(uname)};
            viewb.className = "p-2 ml-2 grow-0";
            viewb.innerHTML = ' <i class="bi bi-info-circle-fill text-gray-500 hover:text-black text-2xl"></i>';





            const insidenewdiv = document.createElement("div");
            insidenewdiv.className = "insidenewdiv flex items-center pl-4 sm:pl-12 w-full sm:basis-3/5";
            insidenewdiv.innerHTML = "Username: " + uname + "<br><br>" + "Phone: " + phone +  "<br><br>" + "Mail: " + mail + "<br><br>" +"City: " + city; 


            const sinsidenewdiv = document.createElement("div");
            sinsidenewdiv.className = " sinsidenewdiv w-full flex justify-between sm:basis-2/5 ";
            sinsidenewdiv.appendChild(editb);
            sinsidenewdiv.appendChild(deleteb);
            sinsidenewdiv.appendChild(viewb);

            newdiv[divindex].innerHTML = "";


            newdiv[divindex].appendChild(insidenewdiv);
            newdiv[divindex].appendChild(sinsidenewdiv);
        }
    }




    
}

function deleteThisRow(name)
{

    if(confirm('Are you sure you want to delete this contact?'))
    {
        
        
        var newdiv = document.querySelectorAll(".newdiv");
        let divindex = 0;


        for(var j =0; j < newdiv.length ; j++)
        {
            var present = newdiv[j].querySelector(".insidenewdiv").innerHTML.search(name);

            if (present != -1 )
            {
                divindex = j;
                newdiv[j].remove();


                break;

            }
        }
        var index =0;

        for(var j =0; j < contacts.length ; j++)
        {
            if(contacts[j].uname = name)
            {

                contacts[j].uname = "";

                
                break;
            }
            index = j;
        }
        for(var j = index  ; j <  contacts.length -1 ; j++)
        {
            contacts[j] = contacts[j+1];
        }

        contacts.pop();
        i--;    
    }
    else{
        let a = 0;
        a=1;
    }




}

function viewDetails(name,divindex)
{
    showContDiv();

    var newdiv = document.querySelectorAll(".newdiv");


    if(divindex == -2)
    {
        for(var j =0; j < newdiv.length ; j++)
        {
            var present = newdiv[j].querySelector(".insidenewdiv").innerHTML.search(name);


            if (present != -1 )
            {
                divindex = j;
                break;

            }
        }
    }

    for(var j =0; j < contacts.length ; j++)
    {
        if(contacts[j].uname == name)
        {
            var uname = contacts[j].uname;
            var phone = contacts[j].phone;
            var mail = contacts[j].mail;
            var city = contacts[j].city;
            break;
        }

    }

    newdiv[divindex].querySelector(".insidenewdiv").innerHTML = "Username: " + uname + "<br><br>" + "Phone: " + phone +  "<br><br>" + "Mail: " + mail + "<br><br>" +"City: " + city; 
    newdiv[divindex].className = "newdiv flex flex-col sm:flex-row p-2 sm:p-6  rounded bg-white/80 text-lg transition ease-in-out";

    const editb = document.createElement("button");
    editb.onclick = function(){showEditBox(name)};
    editb.className = " p-2  ml-2 grow-0 ";
    editb.innerHTML = '<i class="bi bi-pencil-square text-gray-500 hover:text-black text-2xl"></i>';

    const deleteb = document.createElement("button");
    deleteb.onclick = function(){deleteThisRow(name)};
    deleteb.className = "p-2  ml-2 grow-0";
    deleteb.innerHTML = '<i class="bi bi-x-circle text-gray-500 hover:text-black text-2xl"></i>    ';

    const viewb = document.createElement("button");
    viewb.onclick = function(){viewless(name)};
    viewb.className = "p-2 ml-2 grow-0";
    viewb.innerHTML = ' <i class="bi bi-info-circle-fill text-gray-500 hover:text-black text-2xl"></i>';

    newdiv[divindex].querySelector(".sinsidenewdiv").innerHTML = "";
    newdiv[divindex].querySelector(".sinsidenewdiv").appendChild(editb);
    newdiv[divindex].querySelector(".sinsidenewdiv").appendChild(deleteb);
    newdiv[divindex].querySelector(".sinsidenewdiv").appendChild(viewb);

}

function viewless(name){
    var newdiv = document.querySelectorAll(".newdiv");
    let divindex = 0;
    


    for(var j =0; j < newdiv.length ; j++)
    {
        var present = newdiv[j].querySelector(".insidenewdiv").innerHTML.search(name);


        if (present != -1 )
        {
            divindex = j;
            break;

        }
    }

    for(var j =0; j < contacts.length ; j++)
    {
        if(contacts[j].uname == name)
        {
            var uname = contacts[j].uname;
            var phone = contacts[j].phone;
            var city = contacts[j].city;
            break;
        }

    }

    newdiv[divindex].querySelector(".insidenewdiv").innerHTML = uname + "&emsp;&emsp;" + phone ;

    newdiv[divindex].className = "newdiv flex flex-col sm:flex-row p-2 sm:p-6  rounded bg-white/80 text-lg transition ease-in-out";

    const editb = document.createElement("button");
    editb.onclick = function(){showEditBox(name)};
    editb.className = " p-2  ml-2 grow-0 ";
    editb.innerHTML = '<i class="bi bi-pencil-square text-gray-500 hover:text-black text-2xl"></i>';

    const deleteb = document.createElement("button");
    deleteb.onclick = function(){deleteThisRow(name)};
    deleteb.className = "p-2  ml-2 grow-0";
    deleteb.innerHTML = '<i class="bi bi-x-circle text-gray-500 hover:text-black text-2xl"></i>    ';

    const viewb = document.createElement("button");
    viewb.onclick = function(){viewDetails(name, divindex) } ;
    viewb.className = " p-2  ml-2 grow-0";
    viewb.innerHTML = ' <i class="bi bi-info-circle text-gray-500 hover:text-black text-2xl"></i>';

    newdiv[divindex].querySelector(".sinsidenewdiv").innerHTML = "";
    newdiv[divindex].querySelector(".sinsidenewdiv").appendChild(editb);
    newdiv[divindex].querySelector(".sinsidenewdiv").appendChild(deleteb);
    newdiv[divindex].querySelector(".sinsidenewdiv").appendChild(viewb);
}


function searchcont(){

    showContDiv();
    var nameans = document.getElementById("search").uname;

    let name = nameans.value;
    



    var divindex = -1;
    let j = 0;
    while(j < contacts.length)
    {





        if (name == contacts[j].uname)
        {
            divindex = j;
            break;
        }
        j++;
        
    }
    
    viewDetails(name, divindex);
}

function autoadd()
{
    contacts.push({uname:'Anaadi' ,phone:"7986476794", mail:'anaadirampal@gmail.com', city:'Hoshiarpur'});
    contacts.push({uname:'Bhavya' ,phone:4325645565, mail:'bhavya2344@gmail.com', city:'Toronto'});
    contacts.push({uname:'Akul' ,phone:5454674564, mail:'akul2545@gmail.com', city:'Sydney'});
    contacts.push({uname:'Neha' ,phone:5634534534, mail:'n23eha@gmail.com', city:'Jalandhar'});
    contacts.push({uname:'Amit' ,phone:7685644564, mail:'amitkumar@gmail.com', city:'Citadel'});
    contacts.push({uname:'Aarushi' ,phone:8756567575, mail: 'aa11aarushi@gmail.com', city:'Bangalore'});
    contacts.push({uname:'Sambhav' ,phone:8675664342, mail:'mittalsambhav@gmail.com', city:'Chandigarh'});
    contacts.push({uname:'Zakir Khan' ,phone:8954567566, mail:'zakirkhan@gmail.com', city:'Ahmedabad'});
    contacts.push({uname:'Hemanshi' ,phone:9676534845, mail:'hemanshi5464g@gmail.com', city:'Chennai'});
    contacts.push({uname:'Raghvi' ,phone:6456764567, mail:'rumpalraghisd@gmail.com', city:'Gurgaon'});
    document.getElementById("autoadd").className = "hidden";
    i=10;


    showContDiv();


}

document.getElementById("searchinp").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior (e.g., form submission)
      searchcont(); // Call your desired function here
    }
  });






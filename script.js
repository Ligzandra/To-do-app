let firstName=$('#firstName')
    lastName=$('#lastName'),
    valfirst =$('#firstName')
    email=$('#email'),
    phone=$('#phone'),
    gender=$('#gender'),
    save=$('#save'),
    update=$('#update');
    clear=$('#clear');
    tb=$('.tb');
//initial global variables
let studentData=[];
let index;

//clear button
$(function (){
    $('#clear').click(function(){
        $('#firstName').val('');
        $('#lastName').val('');
        // $('#gender').val('');
        // $('#phone').val('');
        // $('#email').val('');
    })

})

//save button
save.click( function () {
    
    let studentobject ={
        "firstName": firstName.val(),
        "lastName": lastName.val(),
        // "email": email.val(),
        // "phone": phone.val(),
        // "gender": gender.val(),
        "strike": ""
}
studentData.push(studentobject);
localStorage.setItem("studentData",JSON.stringify(studentData));
$('#firstName').val('');
 $('#lastName').val('');
loadstudentData();
    
});


//update button
update.click(function (){
    if(index==null){
        alert('please edit a data before updating..')
    }else{
        let studentobject ={
            "firstName": firstName.val(),
            "lastName": lastName.val(),
            
        }
        studentData[index]=studentobject;
        loadstudentData();
    }    
})




tb.on('click', '.edit', function (){

    index = parseInt($(this).attr('index'))
    let firstNameD = $(this).attr('firstName');
    let lastNameD = $(this).attr('lastName');
    
    console.log(index);



    firstName.val(firstNameD)
    lastName.val(lastNameD)
  

})


tb.on('click', '.delete', function(){
    index=parseInt($(this).attr('index'));
    studentData.splice(index, 1);
    console.log(studentData);
    loadstudentData();
})

tb.on('click', '.strikeThrough', function(){
    index=parseInt($(this).attr('index'));
    let firstNameD = $(this).attr('firstName');
    let lastNameD = $(this).attr('lastName');
    let striked=$(this).attr('strike');
    studentData[index].strike='through';
    // $(".tcol").addClass("through")
    
    // studentData.addClass("through", index);
   
    // $(this).css({'text-decoration':'none'})
  
    // lastName.val(lastNameD)
    // studentData.strike(index);
    // console.log(studentData);
    // studentData.addClass("through");
    console.log(firstName.val);
    loadstudentData();
})

function loadstudentData(){
    let row='';

    for(let i=0; i<studentData.length;i++){
        console.log(studentData[i]);
            row+=` <div class="row ">
            <div class="tcol ${studentData[i].strike} " id="item${i}">${studentData[i].firstName}</div>
            <div class="tcol ${studentData[i].strike}">${studentData[i].lastName}</div>
         
            <div class="tcols"> 
            <a href="#" class="edit"
            index="${i}"
            firstName="${studentData[i].firstName}"
            lastName="${studentData[i].lastName}"
          
    
            >Edit</a> |
             <a href= "#" class="delete"
            index="${i}"
            firstName="${studentData[i].firstName}"
            lastName="${studentData[i].lastName}"
           
    
             >Delete</a>
             |
             <a href= "#" class="strikeThrough" 
            index="${i}"
            firstName="${studentData[i].firstName}"
            lastName="${studentData[i].lastName}"
           
    
             >Strike</a></div>
        </div>`;
        
        
    }
    tb.html(row);
}

    
   
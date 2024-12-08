const FriendAll =[];
const Friend = [
    {
        "Id" : 1,
        "Name" : "Person 1",
        "Age" : "18",
        "Gender": "M",
        "Img_url" :  "https://csedi.in/images/no_img.jpg"		 
    },
    {
        "Id" : 2,
        "Name" : "Person 2",
        "Age" : "20",
        "Gender": "F",
        "Img_url" :  "https://csedi.in/images/no_img.jpg"		 
    },
    {
        "Id" : 3,
        "Name" : "Person 3",
        "Age" : "23",
        "Gender": "M",
        "Img_url" :  "https://csedi.in/images/no_img.jpg"		 
    },
    {
        "Id" : 4,
        "Name" : "Person 4",
        "Age" : "24",
        "Gender": "F",
        "Img_url" :  "https://csedi.in/images/no_img.jpg"		 
    },
    {
        "Id" : 5,
        "Name" : "Person 5",
        "Age" : "24",
        "Gender": "F",
        "Img_url" :  "https://csedi.in/images/no_img.jpg"		 
    },
    {
        "Id" : 6,
        "Name" : "Person 6",
        "Age" : "24",
        "Gender": "M",
        "Img_url" :  "https://csedi.in/images/no_img.jpg"		 
    }
];

$(document).ready(function(){
    let str = "";
    let item = "";
    for (const element of Friend) {
        str += `<div class='Friend'>
                    <img src='${element.Img_url}' alt='person'>
                    <p class='text-Id'>${element.Id}</p>
                    <p class='text-name'>${element.Name}</p>
                    <p class='text-age'>${element.Age}</p>
                    <p class='text-gender'>${element.Gender}</p>
                    <button class='btn'
                    data-id='${element.Id}' 
                    data-name='${element.Name}' 
                    data-age='${element.Age}' 
                    data-gender='${element.Gender}' 
                    data-img='${element.Img_url}'>Follow
                    </button>
                </div>`;
    }
    $("#Friend_zone").html(str);

    $(".btn").click(function() {
         item = {
            "Id": $(this).data("id"),
            "Name": $(this).data("name"),
            "Age": $(this).data("age"),
            "Gender": $(this).data("gender"),
            "Img_url": $(this).data("img"),
             "Follow_Request":1
        };
        console.log(item);
        if(FriendAll.length == 0){
            FriendAll.push(item);

        }
        else{
            found = 0;
            for(FriendAllINONE of FriendAll){
                if(FriendAllINONE.id == item.Id){
                    FriendAllINONE.Follow_Request++;
                    found = 1;
                    break;
                }
            }
            if(found == 0){
            FriendAll.push(item);    
            }
        }
        console.log(FriendAll);
    });
    $(".Show_Request").click(function(){
        sessionStorage.setItem("FriendAll",JSON.stringify(FriendAll));
        location.href = "Follow_page.html";
    });
});

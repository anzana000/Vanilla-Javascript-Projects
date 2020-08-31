    $(document).ready(() => {
        $(".user").on('keyup', e => {
            let userName = e.target.value;
            
        $.ajax({
            url: 'https://api.github.com/users/' + userName,
            data: {
                client_id: '3912de45456afda40683',
               client_secret: '3c686e98198c057333fc5a8f0d2f7c5ebacecab0'      
                    }
        }).done(data => {
            $.ajax({
                url: 'https://api.github.com/users/' + userName + '/repos',
            data: {
                client_id: '3912de45456afda40683',
               client_secret: '3c686e98198c057333fc5a8f0d2f7c5ebacecab0',
               per_page: 5,
               sort: 'created:asc'      
                    } 
            }).done(repo => {
                $.each(repo, (index,rep) => {
                    $("#reposs").append(`
                   
                  
                    <div class = "row">
                   <div class = "col-md-3">
                   <a href = "${rep.html_url}" target = "_blank"> <strong>${rep.name}</strong></a>
                    </div>
                    <div class = "col-md-7">
                    <span class = " text-muted para">${rep.description}</span>
                    </div>
                    <div class = "col-md-2">
                    <span class = "text-muted para"><i class="far fa-star"></i>${rep.stargazers_count}</span>
                    </div>
        
                    </div>
                    <hr>
                    `);
                });
            });
            $("#cont").html(`
       
         <div class = "container">
            <div class = "row">
         <div class = "col-md-3">
         <h4>${data.login}</h4>
         
         <img src = "${data.avatar_url}" class = "thumbnail imgs"><br>
          <p class = "text-muted para">${data.bio}</p>
         <a href = "${data.html_url}" target = "_blank" class = "btn btn-primary btn-block">View Profile</a>
         </div>

         <div class = "col-md-9 content">
         <span class="badge  badge-primary">Followers:${data.followers}</span>
         <span class="badge  badge-secondary">Following:${data.following}</span>
        
<ul class = "list-group list-group-flush">
<li class = "list-group-item">Name: ${data.name}</li> 
<li class = "list-group-item">Email: ${data.email}</li> 
<li class = "list-group-item">Location: ${data.location}</li> 
<li class = "list-group-item">Company: ${data.company}</li> 
<li class = "list-group-item">Member Since: ${data.created_at}</li> 


</ul><br><br>
         
         
         </div>
         </div>
        
         <br><br><h3>Latest Repos</h3>
         <div id = "reposs" ></div>
         </div>
         

         
        
      


            `);
        });
        });
    });
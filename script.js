       
            function checkEmptyInput()
            {
                var isEmpty = false,
                    name = document.getElementById("userName").value,
                    email = document.getElementById("userEmail").value;
                    
            
                if(name === ""){
                    alert(" Name Connot Be Empty");
                    isEmpty = true;
                }
               
                else if(email === ""){
                    alert("Email Connot Be Empty");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
        
            function addHtmlTableRow()
            {
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                     cell3 = newRow.insertCell(2),
                    userName = document.getElementById("userName").value,
                    userEmail = document.getElementById("userEmail").value;
                
                   
                    cell2.innerHTML = userName;
                    cell3.innerHTML = userEmail;
                    
                   

                    selectedRowToInput();
                    document.getElementById("details").style.display = "none";
                }
          
            }
             function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                     
                      rIndex = this.rowIndex;
                      alert("Name " +document.getElementById("userName").value+" email  "+document.getElementById("userEmail").value);
                      
            
                    };
                }
            }
            selectedRowToInput();
            
                    
                
                 var btn=document.getElementsByTagName("button")[0];
                    btn.addEventListener("click",function(){
                    document.getElementById("details").style.display ='block';
                    })
                    
            
$(function(){
    var username = document.querySelector("#username");
    // var true1;
    var true2;
    var true3;
    $("#username").blur(function(){

        var _username = username.value;
        if(_username==''){
            $("#username").siblings('.correct').hide();
        }
        if(_username!==''&&!/^[1][3-9][\d]{9}$/.test(_username)){
            alert("请输入正确的手机号");
            $("#username").siblings('.correct').hide();
            return false;
        }else if(_username!==''){
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState===4){
                    var data = xhr.responseText;
                    if(data =="用户名已被注册。"){
                        $("#username").siblings('.correct').hide();
                        alert(data);
                    }else if(data =="可以使用"){
                        // var ture1 = true;
                        console.log(data)
                        $("#username").siblings('.correct').show();
                    }
                    
                }
            }.bind(this);
            xhr.open("POST","../api/verify.php",true);
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

            xhr.send(`username=${_username}`);
        }
    })


    var password = document.querySelector("#password");
    var password2 = document.querySelector("#password2");

    $("#password").blur(function(){
        var _password = password.value;
        if(_password!==''&&!/^[\d\D]{6,20}$/i.test(_password)){
            alert("请输入6-20位数的密码");
            return false;
        }else{
            true2 = true;
        }
    });

    $("#password2").blur(function(){
        var _password = password.value;
        var _password2 = password2.value;
        if(_password2!==''&&!/^[\d\D]{6,20}$/i.test(_password2)){
            alert("请输入6-20位数的密码");
            return false;
        }else{
            true3 = true;
        }
        if(_password !== _password2){
            alert("两次密码不一致，请重新输入。")
            $("#password2").siblings('.correct').hide();
            return false;
        }
        // if(_password == _password2&&_password2!=''&&_password!=''){
        //     $("#password").siblings('.correct').show();
        //     $("#password2").siblings('.correct').show();
        // }

    })


    $("button").click(function(){
        // console.log(true1);
        // console.log(true2);
        // console.log(true3);
        if(true3 == true&&true2 == true){
        
            console.log(111)
            var username = $("#username").val();
            var password = $("#password").val();

                $.ajax({
                    type:"POST",
                    url:"../api/register.php",
                    data:{username:username,password:password},
                    success:function(data){
                        alert(data);
                    }
                })

            
            }
    })
    


})
	













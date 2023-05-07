<template>
    <div>


<!-- Modal -->
<div class="modal " data-mdb-backdrop="false" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="p-3 d-flex justify-content-between">
            <div>
                <p class="text-muted">
                    Please add your account details
                </p>
            </div>
            <div>
                <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        </div>
        <div class="container">

            <div class="d-flex justify-content-center mb-3 row">
                  <input type="text" placeholder="Type your user name" class="p-2 col-md-12">
                  <input type="text" placeholder="Type your password name" class="p-2 col-md-12">
              <!-- <div>
                  <input type="text" placeholder="Type your password" class="p-2">
              </div> -->
            </div>
            <div class=" justify-content-center mb-3 row">
                <div class="col-md-11 d-flex justify-content-end mb-2">
                    <a href=""> Forget Password?</a>
                </div>
                <div class="col-md-11 d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-none loginBtn col-md-10">Login</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>

    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="css" scoped>
    .modal{
        position: absolute !important;
        top: 40px;
        left:150px ;
    }
    .modal-content{
        border-radius: 0px ;
        background-color: white;
    }
    #exampleModal {
        background-color: transparent!important;
    }
    input{
        width: 90%;
        border: none;
        border-bottom: 1px solid black;
    }
    input:focus{
        outline: none;
        border-bottom: #9448e1 4px solid;
        /* box-shadow: #572589 5px 5px 5px    !important; */
    }
    .loginBtn{
        background-color: #572589;
        border-radius: 0px;
        color: white;
    }
    .loginBtn:hover{
        
        background-color: #9f50ee;
        border-radius: 0px;
        color: white;
    }
    a{
        text-decoration: none;
        color: #572589;
    }
    a:hover{
        color: black;
        text-decoration: underline ;

    }
</style>
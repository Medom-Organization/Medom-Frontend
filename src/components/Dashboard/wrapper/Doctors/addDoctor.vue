<template>
  <div>
      <section class="content-header">
                        <div class="header-icon">
                            <i class="pe-7s-note2"></i>
                        </div>
                        <div class="header-title">
                            <form action="#" method="get" class="sidebar-form search-box pull-right hidden-md hidden-lg hidden-sm">
                                <div class="input-group">
                                    <input type="text" name="q" class="form-control" placeholder="Search...">
                                    <span class="input-group-btn">
                                        <button type="submit" name="search" id="search-btn" class="btn"><i class="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </form>  
                            <h1>Doctor</h1>
                            <small>Doctor list</small>
                            <ol class="breadcrumb hidden-xs">
                                <li><a href="index-2.html"><i class="pe-7s-home"></i> Home</a></li>
                                <li class="active">Dashboard</li>
                            </ol>
                        </div>
                    </section>
                    <!-- Main content -->
                    <section class="content">
                        <div class="row">
                            <!-- Form controls -->
                            <div class="col-sm-12">
                                <div class="panel panel-bd lobidrag">
                                    <div class="panel-heading">
                                        <div class="btn-group"> 
                                            <a class="btn btn-primary" href="table.html"> <i class="fa fa-list"></i>  Doctor List </a>  
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <form class="col-sm-12" v-if="!submitted"> 
                                            <div class="col-sm-6 form-group">
                                                <label>First Name</label>
                                                <input type="text" class="form-control" v-model="meta.firstName" placeholder="Enter firstname" required>
                                            </div>
                                            <div class="col-sm-6 form-group">
                                                <label>Last Name</label>
                                                <input type="text" class="form-control" v-model="meta.lastName" placeholder="Enter Lastname" required>
                                            </div>
                                            <div class="col-sm-6 form-group">
                                                <label>Email</label>
                                                <input type="email" class="form-control" v-model="meta.eMail" placeholder="Enter Email" required>
                                            </div>
                                            <div class="col-sm-6 form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" v-model="meta.password" placeholder="Enter password" required>
                                            </div>
                                            <div class="col-sm-6 form-group">
                                                <label>Designation</label>
                                                <input type="text" class="form-control" v-model="meta.designation" placeholder="Enter Designation" required>
                                            </div>

                                            <div class="col-sm-6 form-group">
                                                <label>Department</label>
                                                <select class="form-control" id="exampleSelect1" name="select" size="1">
                                                    <option  selected class="test">Neurology</option>
                                                    <option>Gynaecology</option>
                                                    <option>Microbiology</option>
                                                    <option>Pharmacy</option>
                                                    <option>Neonatal</option>
                                                </select>
                                            </div>

                                            <div class="col-sm-6 form-group">
                                                <label>Address</label>
                                                <input type="text" class="form-control" v-model="meta.address" placeholder="Address" required>
                                            </div>
                                            <div class="col-sm-6 form-group">
                                                <label>Specialist</label>
                                                <input type="text" class="form-control" v-model="meta.specialist" placeholder="Specialist" required>
                                            </div>
                                            <div class="col-sm-6 form-group">
                                                <label>Mobile</label>
                                                <input type="number" class="form-control" v-model="meta.mobile" placeholder="Enter Mobile" required>
                                            </div>

                                            <div class="col-sm-6 form-group">
                                                <label >Picture upload</label>
                                                <input type="file" name="picture" id="picture">
                                            </div>  
                                            <div class="col-sm-12 form-group">
                                                <label>Short Biography</label>
                                                <textarea id="some-textarea" class="form-control" v-model="meta.bio" rows="3" placeholder="Enter text ..."></textarea>
                                            </div>        
                                            <div class="col-sm-6 form-group">
                                                <label>Date of Birth</label>
                                                <input name="date_of_birth" class="datepicker form-control hasDatepicker" v-model="meta.dob" type="text" placeholder="Date of Birth" id="date_of_birth">
                                            </div>
                                            <div class="col-sm-6 form-group">
                                                <label>Blood group</label>
                                                <select class="form-control" id="exampleSelect">
                                                    <option>A+</option>
                                                    <option>AB+</option>
                                                    <option>O+</option>
                                                    <option>AB-</option>
                                                    <option>B+</option>
                                                    <option>A-</option>
                                                    <option>B-</option>
                                                    <option>O-</option>
                                                </select>
                                            </div>

                                            <div class="col-sm-6 form-group">
                                             <label>Sex</label><br>
                                             <label class="radio-inline">
                                                 <input type="radio" name="sex" value="1" checked="checked">Male</label> 
                                                 <label class="radio-inline"><input type="radio" name="sex" value="0" >Female</label>
                                             </div>
                                             <div class="col-sm-6 form-check">
                                              <label>Status</label><br>
                                              <label class="radio-inline"><input type="radio" name="status" value="1" checked="checked">Active</label> 
                                              <label class="radio-inline">
                                                  <input type="radio" name="status" value="0" >Inctive</label>  
                                              </div> 

                                              <div class="col-sm-12 reset-button">
                                                 <a href="#" class="btn btn-warning">Reset</a>
                                                 <a href="#" class="btn btn-success" v-on:click.prevent="post">Save</a>
                                             </div>
                                         </form>
                                         <div v-if="!submitted"> 
                                             <h3> Thanks for Adding </h3>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         
                     </section> <!-- /.content -->
  </div>
                
</template>

<script>
export default {
     data () {
    return {
        meta:{
            firstName: "",
            lastName: "",
            eMail: "",
            password: "",
            designation: "",
            address: "",
            specialist: "",
            mobile: "",
            bio: "",
            dob: ""
        },
        submitted: false, 
    }
  },
      methods: {
          post: function(){
              this.$http.post('http://medom-dashboard.firebaseio.com/data',{
                firstName: this.meta.firstName,
                lastName: this.meta.lastName,
                eMail: this.meta.eMail,
                password: this.meta.password,
                designation: this.meta.designation,
                address: this.meta.address,
                specialist: this.meta.specialist,
                mobile: this.meta.mobile,
                bio: this.meta.bio,
                dob: this.meta.dob,
                userId: 1
              }).then(function(data){
                  this.submitted = true; 
              });
          }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

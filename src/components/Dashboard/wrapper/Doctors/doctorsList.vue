<template>
  <div>
      <section class="content-header">
                        <div class="header-icon">
                            <i class="pe-7s-box1"></i>
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
                            <div class="col-sm-12">
                                <div class="panel panel-bd lobidrag">
                                    <div class="panel-heading">
                                        <div class="btn-group"> 
                                            <a class="btn btn-success" href="forms_basic.html"> <i class="fa fa-plus"></i> Add Doctor
                                            </a>  
                                        </div>        
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="panel-header">
                                                <div class="col-sm-4 col-xs-12">
                                                    <div class="dataTables_length">
                                                        <label>Display 
                                                            <select name="example_length">
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                            </select> records per page</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4 col-xs-12">
                                                        <div class="dataTables_length">
                                                         <a class="btn btn-default buttons-copy btn-sm" tabindex="0">
                                                             <span>Copy</span></a>
                                                             <a class="btn btn-default buttons-csv buttons-html5 btn-sm" tabindex="0"><span>CSV</span></a>
                                                             <a class="btn btn-default buttons-excel buttons-html5 btn-sm" tabindex="0"><span>Excel</span></a>
                                                             <a class="btn btn-default buttons-pdf buttons-html5 btn-sm" tabindex="0"><span>PDF</span></a>
                                                             <a class="btn btn-default buttons-print btn-sm" tabindex="0"><span>Print</span></a>
                                                             
                                                         </div>
                                                     </div>
                                                     <div class="col-sm-4 col-xs-12">
                                                        <div class="dataTables_length">
                                                            <div class="input-group custom-search-form">
                                                                <input type="search" class="form-control" placeholder="search..">
                                                                <span class="input-group-btn">
                                                                  <button class="btn btn-primary" type="button">
                                                                      <span class="glyphicon glyphicon-search"></span>
                                                                  </button>
                                                              </span>
                                                          </div><!-- /input-group -->
                                                      </div>
                                                  </div>
                                              </div>

                                          </div>
                                          <div class="table-responsive">
                                            <table class="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Serial No</th>
                                                        <th>Picture</th>
                                                        <th>First Name</th>
                                                        <th>last Name</th>
                                                        <th>Department</th>
                                                        <th>Email</th>
                                                        <th>Mobile No</th>
                                                        <th>Phone </th>
                                                        <th>Price </th>
                                                        <th>Update</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr >  
                                                     <td>
                                                         <input type="radio" name="radioGroup">
                                                         <label>1</label>   
                                                     </td>
                                                     <td><img src="assets/dist/img/d3.png" class="img-circle" alt="User Image" height="50" width="50"></td>
                                                     <td>Alimul</td>
                                                     <td>alrazy</td>
                                                     <td>Neurology</td>
                                                     <td><a href="http://thememinister.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dcb1a9aea8bda69ca8b4b9b1b9b1b5b2b5afa8b9aef2bfb3b1">[email&#160;protected]</a></td>
                                                     <td>019833333222</td>
                                                     <td>019833333222</td>
                                                     <td>$43</td>
                                                     <td>
                                                        <button type="button" class="btn btn-info btn-xs" data-toggle="modal" data-target="#ordine"><i class="fa fa-pencil"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-target="#ordine"><i class="fa fa-trash-o"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td><input type="radio" name="radioGroup">
                                                       <label>2</label>   
                                                   </td>
                                                   <td><img src="assets/dist/img/d3.png" class="img-circle" alt="User Image" height="50" width="50"></td>
                                                   <td>Alimul</td>
                                                   <td>alrazy</td>
                                                   <td>Neurology</td>
                                                   <td><a href="http://thememinister.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="86ebf3f4f2e7fcc6f2eee3ebe3ebefe8eff5f2e3f4a8e5e9eb">[email&#160;protected]</a></td>
                                                   <td>019833333222</td>
                                                   <td>019833333222</td>
                                                   <td>$43</td>
                                                   <td>
                                                    <button type="button" class="btn btn-info btn-xs" data-toggle="modal" data-target="#ordine"><i class="fa fa-pencil"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-target="#ordine"><i class="fa fa-trash-o"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            
                                            <tr >
                                                <td><input type="radio" name="radioGroup">
                                                   <label>3</label>   
                                               </td>
                                               <td><img src="assets/dist/img/d3.png" class="img-circle" alt="User Image" height="50" width="50"></td>
                                               <td>Alimul</td>
                                               <td>alrazy</td>
                                               <td>Neurology</td>
                                               <td><a href="http://thememinister.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="fe938b8c8a9f84be8a969b939b939790978d8a9b8cd09d9193">[email&#160;protected]</a></td>
                                               <td>019833333222</td>
                                               <td>019833333222</td>
                                               <td>$43</td>
                                               <td>
                                                <button type="button" class="btn btn-info btn-xs" data-toggle="modal" data-target="#ordine"><i class="fa fa-pencil"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-target="#ordine"><i class="fa fa-trash-o"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr >
                                            <td><input type="radio" name="radioGroup">
                                               <label>4</label>   
                                           </td>
                                           <td><img src="assets/dist/img/d2.png" class="img-circle" alt="User Image" height="50" width="50"></td>
                                           <td>Alimul</td>
                                           <td>alrazy</td>
                                           <td>Neurology</td>
                                           <td><a href="http://thememinister.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b3dec6c1c7d2c9f3c7dbd6ded6dedadddac0c7d6c19dd0dcde">[email&#160;protected]</a></td>
                                           <td>019833333222</td>
                                           <td>019833333222</td>
                                           <td>$43</td>
                                           <td>
                                            <button type="button" class="btn btn-info btn-xs" data-toggle="modal" data-target="#ordine"><i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-target="#ordine"><i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                        
                                    </tr>
                                    <tr >
                                       <td><input type="radio" name="radioGroup">
                                           <label>5</label>   
                                       </td>
                                       <td><img src="assets/dist/img/d4.png" class="img-circle" alt="User Image" height="50" width="50"></td>
                                       <td>Alimul</td>
                                       <td>alrazy</td>
                                       <td>Neurology</td>
                                       <td><a href="http://thememinister.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="701d050204110a300418151d151d191e19030415025e131f1d">[email&#160;protected]</a></td>
                                       <td>019833333222</td>
                                       <td>019833333222</td>
                                       <td>$43</td>

                                       <td>
                                        <button type="button" class="btn btn-info btn-xs" data-toggle="modal" data-target="#ordine"><i class="fa fa-pencil"></i>
                                        </button>
                                        <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-target="#ordine"><i class="fa fa-trash-o"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="page-nation text-right">
                        <ul class="pagination pagination-large">
                            <li class="disabled"><span>«</span></li>
                            <li class="active"><span>1</span></li>
                            <li><a href="#">2</a></li>
                            <li class="disabled"><span>...</span></li><li>
                            <li><a rel="next" href="#">Next</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </div>
</section> <!-- /.content -->
<div id="ordine" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content ">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">×</button>
        <h4 class="modal-title">Update table</h4>
    </div>
    <div class="modal-body">
        <div class="panel panel-bd lobidrag">
            <div class="panel-heading">
                <div class="btn-group"> 
                    <a class="btn btn-primary" href="table.html"> <i class="fa fa-list"></i>  Doctor List </a>  
                </div>
            </div>
            <div class="panel-body">

                <form class="col-sm-12">
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="Enter First Name" required>
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Enter last Name" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Enter Email" required>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Enter password" required>
                    </div>
                    <div class="form-group">
                        <label>Designation</label>
                        <input type="text" class="form-control" placeholder="Enter Designation" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Department</label>
                        <select class="form-control" name="select" size="1">
                            <option selected class="test">Neurology</option>
                            <option>Gynaecology</option>
                            <option>Microbiology</option>
                            <option>Pharmacy</option>
                            <option>Neonatal</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Address</label>
                        <textarea class="form-control" id="exampleTextarea" rows="3" required></textarea>
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="number" class="form-control" placeholder="Enter Phone number" required>
                    </div>
                    <div class="form-group">
                        <label>Mobile</label>
                        <input type="number" class="form-control" placeholder="Enter Mobile" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Picture upload</label>
                        <input type="file" name="picture" id="picture">
                        <input type="hidden" name="old_picture">
                    </div>

                    <div class="form-group">
                        <label>Short Biography</label>
                        <textarea id="some-textarea" class="form-control" rows="6" placeholder="Enter text ..."></textarea>
                    </div>
                    <div class="form-group">
                        <label>Specialist</label>
                        <input type="text" class="form-control" placeholder="Specialist" required>
                    </div>
                    <div class="form-group">
                        <label>Date of Birth</label>
                        <input name="date_of_birth" class="datepicker form-control hasDatepicker" type="text" placeholder="Date of Birth">
                    </div>
                    <div class="form-group">
                        <label>Blood group</label>
                        <select class="form-control">
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
                    
                    <div class="form-group">
                     <label>Sex</label><br>
                     <label class="radio-inline">
                         <input type="radio" name="sex" value="1" checked="checked">Male</label> 
                         <label class="radio-inline"><input type="radio" name="sex" value="0" >Female</label>                                     
                         
                     </div>
                     <div class="form-check">
                      <label>Status</label><br>
                      <label class="radio-inline">
                       <input type="radio" name="status" value="1" checked="checked">Active</label>
                       <label class="radio-inline">
                          <input type="radio" name="status" value="0" >Inctive
                      </label>
                  </div>                                       
                  
                  <div class="reset button">
                     <a href="#" class="btn btn-primary">Reset</a>
                     <a href="#" class="btn btn-success">Save</a>
                 </div>
             </form>
         </div>
     </div>

 </div>
 <div class="modal-footer">
    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
</div>
</div>

</div>
</div>

  </div>
                
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

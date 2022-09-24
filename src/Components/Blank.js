import React from "react";
import SideBar from "./Sidebar";
import Topbar from "./Topbar";


function Blank(){
    return(
        <div id="wrapper">
            <SideBar />

        {/* <!-- Sidebar -->
          
        <!-- End of Sidebar -->

        <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">
            <Topbar />

                {/* <!-- Topbar --> */}
               
                {/* <!-- End of Topbar -->

                <!-- Begin Page Content --> */}
                <div class="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>

                </div>
                {/* <!-- /.container-fluid --> */}

            </div>
            </div>
            </div>
           

    );
};
export default Blank;
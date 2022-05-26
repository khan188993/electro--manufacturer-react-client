import React,{useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const Dashboard = () => {
   const [isAdmin, setIsAdmin] = useState(true);
   const [user] = useAuthState(auth);

   return (
      <section className="dashboard">
         <div class="drawer drawer-mobile px-12">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
               <Outlet />
               {/* <!-- Page content here --> */}
            </div>
            <div class="drawer-side">
               <label for="my-drawer-2" class="drawer-overlay"></label>
               <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                  {/* <!-- Sidebar content here --> */}

                  {/* normal user  = my orders,add a review */}
                  <li className="mb-4">
                     <Link to="/dashboard/my-profile" className="btn btn-accent">
                        My Profile
                     </Link>
                  </li>
                  {user.displayName && (
                     <>
                        <li className="mb-4">
                           <Link to="/dashboard/my-orders" className="btn btn-accent">
                              My Orders
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link to="/dashboard/add-review" className="btn btn-accent">
                              Add Review
                           </Link>
                        </li>
                     </>
                  )}

                  {isAdmin && (
                     <>
                        <li className="mb-4">
                           <Link to="/dashboard/manage-all-order" className="btn btn-accent">
                              Manage All Orders
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link to="/dashboard/manage-users" className="btn btn-accent">
                              Manage Users
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link to="/dashboard/make-admin" className="btn btn-accent">
                              Make Admin
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link to="/dashboard/manage-products" className="btn btn-accent">
                              Manage Products
                           </Link>
                        </li>
                     </>
                  )}
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Dashboard;

import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Dashboard() {
  return (
     <main>
          
          <div className="page_title d-flex justify-content-between align-items-center">
               <h3 className='mb-0'>Dashboard</h3>
               <div className='breadcrumb mb-0'>
                    <Link to='/'>Home</Link>
                    <Link className='active'>Dashboard</Link>
               </div>
          </div>

          <div className="container-fluid">
               <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                         <Card bg={'primary'} className="mb-2 text-white">
                              <Card.Body>
                                   <Card.Title className='fs-2'> 150 </Card.Title>
                                   <Card.Text>
                                        New Orders
                                   </Card.Text>
                              </Card.Body>
                              <Card.Footer className='text-center'>
                                   <small>More Info</small>
                              </Card.Footer>
                         </Card>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                         <Card bg={'success'} className="mb-2 text-white">
                              <Card.Body>
                                   <Card.Title className='fs-2'> 150 </Card.Title>
                                   <Card.Text>
                                        New Orders
                                   </Card.Text>
                              </Card.Body>
                              <Card.Footer className='text-center'>
                                   <small>More Info</small>
                              </Card.Footer>
                         </Card>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                         <Card bg={'warning'} className="mb-2 text-dark">
                              <Card.Body>
                                   <Card.Title className='fs-2'> 150 </Card.Title>
                                   <Card.Text>
                                        New Orders
                                   </Card.Text>
                              </Card.Body>
                              <Card.Footer className='text-center'>
                                   <small>More Info</small>
                              </Card.Footer>
                         </Card>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                         <Card bg={'danger'} className="mb-2 text-white">
                              <Card.Body>
                                   <Card.Title className='fs-2'> 150 </Card.Title>
                                   <Card.Text>
                                        New Orders
                                   </Card.Text>
                              </Card.Body>
                              <Card.Footer className='text-center'>
                                   <small>More Info</small>
                              </Card.Footer>
                         </Card>
                    </div>
               </div>
          </div>

     </main>  
  )
}

export default Dashboard
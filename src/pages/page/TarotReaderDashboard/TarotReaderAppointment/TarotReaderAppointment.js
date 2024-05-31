import "./TarotReaderAppointment.css";

function TarotReaderAppointment() {
    return (  
        <div>
            <div class="row">
                <h1 className="title">Lịch hẹn</h1>
            </div>
            <div class="row">
                <div class="col-12 mt-4">
                    <div class="table-responsive bg-white shadow rounded">
                        <table class="table mb-0 table-center">
                            <thead>
                                <tr>
                                    <th className="border-bottom p-3" style={{ minWidth: '50px' }}>#</th>
                                    <th className="border-bottom p-3" style={{ minWidth: '180px' }}>Tên</th>
                                    <th className="border-bottom p-3">Tuổi</th>
                                    <th className="border-bottom p-3">Giới tính</th>
                                    <th className="border-bottom p-3">Số điện thoại</th>
                                    <th className="border-bottom p-3" style={{ minWidth: '150px' }}>Ngày</th>
                                    <th className="border-bottom p-3">Thời gian</th>                                    
                                    <th className="border-bottom p-3">Gói dịch vụ</th>
                                    <th className="border-bottom p-3" style={{ minWidth: '150px' }}>Trạng thái</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th class="p-3">1</th>
                                    <td class="p-3">Nguyen Van B</td>
                                    <td class="p-3">25</td>
                                    <td class="p-3">Male</td>
                                    <td class="p-3">012345678</td>
                                    <td class="p-3">20th Dec 2020</td>
                                    <td class="p-3">11:00AM</td>                                
                                    <td class="p-3">$50</td>
                                    <td class="text-end p-3">
                                        {/* <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewappointment"><i class="uil uil-eye"></i></a>
                                        <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#acceptappointment"><i class="uil uil-check-circle"></i></a>
                                        <a href="#" class="btn btn-icon btn-pills btn-soft-danger" data-bs-toggle="modal" data-bs-target="#cancelappointment"><i class="uil uil-times-circle"></i></a> */}
                                    </td>
                                </tr>
                                
                                <tr>
                                    <th class="p-3">2</th>
                                    <td class="p-3">Nguyen Van A</td>
                                    <td class="p-3">28</td>
                                    <td class="p-3">Female</td>
                                    <td class="p-3">012345679</td>
                                    <td class="p-3">20th Dec 2020</td>
                                    <td class="p-3">11:00AM</td>
                                    <td class="p-3">$50</td>
                                    <td class="text-end p-3">
                                        {/* <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewappointment"><i class="uil uil-eye"></i></a>
                                        <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#acceptappointment"><i class="uil uil-check-circle"></i></a>
                                        <a href="#" class="btn btn-icon btn-pills btn-soft-danger" data-bs-toggle="modal" data-bs-target="#cancelappointment"><i class="uil uil-times-circle"></i></a> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarotReaderAppointment;
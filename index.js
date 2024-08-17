// NV 1: Thực hiện tạo 1 sự kiện click cho button tính tiền và do
// m tới các input lấy dữ liệu.
// Tính tiền grab
// Có 3 loại grab: Grab car , Grab SUV, grab black.

//Bảng giá

//Theo km          | Grab Car  | Grab SUV  | Grab Black |
//km dau tien      |  8000     |  9000     |   10.000   |
// tu 1 - > 19     |  7.500    |  8.500    |   9.500    |
// tu 19 km        |  7000     |   8000    |   9000     |
// tg cho tren 3p  | 2000      |  3000     |   3.500    |

// NV2 : viết 4 functions riêng biệt có nhận tham số để từ các dữ liệu người dùng nhập sẽ xử lí trả về giá KmDauTien, giá KmTu1Den19 và giá KmTu19TroLen

// NV3: Sau khi tìm được giá tiền phù hợp, áp dụng tính toán và trả về kết quả phù hợp nhất.

// NV4: Kiểm tra ở phần dưới button tính tiền có 1 layout dùng để hiển thị tổng tiền, xử lú khi click vô nút tính tiền sẽ xuất hiện layout đó và trả kết quả ( đã chuyển đổi kiểu tiền tệ) vào bên trong để hiển thị người dùng.

//Tạo onlick function tới nút tính tiền.

// Tạo hằng số để khi có sự thay đổi về tên những field trên frontend mình ko phải đi tìm đến từng nơi để thay đổi mà chỉ cần thay đổi value của const.
const GRAB_CAR = "grabCar";
const GRAB_SUV = "grabSUV";
const GRAB_BLACK = "grabBlack";

// Function dau tien: Tinh gia Km dau tien.
function giaKmDauTien(loaiXe) {
  // sử dụng switch case khi loại xe có giá trị rõ ràng và rõ các loại xe.
  switch (loaiXe) {
    // case voi value cua tung loai xe, sử dụng hằng số
    case GRAB_CAR: {
      // return giá km đầu tiên
      return 8000;
    }

    case GRAB_SUV: {
      return 9000;
    }
    case GRAB_BLACK: {
      return 10000;
    }
  }
}

// Function thu hai: Tinh gia km tu 1 den 19.
function giaKmTu1Den19(loaiXe) {
  // sử dụng switch case khi loại xe có giá trị rõ ràng và rõ các loại xe.
  switch (loaiXe) {
    // case voi value cua tung loai xe, sử dụng hằng số
    case GRAB_CAR: {
      // return giá km đầu tiên
      return 7500;
    }

    case GRAB_SUV: {
      return 8500;
    }
    case GRAB_BLACK: {
      return 9500;
    }
  }
}

// Function thu ba: Tinh gia km tu 19 tro len.
function giaKmTu19TroLen(loaiXe) {
  // sử dụng switch case khi loại xe có giá trị rõ ràng và rõ các loại xe.
  switch (loaiXe) {
    // case voi value cua tung loai xe, sử dụng hằng số
    case GRAB_CAR: {
      // return giá km đầu tiên
      return 7000;
    }

    case GRAB_SUV: {
      return 8000;
    }
    case GRAB_BLACK: {
      return 9000;
    }
  }
}

// Function thu tu: Tinh gia thoi gian cho.

function giaThoiGianCho(loaiXe) {
  // sử dụng switch case khi loại xe có giá trị rõ ràng và rõ các loại xe.
  switch (loaiXe) {
    // case voi value cua tung loai xe, sử dụng hằng số
    case GRAB_CAR: {
      // return giá km đầu tiên
      return 2000;
    }

    case GRAB_SUV: {
      return 3000;
    }
    case GRAB_BLACK: {
      return 3500;
    }
  }
}

document.getElementById("btntinhTien").onclick = function () {
  // console.log("Toi da bi tinh tien");
  //tạo biến lấy dữ liệu của số Km cho field nhập vào số Km với id là "txt-km"
  let soKm = document.getElementById("txt-km").value * 1;
  //tạo biến lấy dữ liệu thời gian chờ cho field nhập vào tgian chờ với id là "txt-ThoiGianCho"
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;

  //tạo biến lấy value của nút radio buttons của 3 loại xe. do input có type radio thì phải dùng checked xem người dùng có bấm vào nút radio hay ko.
  //đối với input có type = radio, dùng querySelector, gọi tới field input trước,
  // giới hạn input muốn lấy ra bằng cặp dấu ngoặc vuông gọi tới name = selector  [ ] truyền vào tên thuộc tính cần xác định.
  // nó chỉ gọi phần tử, input đầu tiên, để xác định được input mà người dùng bấm vào, thêm :checked để giúp xác định input nào đc ng dùng bấm vào.

  let loaiXeGrabCar = document.querySelector("input[name='selector']:checked");

  // Tạo thông báo khi chưa có loại xe nào đang chọn.
  console.log(loaiXeGrabCar);
  if (loaiXeGrabCar == null) {
    alert("Vui lòng chọn loại xe");
    return;
  }

  let loaiXe = loaiXeGrabCar.value;
  let tienkmDauTien = giaKmDauTien(loaiXe);
  let tienKmTu1Den19 = giaKmTu1Den19(loaiXe);
  let tienKmTu19TroLen = giaKmTu19TroLen(loaiXe);
  let tienThoiGianCho = giaThoiGianCho(loaiXe);

  let tongTien = 0;

  if (soKm <= 19) {
    // lấy giá Km đầu tiên x với giá tiền Km đầu tiên của loại xe
    tongTien = 1 * tienkmDauTien + (soKm - 1) * tienKmTu1Den19; // lấy số Km ngta đi - 1 số Km đã tính đầu tiên.
  } else {
    // đi 25 km, 1km đã * với ố tiền Km đầu tiên rồi,
    tongTien =
      1 * tienkmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen;
  }

  // thời gian chờ: 8p
  // 3p đầu tiên ko tính tiền phạt
  // còn lại 5p
  // mỗi 3p tính 2000k
  // còn lại 2p
  // 5p / 3p còn phần dư = 1,6666666
  // làm tròn đoạn code, làm tròn xuống vì chưa đủ 3p.
  let soLanPhat = Math.floor((thoiGianCho - 3) / 3); // Hàm math.floor để làm tròn xuống
  // console.log(soLanPhat);

  tongTien += soLanPhat * tienThoiGianCho; // Tính tổng số tiền phạt
  console.log(tongTien);

  //Format theo vnd
  let formattedTong = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(tongTien);

  // xử lý để hiển thị lên frontend.

  // let result = "<div id='divThanhTien' class='dongia'"
  // result += "<p>Thành tiền: = " + formattedTong  + "</p>";
  // result += "</div>";

  document.querySelector(".dongia").style.display = "block";
  document.getElementById("xuatTien").innerHTML = formattedTong;
};

// in hóa đơn.
document.getElementById("btnInHoaDon").onclick = function () {
  let loaiXe = document.querySelector("input[name='selector']:checked");
  if (loaiXe == null) {
    alert(`Vui lòng chọn loại xe Grab`);
    return;
  }

  let loaiXeGrabCar = loaiXe.value;
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;

  let soKm1 = 0;
  let soKm2 = 0;
  let soKm3 = 0;

  if (soKm <= 19) {
    if (soKm <= 1) {
      soKm1 = soKm;
    } else {
      soKm1 = 1;
      soKm2 = soKm - 1;

    }
  } else {
    soKm1 = 1;
    soKm2 = 19 - 1;
    soKm3 = soKm - 19;
  }

  let ThoiGianChoSau3P = 0;

  if (thoiGianCho <= 3) {
    ThoiGianChoSau3P = 0;
  } else {
    ThoiGianChoSau3P = thoiGianCho - 3;
  }
  //đơn giá
  let donGiaKmDauTien = giaKmDauTien(loaiXeGrabCar);
  let donGiaKmTu1Den19 = giaKmTu1Den19(loaiXeGrabCar);
  let donGiaKmTu19TroLen = giaKmTu19TroLen(loaiXeGrabCar);
  let donGiaThoiGianCho = giaThoiGianCho(loaiXeGrabCar);
  let thanhTien1 = soKm1 * donGiaKmDauTien;
  let thanhTien2 = soKm2 * donGiaKmTu1Den19;
  let thanhTien3 = soKm3 * donGiaKmTu19TroLen;
  // thành tiền

  let soLanPhat = 0;
  if (thoiGianCho <= 3) {
    soLanPhat = 0;
  } else {
    soLanPhat = ((thoiGianCho - 3) / 3);
  }

  let thanhTien4 = soLanPhat * donGiaThoiGianCho;

  // Tổng tiền

  let total = thanhTien1 + thanhTien2 + thanhTien3 + thanhTien4;
  let formattedTotal = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(total);

  // OUTPUT
  $("#exampleModal").modal("show");
  document.querySelector(".modal-body").innerHTML = `
  <table class="table">
  <thead>
   <tr>
            <th colspan="2">Loại xe</th>
            <th>${loaiXeGrabCar}</th>
            <th>Số km: ${soKm}km</th>
          </tr>
   
  </thead>
  <tbody>
   <tr>
      <th scope="col">CHI TIẾT</th>
      <th scope="col">SỬ DỤNG</th>
      <th scope="col">ĐƠN GIÁ (VND)</th>
      <th scope="col">THÀNH TIỀN (VND)</th>
    </tr>
    <tr>
      <th scope="row">KM ĐẦU TIÊN</th>
      <td>1km</td>
      <td>${donGiaKmDauTien}</td>
      <td>${thanhTien1}</td>
    </tr>
    <tr>
      <th scope="row">TỪ 1 TỚI 19 KM</th>
      <td>18km</td>
      <td>${donGiaKmTu1Den19}</td>
      <td>${thanhTien2}</td>
    </tr>
    <tr>
      <th scope="row">TỪ 19 KM TRỞ LÊN</th>
      <td>${soKm3}km</td>
      <td>${donGiaKmTu19TroLen}</td>
      <td>${thanhTien3}</td>
    </tr>
    <tr>
      <th scope="row">THỜI GIAN CHỜ TÍNH PHÍ <br> (MIỄN PHÍ 3 PHÚT ĐẦU)</th>
      <td>Chờ ${thoiGianCho} phút <br> Tính tiền ${ThoiGianChoSau3P} phút</td>
      <td>${donGiaThoiGianCho}</td>
      <td>${thanhTien4}</td>
    </tr>
  </tbody>
    <tfoot>
    <tr>
      <th colspan="4" class="text-right" scope="col">TỔNG TIỀN: <span class="text-danger">${formattedTotal}</span></th>
    </tr>
  </tfoot>
</table>`;
};

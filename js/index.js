// Bài tập 1:
document.getElementById('btnNhapSoNgayLam').onclick = function () {
    // input: số ngày làm => number, lương 1 ngày : 100.000 => number
    var soNgayLam = +document.getElementById('soNgayLam').value;
    const luong1Ngay = 100000
    // output: tiền lương => number
    var tienLuong = 0;
    // các bước xử lí: 
    tienLuong = soNgayLam * luong1Ngay;
    document.getElementById('ketQuaBai1').innerHTML = tienLuong.toLocaleString('vi', {style : 'currency', currency : 'vnd'});
}

// bài tập 2:
function hienThiDiemTrungBinh() {
    // input: nhập vào 5 số => number
    var soThu1 = +document.getElementById('soThu1').value;
    var soThu2 = +document.getElementById('soThu2').value;
    var soThu3 = +document.getElementById('soThu3').value;
    var soThu4 = +document.getElementById('soThu4').value;
    var soThu5 = +document.getElementById('soThu5').value;
    // output: điểm trung bình => number
    var diemTrungBinh = 0;
    // progress:
    diemTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5 ) / 5;
    document.getElementById('ketQuaBai2').innerHTML = "tổng điểm trung bình là: " + diemTrungBinh;
}

// bài tập 3:
function hienThiQuyDoiTien() {
    // input: số tiền USD muốn đổi=> number
    var soTienUSD = +document.getElementById('soTienUSD').value;
    const tienVietNam = 23500
    // output: số tiền đã quy đổi => number
    var tienDaQuyDoi = 0;
    // progress:
    tienDaQuyDoi = soTienUSD * tienVietNam;
    document.getElementById('ketQuaBai3').innerHTML = tienDaQuyDoi.toLocaleString('vi', {style : 'currency', currency : 'vnd'});
}

// bài tập 4:
function hienThiSoLieu() {
    // input: chiều dài và chiều rộng => number
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    // output: chu vi và diện tích => number
    var chuVi = 0;
    var dienTich = 0;
    // progress:
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;
    document.getElementById('ketQuaBai4').innerHTML = "chu vi là: " + chuVi + " " + ";" + " " + "diện tích là: " + dienTich;
}

// bài tập 5:
function tongKySo() {
    // input: nhập 2 ký số vào bất kì => number
    var kySo = document.getElementById('kiSo').value;
    // output: tổng 2 ký số đó => number
    var tongKySo = 0;
    // progress
    var hangChuc = Math.floor(kySo / 10);
    var donVi = kySo % 10;
    tongKySo = hangChuc + donVi;
    document.getElementById('ketQuaBai5').innerHTML = "tổng 2 ký số là: " + tongKySo;
}
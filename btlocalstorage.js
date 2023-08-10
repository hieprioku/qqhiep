function taoSp() {
    let sp = [
        {
            'tensp':'Áo thun',
            'gia': 100000,
            'hình':"",
            'soluong':1
        },
        {
            'tensp':'Áo sơ mi',
            'gia': 200000,
            'hình':"",
            'soluong':3
        },
        {
            'tensp':'Áo 3 lỗ',
            'gia': 50000,
            'hình':"",
            'soluong':5
        },
        {
            'tensp':'Áo khoác',
            'gia': 300000,
            'hình':"",
            'soluong':2
        }
    ];
    sessionStorage.setItem("sp",JSON.stringify(sp));
    alert('đã tạo sản phẩm xong trong sessionStorage')
}

function hienSp() {
    var str=`
    <div class ='rows'>
    <div>TT</div>
    <div>Tên sp</div>
    <div>Giá</div>
    <div>số lượng</div>
    <span>Tiền</span>
    </div>`;
    var text = sessionStorage.getItem("sp");
    var sp = JSON.parse(text);
    console.log(sp);
    for (let i = 0; i < sp.length; i++) {
        sanpham =sp[i];
        str+=`
        <div class ='rows'>
        <div>${i}</div>
        <div>${sanpham.tensp} </div>
        <div>${sanpham.gia}</div>
        <div><input onkeyup="doisoluong()" onchange="doisoluong()" type="number" value="${sanpham.soluong}"</div>
        <span>${sanpham.gia*sanpham.soluong}</span>
        </div>  
        `;
    }
    document.getElementById("giohang").innerHTML=str; 
}
function doisoluong() {
    var soluong = event.target.value;
    var gia = event.target.parentElement.parentElementSibling.innerText;
    var tien = soluong*gia;
    event.target.parentElement.nextElementSibling.innerText=tien;
    tongtiengiohang();
}
function tongtiengiohang() {
    var arr= document.getElementsByClassName("rows");
    var tongtienGH=0;
    for  (let i=1 ; i < arr.length; index++) {
        let row = arr[i]
        tien=row.getElementsByTagName("span")[0].innerText;
        tien = parseFloat(tien)
        tongtienGH+=tien;
    }
    document.getElementById("tongtiengiohang").innerText= "Tổng tiền giỏ hàng =" + tongtienGH;
}
function xoaSp() {
    sessionStorage.removeItem("sp");
    document.getElementById("giohang").innerHTML="";
    document.getElementById("tongtiengiohang").innerHTML="";
}


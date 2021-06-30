/*const num = [2 , 4, 6, 8]
const callback = (item, index) => {
    console.log('STT:' , index, 'la', item)
}
num.forEach(callback)*/

// ------c2 -callback function .--------
/*const num = [2,4,6,8]
num.forEach((item, index) => {
    console.log('STT', index , 'la ', item)
}
)*/
// ----call --------
/*const user = {
   
    print (age ,location){
        console.log(this.name + ' ' + age + 'tuoi ,song lai'+ location) 
    }
}
const Name = {
    name : 'Hoang Nhat Minh '
}
user.print.call( Name ,25 ,'viet nam')*/
 
// --------------number anh method-----------
/*function rutTien(lan1, lan2){
    const sodu = 0.3;
    if(Number((lan1 + lan2).toFixed(1))> sodu){ //ép kiểu sang number
        console.log('so tien ban rút vượt quá số dư  ')
    } else {
        console.log('Bạn đã rút tiền thành công')
    }
}
rutTien(0.2, 0.1)*/

//to string
/* var x = 123;
console.log(x)
console.log(x.toString())*/

// to fixed
/* var x = 9.5678
const y = Number(x.toFixed(2)); ép kiểu sang number
console.log(y)*/

// parseInt chuyển về kiểu số nguyên
//parseFloat chuyển về kiểu số thập phân

//-----------------string and method------------------
/*const name_1 = 'Hoang Nhat Minh';
const name_=2 = 'Nguyen thi ngoc anh Nguyen';
const name_4 = 'hoang , nhat ,minh' 
console.log(name_1.length)// đếm độ dài chuỗi
console.log (name_2.indexOf('a')) // lấy ra vị trí phần tử
console.log (name_2.slice(5,9))//cắt chuỗi
console.log (name_2.replace('Nguyen','XYZ'))//thay thế chuỗi
console.log (name_2.replace(/Nguyen/g, 'XYZ'))//thay thế tất cả phần tử có trong chuỗi
console.log (name_1.toLocaleUpperCase() )//chuyen chu thuong sang chu hoa
console.log (name_2.toLocaleLowerCase())//chuyen chu hoa sang chu thuong
var name_3 = name_1.concat (' ',name_2);//nối chuỗi
console.log(name_3)
function soSanh(chuoi_1, chuoi_2){
    return chuoi_1.toLocaleLowerCase().trim() == chuoi_2.toLocaleLowerCase().trim();

}
console.log(soSanh('Hoang Nhat minh ', 'HOANG NHAT MINH'))//so sánh 2 chuỗi

console.log(name_1.charAt(7))//lay ra ky tu cua 1 chuoi
console.log(name_4.split(',')) //chuyển chuỗi sang mảng tham số là chuỗi ngăn cách */

//---------------array and method---------------
/*const car = ['kia','BWM','MES'];//array
console.log(car[1])
const thongTin = ['hoangnhatminh',{name:'hoangvien'},[1,2,3]]

let check =Array.isArray(car)//kiểm tra xem là array k 
console.log(check)

const str = car.toString();
console.log(str)
const str_2 = car.join('-');// chuyển array sang string
console.log(str_2)

const ar_3 = car.push('Toyouta')// thêm phần tử vào cuối mảng
console.log(car)

car.pop(); // xóa phần tử cuối mảng và return lại phần tử đó
console.log(car)

const ar_4 = car.slice(1);
console.log(ar_4) // tách ra mảng mới 

const ar_5 = car.splice(2,0,'Honda' ,'Labogini')//thêm hoặc xóa phần tử trong mảng return vef phan tu duoc xoa
console.log(ar_5)// ko phần tử nào vì phần tử xóa = 0 (return về 0)
console.log(car)

const numBers = [0,1,2,3,4,5,6,7];
const newNumber = [];
// for(let i = 0 ;i < numBers.length; i++){ //them tat ca phan tu vao mang moi 
//     newNumber.push(numBers[i])
// }
numBers.forEach((value , index, array) => {
    newNumber.push(value)
})
console.log(newNumber)

let d = new Date()
d = new Date(2021,27,6)
console.log(d)*/

/* const element = document.getElementById('name')
console.log(element)
element.style.color = 'green' 
console.log(element.getAttribute('type')) */

// const vd_1 = document.getElementsByTagName('label')
// console.log(vd_1)
// for(let i = 0;i < vd_1.length; i++){ // thay doi mau sac cua the label
//     vd_1[i].style.color = 'red'
// }

// let vd_2 = document.querySelectorAll('label')
// vd_2.forEach(item =>{
//     item.style.color = 'red'
// })


const card = document.createElement('div')
card.className =  'card p-3'
card.setAttribute('id','minh');
//card.textContent = 'Nguyen thi Ngoc Anh'
card.innerHTML = '<b>Nguyen thi ngoc Anh</b>'
const container = document.querySelector('.container') // add 1 card vafo giao dien
container.appendChild(card);
card.style.color = 'red';

const card_2 = document.querySelector('.card')
//card_2.remove() // xoa element
const alert_1 = document.createElement('div')
alert_1.className = 'alert alert-success'
alert_1.textContent = 'Day la alert'

container.replaceChild(alert_1, card_2)
alert_1.style.background = 'pink'

document.getElementById('btn_id').addEventListener('click', event =>{
    const value = document.getElementById('name').value
    console.log(value)
    document.getElementById('name').value = ''
    const card = document.createElement('div')
    card.className = 'card mb-3 p-2'
    card.textContent = value
    card.style.background = 'red'
    document.querySelector('.list').appendChild(card)
} )


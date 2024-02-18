// buy ticket click and scrollDown

const buyBtn = document.getElementById('scrollButton');
    buyBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 1400,
        left: 0,
        behavior:'smooth'
    });
});

// button disbaled
document.getElementById("coupon-btn").disabled = true;
document.getElementById("next-btn").disabled = true;

// seat count here
const seatAll = document.getElementsByClassName('seat-btn');


const phoneNumber = document.getElementById('phone-input');
getPhone  = typeof phoneNumber.value;

let seatLeft = 40;
let seatCount = 0;
const getPrice = 550
let totalPrice = 0;
let grandTotalPrice = 0
for ( const seat of seatAll ) {
    seat.addEventListener('click', function() {
        seatCount++;
        seatLeft--;
        totalPrice = seatCount * 550;
        const myPrice = document.getElementById('total-price')
        myPrice.innerHTML = totalPrice;
        
        seat.classList.add('bg-[#1DD100]');

        const CountAll = document.getElementById('seat-count');
        CountAll.innerHTML = seatCount;

        document.getElementById("seat-left").innerHTML = seatLeft;
        const seatDiv = document.getElementById('seat-div');
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.innerText= seat.innerText;
        const h2 = document.createElement('h1');
        h2.innerText= 'Economy';
        const h3 = document.createElement('h1');
        h3.innerText= getPrice;
        div.style.display="flex";
        div.classList.add('justify-between');
        div.classList.add('items-center');
        div.classList.add('text-base');
        div.classList.add('font-normal');
        div.classList.add('inter');
        div.classList.add('text-[#00000083]');

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);
        seatDiv.appendChild(div);

        if( seatCount > 0 && getPhone ==='string' ){
            document.getElementById("next-btn").disabled = false;
        }


    });
};

